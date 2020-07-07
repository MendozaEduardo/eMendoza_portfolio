import React, { useContext, useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";

import { PortfolioContext } from "../utilities/context";
import { PrimaryButton } from "../components/Buttons";

export const Hero = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="hero" className="jumbotron ">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="20px">
          <h1 className="hero-title">
            {title}
            <span className="text-color-main">{name}</span>
            <br />
            <span className="subtitle">{subtitle}</span>
          </h1>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="20px">
          <p className="hero-button">
            <Link to="aboutMe" smooth duration={1000}>
              <PrimaryButton>{cta}</PrimaryButton>
            </Link>
          </p>
        </Fade>
      </Container>
    </section>
  );
};
