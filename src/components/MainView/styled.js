import styled from "styled-components";

export const CenterDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${(props) => props.inputColor || "#282c34"};
  background: rgb(146, 160, 166, 0.2);
  border: none;
  border-radius: 3px;
`;

export const CountDiv = styled.div`
  background-color: blue;
  color: white;
  border-radius: 10px;
  font-weight: 700;
  padding: 3px 5px;
  margin-right: 10px;
`;

export const SearchInputDiv = styled.div`
  width: 1050px;
  display: flex;
  justify-content: end;
  padding: 20px 0 40px;
  align-items: center;
`;

export const Bold = styled.span`
  font-weight: 600;
`;

export const Link = styled.button`
  cursor: pointer;
  padding: 10px 20px;
  width: 100%;
  background-color: white;
  border-radius: 3px;
  border: 2px solid rgba(197, 201, 199, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 36px 0;
  position: relative;
  padding-top: 35px;
  -webkit-box-shadow: 5px 4px 5px 0px rgba(197, 201, 199, 1);
  -moz-box-shadow: 5px 4px 5px 0px rgba(197, 201, 199, 1);
  box-shadow: 5px 4px 5px 0px rgba(197, 201, 199, 1);
  &:hover {
    background-color: rgba(197, 201, 199, 0.3); // <Thing> when hovered
  }
`;

export const MinWidth = styled.div`
  width: 100%;
  font-size: 14px;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
`;

export const PodcastListDiv = styled.div`
  min-height: 650px;
  max-width: 1050px;
`;

export const MarginBottom = styled.div`
  margin-bottom: 30px;
`;

export const MinWidthGrey = styled.div`
  width: 100%;
  font-size: 14px;
  display: flex;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  font-size: 12px;
  color: grey;
  margin-top: 5px;
`;

export const Close = styled.div`
  cursor: pointer;
  padding: 5px;
  width: min-content;
  &:hover {
    color: red;
  }
`;

export const ListPodcasts = styled.div`
  margin-bottom: 50px;
  display: flex;
  gap: 30px;
  height: min-content;
  align-items: start;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  font-size: calc(10px + 1.3vmin);
  @media (min-width: 960px) {
    margin: 0 50px 50px;
  }
`;

export const Flex = styled.div`
  display: flex;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Margin15 = styled.div`
  margin: 15px 0;
`;

export const DivList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
