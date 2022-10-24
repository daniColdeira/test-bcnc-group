import styled from "styled-components";

export const WrapperInfo = styled.div`
  cursor: pointer;
  padding: 10px 20px;
  background-color: white;
  max-width: 120px;
  min-width: 120px;
  border-radius: 3px;
  border: 2px solid rgba(197, 201, 199, 0.3);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 36px 0;
  height: fit-content;
  position: relative;
  padding-top: 35px;
  -webkit-box-shadow: 5px 4px 5px 0px rgba(197, 201, 199, 1);
  -moz-box-shadow: 5px 4px 5px 0px rgba(197, 201, 199, 1);
  box-shadow: 5px 4px 5px 0px rgba(197, 201, 199, 1);
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  alignitems: start;
`;

export const Font12 = styled.div`
  font-size: 12px;
`;

export const FlexWrap = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
