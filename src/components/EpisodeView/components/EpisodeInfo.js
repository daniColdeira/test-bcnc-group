/* eslint-disable jsx-a11y/media-has-caption */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { WrapperInfo, FullWidth, TitleDiv, DescDiv } from "../styled";

function EpisodesList({ episode }) {
  return (
    <WrapperInfo>
      <FullWidth>
        <TitleDiv>{episode.trackName}</TitleDiv>
        <DescDiv>{episode.description}</DescDiv>
      </FullWidth>
      <FullWidth>
        <audio
          id="player"
          src={episode.episodeUrl}
          controls="controls"
          type="audio/mpeg"
          preload="preload"
        />
      </FullWidth>
    </WrapperInfo>
  );
}

export default EpisodesList;
