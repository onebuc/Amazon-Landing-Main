import React from "react";

import { Container, Spacer } from "react-neu";
import styled from "styled-components";

interface PageHeaderProps {
  icon: React.ReactNode;
  subtitle?: string;
  title?: string;
}

const PageHeader: React.FC<PageHeaderProps> = ({ icon, subtitle, title }) => {
  return (
    <Container>
      <StyledPageHeader>
        <StyledIcon>{icon}</StyledIcon>
        <Spacer />
        <StyledTitle>{title}</StyledTitle>
        <Spacer size="sm" />
        <StyledSubtitle>{subtitle}</StyledSubtitle>
        {/* <StyledSubtitle>Stay tuned and we are coming soon.</StyledSubtitle> */}
      </StyledPageHeader>
    </Container>
  );
};

const StyledPageHeader = styled.div`
  align-items: center;
  padding-left: 250px;
  box-sizing: border-box;
  display: block;
  flex-direction: column;
  padding-bottom: ${(props) => props.theme.spacing[6]}px;
  margin: 0 auto;
  margin-left: -85px;
  width: 150%;
`;

const StyledIcon = styled.span.attrs({
  role: "img",
})`
  font-size: 96px;
  font-weight: 500;
  min-height: 110px;
  line-height: 96px;
  text-align: center;
  min-width: 96px;
  @media (max-width: 768px) {
    font-size: 64px;
    text-align: left;
  }
`;

const StyledTitle = styled.h1`
  color: ${(props) => props.theme.textColor};
  font-size: 36px;
  font-weight: 700;
  font-family: "Great Vibes", normal;
  margin: 0;
  padding: 0;
  text-align: center;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

const StyledSubtitle = styled.h3`
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  font-weight: 400;
  font-family: "Great Vibes", normal;
  margin: 1;
  opacity: 0.75;
  padding: 0;
  text-align: center;
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export default PageHeader;
