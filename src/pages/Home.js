import React from "react";
import Grid from "@material-ui/core/Grid";

import { Projects, AboutMe, PhotoGrid, Skills } from "../components";

const Home = props => {
  return (
    <React.Fragment>
      <Grid>
        <AboutMe />
        <Skills />
        <Projects />
        <PhotoGrid />
      </Grid>
    </React.Fragment>
  );
};

export default Home;
