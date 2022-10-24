import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { WrapperInfo, InfoDiv, FlexWrap, Font12 } from "./styled";
import { getDate } from "../../utils";
import "../../App.css";

function Sidebar({ imgPodcast, author, genres, title, releaseDate, id }) {
  return (
    <WrapperInfo>
      <img src={imgPodcast} alt="podcast_image" />
      <InfoDiv>
        <RouterLink to={`/podcast/${id}`} className="link-sidebar">
          <div>{title}</div>
          <Font12>{`by ${author}`}</Font12>
        </RouterLink>
        <FlexWrap>
          Géneros:
          {genres.map((genre) => (
            <div key={genre}>{genre}</div>
          ))}
        </FlexWrap>
        <div>{`Desde: ${getDate(releaseDate)}`}</div>
      </InfoDiv>
    </WrapperInfo>
  );
}

export default Sidebar;
