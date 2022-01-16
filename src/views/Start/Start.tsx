import React, { useCallback, useEffect, useState } from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardIcon,
  Container,
  Separator,
  Spacer,
} from "react-neu";
import styled from "styled-components";

import StartPage from "components/StartPage";
import StartPageHeader from "components/StartPageHeader";
import StartSplit from "components/StartSplit";

const ASTRONAUTS = ["AMAZON DAO", "COMING SOON", "Ω 🍴", "⚔ 🏹"];

const Start: React.FC = () => {
  const [astronaut, setAstronaut] = useState("⚔ 🏹");

  const updateAstronaut = useCallback(() => {
    const newAstro = ASTRONAUTS[Math.floor(Math.random() * ASTRONAUTS.length)];
    setAstronaut(newAstro);
  }, [setAstronaut]);

  useEffect(() => {
    const refresh = setInterval(updateAstronaut, 1000);
    return () => clearInterval(refresh);
  }, [updateAstronaut]);

  return (
    <StartPage>
      <StyledHero>
        <StartPageHeader
         icon={`${astronaut}`}
         
          title="Find your place and grow your assets with DeFi 2.0, and $AMZN"
          subtitle="Take up arms and join our fight to create financial freedom. Join your brothers and sisters and find your place in our upcoming community run protocol."
        />
        <Container size="lg">
          <Box row justifyContent="center">
            <Button text="Open App" href="#" />
            <Spacer />
            <Button
              text="Join Discord"
              href="https://discord.gg/UkmrTUB8h8"
              variant="secondary"
            />
          </Box>
        </Container>
      </StyledHero>
      <Container size="lg">
        <Spacer size="lg" />
        <Separator />
        <Spacer size="lg" />
        <StyledSectionIcon>⚔</StyledSectionIcon>
        <Spacer size="lg" />
        <StyledSectionTitle>Fair finance for everyone.</StyledSectionTitle>
        <StyledSectionDescription>
          Spartacus is owned and controlled by our community of Λ token holders.
        </StyledSectionDescription>
        <Spacer size="lg" />
        <StartSplit>
          <Card>
            <Spacer size="md" />
            <CardIcon>💰</CardIcon>
            <CardContent>
              <StyledCardName>Treasury Expansion</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>
                Our treasury will grow through a mix of bonding, and Liquidity Provider fees, increasing the intrisic risk free value of each AMZN token.
              </StyledCardDescription>
              <Spacer size="md" />
              <CardIcon>⚔</CardIcon>
              <StyledCardName>Community run, Community owned.</StyledCardName>
              <Spacer size="md" />
              <StyledCardDescription>
              All holders of AMZN will have a say in the direction of the protocol through regular votes.
              </StyledCardDescription>
              <CardIcon>🔒</CardIcon>
              <StyledCardName>Locked Liquidity</StyledCardName>
              <Spacer size="md" />
              <StyledCardDescription>
              Liquidity will be locked for a MINIMUM of 10 years to ensure the saftey and prosperity of the protocol.
              </StyledCardDescription>


            </CardContent>
            {/* <CardActions>
              <Box row justifyContent="center">
                <Button
                  text="View treasury"
                  variant="secondary"
                  to="/dashboard"
                />
              </Box>
            </CardActions> */}
          </Card>
{/*           <Card>
            <Spacer size="md" />
            <CardIcon>🏛️</CardIcon>
            <CardContent>
              <StyledCardName>Protocol Owned Liquidity</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>
                No more predatory farmers. Lock-in liquidity also help regulate SPA supply.
              </StyledCardDescription>
            </CardContent>
          </Card>
          <Card>
            <Spacer size="md" />
            <CardIcon>🗣️</CardIcon>
            <CardContent>
              <StyledCardName>Decentralized Governance</StyledCardName>
              <Spacer size="sm" />
              <StyledCardDescription>
                Λ holders decide Spartacus's future via on-chain voting.
              </StyledCardDescription>
            </CardContent>
          </Card> */}
        </StartSplit>
      </Container>
    </StartPage>
  );
};

const StyledHero = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: calc(80vh - 96px);
  max-height: 600px;
  min-height: 400px;
`;

const StyledCardName = styled.div`
  color: ${(props) => props.theme.textColor};
  font-size: 24px;
  font-weight: 700;
  text-align: center;
`;

const StyledCardDescription = styled.div`
  color: ${(props) => props.theme.colors.grey[500]};
  font-size: 16px;
  min-height: 56px;
  text-align: center;
`;
const StyledSectionDescription = styled.h3`
  color: ${(props) => props.theme.textColor};
  font-size: 18px;
  opacity: 0.66;
  font-weight: 400;
  text-align: center;
`;

const StyledSectionTitle = styled.div`
  color: ${(props) => props.theme.colors.primary.main};
  font-size: 36px;
  font-weight: 700;
  margin: 0;
  padding: 0;
  text-align: center;
`;

const StyledSectionIcon = styled.div`
  font-size: 64px;
  text-align: center;
`;

const StyledLogo = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  opacity: 0.66;
`;

export default Start;
