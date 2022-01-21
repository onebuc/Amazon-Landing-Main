import React from "react";
import styled from "styled-components";

import StartFooter from "../StartFooter";

const StartPage: React.FC = ({ children }) => (
  <StyledPage>
    <StyledMain>{children}</StyledMain>
  </StyledPage>
);
const StyledPage = styled.div``;

const StyledMain = styled.div`
  align-items: flex-start;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  min-height: calc(100vh - 215px);
  color: white;
  padding: ${(props) => props.theme.spacing[6]}px 0;
  background-image: url("Amazons_logo3.svg");
  background-repeat: no-repeat;
  background-size: 1250px, 1250px;
  background-position: left;
`;


export default StartPage;
