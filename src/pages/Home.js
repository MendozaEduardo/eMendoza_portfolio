import React from "react";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import CssBaseline from "@material-ui/core/CssBaseline";

import { Projects, AboutMe, PhotoGrid, Skills } from "../components";

const Home = props => {
  return (
    <React.Fragment>
      <CssBaseline />
      <Grid>
        <AboutMe />

        <Skills />

        <Divider variant="middle" className="my-4" />

        <PhotoGrid />

        <Divider variant="middle" className="my-4" />

        <Projects />
      </Grid>
    </React.Fragment>
  );
};

export default Home;
