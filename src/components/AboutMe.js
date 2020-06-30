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
        <h1>
          <strong>About Me</strong>
        </h1>
        <h2>
          Hey there, welcome to my site. My name is Eduardo Mendoza and I'm a
          front-end developer from Austin. I love to code and am continually
          looking for ways to further develop my skillset.
        </h2>
      </Grid>
    </Grid>
  );
};
