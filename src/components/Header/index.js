import React from "react";
import { useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import { HeaderContainer, HeaderDiv, StyledLink } from "./styled";

function Header() {
  const { loadingPodcasts, loadingPodcast } = useSelector((state) => ({
    loadingPodcasts: state.podcasts.loadingPodcasts,
    loadingPodcast: state.podcasts.loadingPodcast,
  }));
  return (
    <HeaderDiv>
      <HeaderContainer>
        <StyledLink to="/">Podcaster</StyledLink>
        {loadingPodcasts ||
          (loadingPodcast && (
            <div>
              <LoadingSpinner />
            </div>
          ))}
      </HeaderContainer>
    </HeaderDiv>
  );
}

export default Header;
