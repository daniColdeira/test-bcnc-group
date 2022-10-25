import React from "react";
import {
  ListDiv,
  Child,
  Episode,
  Width15,
  Width70,
  Width15Black,
  LinkEpisode,
} from "../styled";
import { getDuration, getDate } from "../../../utils";
import "../../../App.css";

function EpisodesList({ episodes, page, podcast }) {
  return (
    <ListDiv>
      <Episode>
        <Width70>Title</Width70>
        <Width15>Date</Width15>
        <Width15>Duration</Width15>
      </Episode>
      {episodes?.slice((page - 1) * 14, (page - 1) * 14 + 14).map((episode) => (
        <Child key={episode.trackId}>
          <LinkEpisode
            to={`/podcast/${podcast.collectionId}/episode/${episode.trackId}`}
          >
            <Width70>{episode.trackName}</Width70>
            <Width15Black>{getDate(episode.releaseDate)}</Width15Black>
            <Width15Black>{getDuration(episode.trackTimeMillis)}</Width15Black>
          </LinkEpisode>
        </Child>
      ))}
    </ListDiv>
  );
}

export default EpisodesList;
