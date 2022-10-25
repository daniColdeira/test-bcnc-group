import axios from "axios";
import { call, put } from "redux-saga/effects";
import * as types from "../types";

const ls = require("localstorage-ttl");

export function setFilterPodcasts(status) {
  return {
    type: types.SET_FILTER_PODCASTS,
    payload: status,
  };
}

const fethPodcastsList = () =>
  axios({
    method: "get",
    url: `https://itunes.apple.com/us/rss/toppodcasts/limit=100/genre=1310/json`,
  });

const fetchPodcastDetail = (id) => {
  const baseURL = `https://api.allorigins.win/get?url=${encodeURIComponent(
    `https://itunes.apple.com/lookup?id=${id}&country=US&media=podcast&entity=podcastEpisode&attribute=descriptionTerm&limit=200`
  )}`;
  return axios({
    method: "get",
    url: baseURL,
  });
};
// worker Saga: will be fired on GET_PODCASTS_REQUEST actions
export function* fetchPodcasts() {
  try {
    // eslint-disable-next-line global-require
    const users = yield call(fethPodcastsList);
    ls.set("listPodcasts", users.data, [1000 * 3600 * 24]);
    yield put({ type: types.GET_PODCASTS_SUCCESS, payload: users.data });
  } catch (e) {
    yield put({ type: types.GET_PODCASTS_FAILURE, payload: e.message });
  }
}
// worker Saga: will be fired on GET_PODCAST_REQUEST actions
export function* fetchPodcast({ payload: id }) {
  try {
    const user = yield call(fetchPodcastDetail, id);
    // Localstorage variable is loaded
    const podcastDetail = ls.get("podcastDetail");
    if (ls.get("podcastDetail")) {
      // If it exists, a map variable is generated and set with the new value.
      const podcastDetailCacheMap = new Map(Object.entries(podcastDetail));
      podcastDetailCacheMap.set(id, JSON.parse(user.data.contents));
      try {
        ls.set(
          "podcastDetail",
          Object.fromEntries(podcastDetailCacheMap.entries()),
          localStorage.getItem("podcastDetail").expires_at // Store value the remaining time
        );
      } catch (e) {
        if (e.code === 22) {
          // If localStore size is exceeds, remove podcastDetail and call api again
          localStorage.removeItem("podcastDetail");
          yield put({
            type: types.GET_PODCAST_REQUEST,
            id,
          });
        }
      }
    } else {
      // If not, a new map is generated with the new value
      const podcastDetailCacheMap = new Map([
        [id, JSON.parse(user.data.contents)],
      ]);
      ls.set(
        "podcastDetail",
        Object.fromEntries(podcastDetailCacheMap.entries()),
        3600 * 24 * 1000 // Store value 24 hours
      );
    }
    yield put({
      type: types.GET_PODCAST_SUCCESS,
      payload: JSON.parse(user.data.contents),
    });
  } catch (e) {
    yield put({ type: types.GET_PODCAST_FAILURE, payload: e.message });
  }
}
