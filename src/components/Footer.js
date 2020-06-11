import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
  return (
    <footer className="fixed-bottom pt-5 mt-5">
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
    </footer>
  );
}
