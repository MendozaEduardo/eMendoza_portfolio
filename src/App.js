import React, { useState, useEffect } from "react";
import { ThemeProvider } from "styled-components";
import CssBaseline from "@material-ui/core/CssBaseline";
import { heroData } from "./mock/data";
import { NavBar, Footer, Hero } from "../src/components";
import Home from "../src/pages/Home";
import { defaultTheme, PortfolioProvider } from "../src/utilities";

const App = () => {
  const [hero, setHero] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
  }, []);

  return (
    <PortfolioProvider value={{ hero }}>
      <CssBaseline />
      <ThemeProvider theme={defaultTheme}>
        <Hero />
        <NavBar />
        <Home />
        <Footer />
      </ThemeProvider>
    </PortfolioProvider>
  );
};

export default App;
