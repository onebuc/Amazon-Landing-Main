import React, { useCallback, useEffect, useState } from "react";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardIcon,
  CardTitle,
  Container,
  Separator,
  Spacer,
} from "react-neu";
import styled from "styled-components";

import StartPage from "components/StartPage";
import StartPageHeader from "components/StartPageHeader";
import StartSplit from "components/StartSplit";
import StyledSocials from "components/StartPage";
import { CardHeader } from "semantic-ui-react";


const ASTRONAUTS = [<img src = "Amazons_logo.svg" alt="AMZN" width="500" height="500"/>];

const Start: React.FC = () => {
/*   const [astronaut, setAstronaut] = useState(<img src = "Amazons_logo.png" alt="AMZN" width="500" height="500"/>);
 */
/*   const updateAstronaut = useCallback(() => {
    const newAstro = ASTRONAUTS[Math.floor(Math.random() * ASTRONAUTS.length)];
    setAstronaut(newAstro);
  }, [setAstronaut]);

  useEffect(() => {
    const refresh = setInterval(updateAstronaut, 1000);
    return () => clearInterval(refresh);
  }, [updateAstronaut]); */

  return (
    <StartPage>
      <Spacer size="lg" />
      <Spacer size="lg" /> 
      <Spacer size="lg" /> 
      <Spacer size="lg" /> 
      <StyledHero>
      <StartSplit> 
        <Spacer size="sm" />
        <CardContent>
        <Spacer size="sm" />
        <Button text="Docs" href="https://docs.amazonsdao.finance/"/>
        <Spacer size="lg" />
        <Button text="Twitter" href="https://twitter.com/AmazonsDao" variant="secondary"/>
        <Spacer size="lg" />
        <Button text="Medium" href="https://amazons-dao.medium.com/"/>
      </CardContent>
      
      </StartSplit>

        <Container size ="lg">
         <StartPageHeader 
          icon=""
          title="Find your place and grow your assets with DeFi 2.0, and $AMZN"
          subtitle="Take up arms and join our fight to create financial freedom. Join your brothers and sisters and find your place in our upcoming community run protocol."
          
       />
          </Container>
        <Container size="lg" >
          
          <Box row justifyContent="flex-end" >
            
            <Button text="Open App" href="#" disabled />
            <Spacer />
            <Button
              
              text="Join Discord"
              href="https://discord.gg/UkmrTUB8h8"
              
            />
          </Box>
 
          <Spacer size="lg"/>
        </Container>
        

        
{/*           <Box row justifyContent="center">
        <img src = "Aam_dao.png" alt="AMZN" width="500" height="500"/>
        </Box> */}
    
        <Spacer size="lg" /> 
      <Spacer size="lg" /> 
      <Spacer size="lg" /> 
      
      </StyledHero>
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
