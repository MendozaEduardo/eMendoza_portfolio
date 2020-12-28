import React from "react";
import Fade from "react-reveal/Fade";
import Tilt from "react-tilt";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import { Container, Title } from "../components/StyledComponents";
import strings from "../utilities/strings";
import { Grid } from "@material-ui/core";

export const Projects = () => {
  return (
    <section>
      <Title title="Projects" />
      {strings.projects.map(project => {
        return (
          //Every other container will alternate color
          <Container key={project.id} even={project.id % 2 ? false : true}>
            <Grid>
              <Row>
                <Col md={8} sm={12}>
                  <Fade duration={1000} delay={500} distance="30px">
                    <div>
                      <Title title={project.title} purpleContainer={project.id % 2 ? true : false}>
                        {project.title || "Project Title"}
                      </Title>
                      <div>
                        <h3>{project.subTitle || "Project Subtitle"}</h3>
                      </div>
                      <a target="_blank" rel="noopener noreferrer" href={project.link || "#!"}>
                        See Live
                      </a>
                    </div>
                  </Fade>
                </Col>
                <Col md={2} sm={12}>
                  <Fade duration={1000} delay={1000} distance="30px">
                    <div className="project-wrapper__image">
                      <a
                        href={project.link || "#!"}
                        target="_blank"
                        aria-label="Project Link"
                        rel="noopener noreferrer"
                      >
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
                            <img
                              className="projectThumbnail"
                              alt={project.title}
                              src={project.imgSrc}
                            />
                          </div>
                        </Tilt>
                      </a>
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
