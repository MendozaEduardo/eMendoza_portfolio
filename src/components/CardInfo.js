import React from "react";
import { navigate } from "@reach/router";
import { useSpring, animated } from "react-spring";
import styled from "styled-components";
import { typeScale } from "../utilities";

import { SecondaryButton } from "../components";

export const CardInfo = props => {
  const Title = styled.h4`
    font-family: "Roboto Slab", monospace;
    font-size: ${typeScale.header4};
    color: ${props => props.theme.textOnFormElementBackground};
  `;

  const SubTitle = styled.p`
    font-family: "Roboto Slab", monospace;
    font-size: ${typeScale.paragraph};
    color: ${props => props.theme.textOnFormElementBackground};
  `;

  const style = useSpring({ opacity: 1, from: { opacity: 0 } });
  const goToExternalSite = () => navigate(props.link);

  return (
    <animated.div className="e-card-info" style={style}>
      <Title className="e-card-title">{props.title}</Title>
      <SubTitle className="e-card-sub-title">{props.subTitle}</SubTitle>
      <SecondaryButton
        onClick={() => goToExternalSite()}
        target="_blank"
        rel="noopener noreferrer"
      >
        Take Me There!
      </SecondaryButton>
    </animated.div>
  );
};
