import React from "react";
import Grid from "@material-ui/core/Grid";

import { Title } from "../components/StyledComponents";
import strings from "../utilities/strings";

export const AboutMe = () => {
  const { title, subtitle } = strings.aboutMe;
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
          <Title title={title} />

          <h4>{subtitle}</h4>
        </Grid>
      </Grid>
    </section>
  );
};
