/* eslint-disable jsx-a11y/media-has-caption */
import React, { useEffect, useState } from "react";
import { useSelector, useDispatch /* , useSelector */ } from "react-redux";
import { useParams } from "react-router-dom";

import PaginationControlled from "../MainView/components/Pagination";
import EpisodesList from "./components/EpisodesList";
import Sidebar from "../Sidebar";
import { CountDiv, PodcastDiv, InfoPodcast } from "./styled";
import { checkPodcast } from "../../utils";

import * as types from "../../redux/types";

function Podcast() {
  const { podcastId } = useParams();
  const [page, setPage] = useState(1);

  const { podcast } = useSelector((state) => ({
    podcast: state.podcasts.podcast,
  }));
  const { episodes } = useSelector((state) => ({
    episodes: state.podcasts.episodes,
  }));
  const { loadingPodcast } = useSelector((state) => ({
    loadingPodcast: state.podcasts.loadingPodcast,
  }));

  const dispatch = useDispatch();

  useEffect(() => {
    if (parseInt(podcast?.collectionId, 10) !== parseInt(podcastId, 10)) {
      checkPodcast(podcastId, dispatch, types);
    }
  }, []);

  return (
    <>
      {!loadingPodcast && (
        <PodcastDiv>
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
          <InfoPodcast>
            <CountDiv>{`Episodes: ${podcast?.trackCount}`} </CountDiv>
            <EpisodesList episodes={episodes} page={page} podcast={podcast} />
            <PaginationControlled
              count={episodes ? Math.ceil(episodes.length / 20) : 0}
              setPage={setPage}
              page={page}
            />
          </InfoPodcast>
        </PodcastDiv>
      )}
    </>
  );
}

export default Podcast;
