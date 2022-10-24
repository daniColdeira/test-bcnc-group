import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Sidebar from "../Sidebar";
import EpisodeInfo from "./components/EpisodeInfo";
import { EpisodeDiv } from "./styled";
import { findEpisode, checkPodcast } from "../../utils";

import "./episodeView.css";

import * as types from "../../redux/types";

function Podcast() {
  const { podcastId, episodeId } = useParams();
  const [episode, setEpisode] = useState(null);

  const { podcast } = useSelector((state) => ({
    podcast: state.podcasts.podcast,
  }));
  const { episodes } = useSelector((state) => ({
    episodes: state.podcasts.episodes,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    // Check if there is no value in the store or if it is not the podcast that contains the episode searched for
    if (episodes.length === 0 || !findEpisode(episodes, episodeId))
      checkPodcast(podcastId, dispatch, types);
  }, []);

  useEffect(() => {
    if (episodes.length > 0) {
      setEpisode(findEpisode(episodes, episodeId));
    }
  }, [episodes]);

  return (
    <EpisodeDiv>
      {podcast && (
        <Sidebar
          author={podcast.artistName}
          title={podcast.collectionName}
          imgPodcast={podcast.artworkUrl100}
          genres={podcast.genres}
          urlView={podcast.collectionViewUrl}
          releaseDate={podcast.releaseDate}
          id={podcast.collectionId}
        />
      )}
      {episode && <EpisodeInfo episode={episode} />}
    </EpisodeDiv>
  );
}

export default Podcast;
