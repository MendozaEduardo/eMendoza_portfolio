import React from "react";
import { Container, Row, Col } from "react-bootstrap";

export const Content = (props) => {
  return (
    <Container fluid={true}>
      <Row className="justify-content-center">
        <Col md={10}>{props.children}</Col>
      </Row>
    </Container>
  );
};
