import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

import { typeScale } from "../utilities";

const FooterWrapper = styled.footer`
  font-family: "Roboto Slab", monospace;
  font-size: ${typeScale.h5};
  color: ${props => props.theme.textOnFormElementBackground};
`;
export const Footer = () => {
  return (
    <FooterWrapper className="mt-5">
      <Container fluid={true}>
        <Row className="border-top justify-content-between p-3">
          <Col className="p-0" md={3} sm={12}>
            Eduardo Mendoza
          </Col>
          <Col className="p-0 d-flex justify-content-end" md={3}>
            This site was made by Eduardo Mendoza.
          </Col>
        </Row>
      </Container>
    </FooterWrapper>
  );
};
