import React from "react";
import { Spinner, CenterDiv } from "./styled";

function LoadingSpinner() {
  return (
    <CenterDiv>
      <Spinner>
        <div />
        <div />
      </Spinner>
    </CenterDiv>
  );
}

export default LoadingSpinner;
