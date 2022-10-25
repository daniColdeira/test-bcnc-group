/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import PaginationControlled from "./Pagination";
import {
  Link,
  MinWidth,
  MinWidthGrey,
  PodcastListDiv,
  ListPodcasts,
  StyledImage,
  StyledLink,
} from "../styled";

function PodcastsList() {
  const { loading, filterPodcasts } = useSelector((state) => ({
    filterPodcasts: state.podcasts.filterPodcasts,
    loading: state.podcasts.loadingPodcasts,
  }));
  const [page, setPage] = useState(1);

  return (
    <>
      {!loading && (
        <>
          <PodcastListDiv>
            <ListPodcasts>
              {filterPodcasts
                .slice((page - 1) * 12, (page - 1) * 12 + 12)
                .map((podcast) => (
                  <StyledLink
                    to={`/podcast/${podcast.id.attributes["im:id"]}`}
                    key={podcast.id.attributes["im:id"]}
                  >
                    <Link>
                      <StyledImage
                        src={podcast["im:image"][0].label}
                        alt="podcast_image"
                      />
                      <MinWidth>{podcast["im:name"].label}</MinWidth>
                      <MinWidthGrey>{`Author: ${podcast["im:artist"].label}`}</MinWidthGrey>
                    </Link>
                  </StyledLink>
                ))}
            </ListPodcasts>
          </PodcastListDiv>
          <PaginationControlled
            count={filterPodcasts ? Math.ceil(filterPodcasts.length / 12) : 0}
            setPage={setPage}
            page={page}
          />
        </>
      )}
    </>
  );
}

export default PodcastsList;
