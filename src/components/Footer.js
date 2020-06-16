import React from "react";
import styled from "styled-components";
import { Container, Row, Col } from "react-bootstrap";

const FooterWrapper = styled.footer`
  display: flex;
  flex-direction: column;
`;

export const Footer = () => {
  return (
    <FooterWrapper>
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
