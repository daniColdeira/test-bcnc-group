import styled, { keyframes } from "styled-components";

export const rotate = keyframes`
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
`;

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const HeaderContainer = styled.div`
  padding: 10px 5px;
  border-bottom: 2px solid grey;
  width: 80%;
  font-size: 20px;
  font-weight: 700;
  display: flex;
  justify-content: space-between;
  height: 80px;
  align-items: center;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  position: sticky;
  top: 0;
  background-color: white;
  z-index: 2;
`;

export const Spinner = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  & > div {
    position: absolute;
    border: 4px solid red;
    opacity: 1;
    border-radius: 50%;
    animation: ${rotate} 1s cubic-bezier(0, 0.2, 0.8, 1) infinite;
  }

  & > div:nth-child(2) {
    animation-delay: -0.5s;
  }
  @keyframes {
    0% {
      top: 36px;
      left: 36px;
      width: 0;
      height: 0;
      opacity: 1;
    }
    100% {
      top: 0px;
      left: 0px;
      width: 72px;
      height: 72px;
      opacity: 0;
    }
  }
`;
