/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import * as types from "../../redux/types";
import { setFilterPodcasts } from "../../redux/sagas/podcasts";
import PodcastsList from "./components/PodcastsList";
import SearchInput from "./components/SearchInput";
import { DivList } from "./styled";

const ls = require("localstorage-ttl");

function MainView() {
  const { podcasts, filterPodcasts } = useSelector((state) => ({
    podcasts: state.podcasts.podcasts,
    filterPodcasts: state.podcasts.filterPodcasts,
    loading: state.podcasts.loadingPodcasts,
  }));

  const [inputValue, setInputValue] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { value } = event.target;
    const filterName = podcasts.filter((podcast) =>
      podcast["im:name"].label.toLowerCase().includes(value.toLowerCase())
    );
    const filterAuthors = podcasts.filter((podcast) =>
      podcast["im:artist"].label.toLowerCase().includes(value.toLowerCase())
    );
    const currentFilterPodcasts = [...filterName, ...filterAuthors];
    const result = currentFilterPodcasts.filter((item, index) => {
      return currentFilterPodcasts.indexOf(item) === index;
    });
    dispatch(setFilterPodcasts(result));
    setInputValue(value);
  };

  const handleOnSubmit = () => {};

  useEffect(() => {
    // Obtiene la primera página de la lista de usuarios
    const listPodcasts = ls.get("listPodcasts");
    if (listPodcasts) {
      if (podcasts.length === 0) {
        dispatch({
          type: types.GET_PODCASTS_SUCCESS,
          payload: listPodcasts,
        });
      }
    } else {
      dispatch({ type: types.GET_PODCASTS_REQUEST });
    }
  }, [dispatch, podcasts]);

  return (
    <DivList>
      <>
        <SearchInput
          handleChange={handleChange}
          handleOnSubmit={handleOnSubmit}
          filterPodcasts={filterPodcasts}
          inputValue={inputValue}
        />
        <PodcastsList />
      </>
    </DivList>
  );
}

export default MainView;
