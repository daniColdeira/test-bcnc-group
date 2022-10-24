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

export const Bold = styled.div`
  font-weight: 600;
`;

export const CountDiv = styled.div`
  padding: 10px 20px;
  width: 100%;
  border-radius: 3px;
  border: 2px solid rgba(197, 201, 199, 0.3);
  display: flex;
  font-weight: 800;
  justify-content: start;
  align-items: center;
  margin: 36px 0;
  position: relative;
  -webkit-box-shadow: 5px 4px 5px 0px rgba(197, 201, 199, 1);
  -moz-box-shadow: 5px 4px 5px 0px rgba(197, 201, 199, 1);
  box-shadow: 5px 4px 5px 0px rgba(197, 201, 199, 1);
`;

export const Child = styled.div`
  width: 100%;
  &:nth-child(2n) {
    background-color: rgba(197, 201, 199, 0.3);
  }
`;

export const InfoPodcast = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  margin-left: 60px;
`;

export const PodcastDiv = styled.div`
  display: flex;
  padding: 10px 130px;
`;

export const Width15 = styled.div`
  width: 15%;
`;

export const Width15Black = styled.div`
  width: 15%;
  color: black;
`;

export const Width70 = styled.div`
  width: 70%;
`;

export const Episode = styled.div`
  display: flex;
  width: 100%;
  padding: 10px 0;
  font-weight: 600;
`;

export const ListDiv = styled.div`
  padding: 10px 20px;
  background-color: white;
  width: 100%;
  border-radius: 3px;
  border: 2px solid rgba(197, 201, 199, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 0 36px;
  position: relative;
  -webkit-box-shadow: 5px 4px 5px 0px rgba(197, 201, 199, 1);
  -moz-box-shadow: 5px 4px 5px 0px rgba(197, 201, 199, 1);
  box-shadow: 5px 4px 5px 0px rgba(197, 201, 199, 1);
`;

export const Link = styled.button`
  cursor: pointer;
  padding: 10px 20px 20px;
  width: 100%;
  display: flex;
  justify-content: center;
  &:hover {
    background-color: #92a0a6; // <Thing> when hovered
    color: white;
  }
  border-bottom: 1px solid #282c34;
`;

export const MinWidth = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Close = styled.div`
  cursor: pointer;
  padding: 5px;
  width: min-content;
  &:hover {
    color: red;
  }
`;

export const UserImage = styled.img`
  padding: 2px;
  border-radius: 40px;
  width: 200px;
  border: 2px solid darkslateblue;
`;

export const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

export const Margin15 = styled.div`
  margin: 15px 0;
`;

export const DivList = styled.div`
  display: flex;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;
