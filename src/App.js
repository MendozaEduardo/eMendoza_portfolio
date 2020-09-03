import React from "react";
import { ThemeProvider } from "styled-components";
import { NavBar, Footer, Hero } from "../src/components";
import Home from "../src/pages/Home";
import { defaultTheme } from "../src/utilities";

const App = () => {
  return (
    <ThemeProvider theme={defaultTheme}>
      <Hero />
      <NavBar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
