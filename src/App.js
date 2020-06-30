import React from "react";
import { ThemeProvider } from "styled-components";

import { NavBar, WelcomeBanner, Footer } from "../src/components";
import Home from "../src/pages/Home";
import { defaultTheme } from "../src/utilities";

const App = () => {
  const state = {
    title: "Eduardo Mendoza",
    home: {
      title: "Welcome To My Site",
      subTitle: "Check out my projects!"
    },
    about: { title: "About Me" },
    contact: { title: "Let's Talk!" }
  };

  return (
    <React.Fragment>
      <ThemeProvider theme={defaultTheme}>
        <NavBar />
        <WelcomeBanner />
        <Home title={state.title} subTitle={state.home.subTitle} />
        <Footer />
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
