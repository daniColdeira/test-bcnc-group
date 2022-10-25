import React from "react";
import { WrapperInfo, InfoDiv, FlexWrap, Font12, StyledLink } from "./styled";
import { getDate } from "../../utils";

function Sidebar({ imgPodcast, author, genres, title, releaseDate, id }) {
  return (
    <WrapperInfo>
      <img src={imgPodcast} alt="podcast_image" />
      <InfoDiv>
        <StyledLink to={`/podcast/${id}`}>
          <div>{title}</div>
          <Font12>{`by ${author}`}</Font12>
        </StyledLink>
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
