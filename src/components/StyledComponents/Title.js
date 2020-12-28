import React from "react";
import Fade from "react-reveal/Fade";
import PropTypes from "prop-types";
import styled from "styled-components";
import { typeScale, primaryFont } from "../../utilities";

const StyledTitle = styled.h1`
  text-align: center;
  font-family: ${primaryFont};
`;

export const SectionHeader = styled(StyledTitle)`
  font-size: ${typeScale.header2};
`;

export const Title = ({ title }) => (
  <SectionHeader>
    <Fade bottom duration={1000} delay={300} distance="0px">
      {title}
    </Fade>
  </SectionHeader>
);

Title.propTypes = {
  title: PropTypes.string.isRequired,
};
