import {
  GET_PODCASTS_SUCCESS,
  GET_PODCASTS_FAILURE,
  GET_PODCAST_SUCCESS,
  GET_PODCAST_FAILURE,
  GET_PODCASTS_REQUEST,
  SET_FILTER_PODCASTS,
  GET_PODCAST_REQUEST,
} from "../types";

const initialState = {
  podcasts: [],
  podcast: null,
  filterPodcasts: [],
  data: null,
  loadingPodcasts: false,
  loadingPodcast: false,
  episodes: [],
};

const users = (previousState = initialState, action) => {
  switch (action.type) {
    case GET_PODCASTS_SUCCESS:
      return {
        ...previousState,
        data: action.payload,
        podcasts: action.payload?.feed.entry,
        filterPodcasts: action.payload?.feed.entry,
        loadingPodcasts: false,
      };
    case SET_FILTER_PODCASTS:
      return {
        ...previousState,
        filterPodcasts: action.payload,
      };
    case GET_PODCASTS_FAILURE:
      return {
        ...previousState,
        error: action.payload,
        loadingPodcasts: false,
      };
    case GET_PODCASTS_REQUEST:
      return {
        ...previousState,
        loadingPodcasts: true,
      };
    case GET_PODCAST_REQUEST:
      return {
        ...previousState,
        loadingPodcast: true,
      };
    case GET_PODCAST_SUCCESS:
      return {
        ...previousState,
        podcast: action.payload.results[0],
        episodes: action.payload.results.slice(1, action.payload.length),
        loadingPodcast: false,
      };
    case GET_PODCAST_FAILURE:
      return { ...previousState, error: action.payload, loadingUser: false };
    default:
      return previousState;
  }
};

export default users;
