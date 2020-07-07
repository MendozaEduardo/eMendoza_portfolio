import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";

import { Projects, AboutMe, PhotoGrid, Skills } from "../components";

const Home = props => {
  return (
    <React.Fragment>
      <Grid>
        <AboutMe />

        <Skills />

        <Divider variant="middle" className="my-4" />

        <Projects />

        <Divider variant="middle" className="my-4" />

        <PhotoGrid />
      </Grid>
    </React.Fragment>
  );
};

export default Home;
