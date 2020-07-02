import React from "react";
import Grid from "@material-ui/core/Grid";

export const AboutMe = () => {
  return (
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
          Hey there, my name is Eduardo Mendoza and I'm a front-end developer
          from Austin. I enjoy coding and am continually looking for ways to
          develop my skillset.
        </h4>
      </Grid>
    </Grid>
  );
};
