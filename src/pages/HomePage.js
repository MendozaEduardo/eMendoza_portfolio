import React from "react";
import styled from "styled-components";

import { typeScale } from "../utilities";
import { Carousel, Hero } from "../components";

const Welcome = styled.div`
  font-family: "Roboto Slab", monospace;
  color: ${props => props.theme.textOnFormElementBackground};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Header = styled.h1`
  font-size: ${typeScale.header1};
  text-align: center;
`;
const Subtitle = styled.h3`
  font-size: ${typeScale.header3};
  text-align: center;
`;
export const HomePage = props => {
  return (
    <div>
      <Welcome>
        <Header>{props.title}</Header>
        <Subtitle>{props.subTitle}</Subtitle>
      <Carousel />
      </Welcome>
    </div>
  );
};
