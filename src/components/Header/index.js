import React from "react";
import { Link as RouterLink } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "./LoadingSpinner";
import { HeaderContainer, HeaderDiv } from "./styled";
import "../../App.css";

function Header() {
  const { loadingPodcasts, loadingPodcast } = useSelector((state) => ({
    loadingPodcasts: state.podcasts.loadingPodcasts,
    loadingPodcast: state.podcasts.loadingPodcast,
  }));
  return (
    <HeaderDiv>
      <HeaderContainer>
        <RouterLink to="/" className="link-header">
          Podcaster
        </RouterLink>
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
