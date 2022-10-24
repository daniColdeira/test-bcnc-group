/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link as RouterLink } from "react-router-dom";
import PaginationControlled from "./Pagination";
import {
  Link,
  MinWidth,
  MinWidthGrey,
  PodcastListDiv,
  ListPodcasts,
} from "../styled";
import "../../../App.css";

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
                .slice((page - 1) * 16, (page - 1) * 16 + 16)
                .map((podcast) => (
                  <RouterLink
                    to={`/podcast/${podcast.id.attributes["im:id"]}`}
                    className="link-podcast"
                    key={podcast.id.attributes["im:id"]}
                  >
                    <Link>
                      <img
                        src={podcast["im:image"][0].label}
                        alt="podcast_image"
                        className="link-image"
                      />
                      <MinWidth>{podcast["im:name"].label}</MinWidth>
                      <MinWidthGrey>{`Author: ${podcast["im:artist"].label}`}</MinWidthGrey>
                    </Link>
                  </RouterLink>
                ))}
            </ListPodcasts>
          </PodcastListDiv>
          <PaginationControlled
            count={filterPodcasts ? Math.ceil(filterPodcasts.length / 16) : 0}
            setPage={setPage}
            page={page}
          />
        </>
      )}
    </>
  );
}

export default PodcastsList;
