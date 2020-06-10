import React from "react";
import { Jumbotron, Container, Col, Row } from "react-bootstrap";

export const Hero = (props) => {
  return (
    <Jumbotron className="bg-transparent jumbotron-fluid p-0">
      <Container fluid={true}>
        <Row className="justify-content-center py-5">
          <Col md={8} sm={12}>
            {props.title && <h1 className="display-1 font-weight-bolder">{props.title}</h1>}
            {props.subTitle && <h3 className="display-4 font-weight-light">{props.subTitle}</h3>}
          </Col>
        </Row>
      </Container>
    </Jumbotron>
  );
};
