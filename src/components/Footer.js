import React from "react";
import styled from "styled-components";

import { typeScale } from "../utilities";

const FooterWrapper = styled.footer`
  display: flex;
  flex-flow: row wrap;

  align-items: center;
  justify-content: center;
  align-items: center;
  font-family: "Roboto Slab", monospace;
  font-size: ${typeScale.h5};
  color: ${props => props.theme.textOnFormElementBackground};
`;
export const Footer = () => {
  return (
    <FooterWrapper className="mt-5 p-1 border-top">
      This site was made by Eduardo Mendoza
    </FooterWrapper>
  );
};
