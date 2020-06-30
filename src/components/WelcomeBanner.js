import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from "react-bootstrap/Container";

import { device } from "../utilities";
import { Illustrations } from "../assets";

export const WelcomeBanner = () => {
  return (
    <Container fluid="true">
      <Carousel controls={false} indicators={false}>
        <Carousel.Item>
          <picture>
            <source media={device.viewport12} srcSet={Illustrations.bannerLg} />
            <source media={device.viewport7} srcSet={Illustrations.bannerMd} />
            <img src={Illustrations.bannerSm} alt="Welcome" />
          </picture>
        </Carousel.Item>
      </Carousel>
    </Container>
  );
};
