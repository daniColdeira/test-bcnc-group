import { takeLatest, all } from "redux-saga/effects";
import { fetchPodcasts, fetchPodcast } from "./podcasts";
import * as types from "../types";

function* mySaga() {
  yield all([
    takeLatest(types.GET_PODCASTS_REQUEST, fetchPodcasts),
    takeLatest(types.GET_PODCAST_REQUEST, fetchPodcast),
  ]);
}

export default mySaga;
