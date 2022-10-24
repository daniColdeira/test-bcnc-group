const ls = require("localstorage-ttl");

export const getDuration = (time) => {
  const seg =
    (time / 1000) % 60 < 10 ? `0${(time / 1000) % 60}` : (time / 1000) % 60;
  return `${Math.trunc(time / 1000 / 60)}:${seg}`;
};

export const getDate = (isoDate) => {
  const date = new Date(isoDate);
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

export const findEpisode = (episodes, episodeId) => {
  return episodes.find(
    (episode) => parseInt(episode.trackId, 10) === parseInt(episodeId, 10)
  );
};

export const checkPodcast = (podcastId, dispatch, types) => {
  // Localstorage variable is loaded
  const podcastDetail = ls.get("podcastDetail");
  // If a podcast is not found in the store with an id equal to the one we are looking for,
  // a new map is generated with the value saved in localStorage
  if (podcastDetail) {
    const podcastDetailCacheMap = new Map(Object.entries(podcastDetail));
    // The id is searched inside the map
    if (!podcastDetailCacheMap.has(podcastId)) {
      // If it is not found, an API call is made to collect the information
      dispatch({
        type: types.GET_PODCAST_REQUEST,
        payload: podcastId,
      });
    } else {
      // It is found it is saved in the store
      dispatch({
        type: types.GET_PODCAST_SUCCESS,
        payload: podcastDetailCacheMap.get(podcastId),
      });
    }
  } else {
    // If the match is not found, an API call is made to collect the information
    dispatch({
      type: types.GET_PODCAST_REQUEST,
      payload: podcastId,
    });
  }
};
