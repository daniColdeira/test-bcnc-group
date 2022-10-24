import * as React from "react";
import { CountDiv, SearchInputDiv, Input } from "../styled";

function SearchInput({
  handleOnSubmit,
  inputValue,
  filterPodcasts,
  handleChange,
}) {
  return (
    <SearchInputDiv>
      <CountDiv>{filterPodcasts.length}</CountDiv>
      <form onSubmit={handleOnSubmit}>
        <Input
          type="text"
          value={inputValue}
          onChange={handleChange}
          placeholder="Filter podcasts"
        />
      </form>
    </SearchInputDiv>
  );
}

export default SearchInput;
