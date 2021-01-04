import React from "react";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Container, Title } from "../components/StyledComponents";
import strings from "../utilities/strings";
import { Grid } from "@material-ui/core";

export const PhotoGrid = () => {
  return (
    <section>
      <Title title={strings.photoGrid.title} />
      {strings.photoGrid.photos.map(photo => {
        return (
          //Every other container will alternate color
          <Container key={photo.id} even={photo.id % 2 ? false : true}>
            <Grid>
              <Row>
                <Col md={5} sm={12}>
                  <Fade duration={1000} delay={500} distance="30px">
                    <div>
                      <Title title={photo.title} purpleContainer={photo.id % 2 ? true : false}>
                        {photo.title || "photo Title"}
                      </Title>
                      <div>
                        <h5>{photo.subtitle || "photo Subtitle"}</h5>
                      </div>
                    </div>
                  </Fade>
                </Col>
                <Col md={4} sm={12}>
                  <Fade duration={1000} delay={1000} distance="30px">
                    <div>
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: "cubic-bezier(.03,.98,.52,.99)",
                        }}
                      >
                        <div>
                          <picture>
                            <source media="(min-width:1000px)" srcSet={photo.img} />
                            <source media="(min-width:300px)" srcSet={photo.img2} />
                            <img className="photoThumbnail" src={photo.img2} alt={photo.title} />
                          </picture>
                        </div>
                      </Tilt>
                    </div>
                  </Fade>
                </Col>
              </Row>
            </Grid>
          </Container>
        );
      })}
    </section>
  );
};
