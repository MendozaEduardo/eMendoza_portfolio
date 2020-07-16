import React from "react";
import Grid from "@material-ui/core/Grid";

export const AboutMe = () => {
  return (
    <section>
      <Grid
        container
        className="aboutMeWrapper"
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Grid item md={4}>
          <h2>
            <strong>About Me</strong>
          </h2>
          <h4>
            I'm a developer with both front and back-end experience from Austin with a
            passion for building beautiful, responsive web applications.
          </h4>
        </Grid>
      </Grid>
    </section>
  );
};
