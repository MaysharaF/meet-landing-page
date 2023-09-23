import React from "react";
import Logo from "../../assets/logo.svg";
import HeroLeft from "../../assets/desktop/image-hero-left.png";
import HeroRight from "../../assets/desktop/image-hero-right.png";

import { Container, Header, IntroductionSection, InfoContent } from "./styles";

const Home: React.FC = () => {
  return (
    <Container>
      <Header>
        <img
          src={Logo}
          alt="Logo with two balls diagonally, the bottom one in green and the top one in violet, with the word meet written next to it."
        />
      </Header>
      <IntroductionSection>
        <img src={HeroLeft} alt="" />
        <InfoContent>
          <h1>
            Group Chat <br /> for Everyone
          </h1>
          <p>
            Meet makes it easy to connect with others face-to-face virtually and
            collaborate across any device.
          </p>
        </InfoContent>

        <img src={HeroRight} alt="" />
      </IntroductionSection>
    </Container>
  );
};

export default Home;
