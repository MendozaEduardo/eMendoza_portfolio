import React, { useState } from "react";
import { ThemeProvider } from "styled-components";

import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import { PrimaryButton, Footer } from "../src/components";
import { HomePage, AboutPage } from "../src/pages";
import { defaultTheme, purpleTheme } from "../src/utilities";

// 'ContactPage' will be added at a later time

const App = () => {
  const [usePurpleTheme, setUsePurpleTheme] = useState(false);
  const [state] = useState({
    title: "Eduardo Mendoza, Front-End Developer",
    headerLinks: [
      { title: "Home", path: "/" },
      { title: "About", path: "/about" },
      // { title: "Contact", path: "/contact" },
    ],
    home: {
      title: "Welcome To My Site",
      subTitle: "Check out my projects!",
    },
    about: { title: "About Me" },
    contact: { title: "Let's Talk!" },
  });

  return (
    <Router>
      <ThemeProvider theme={usePurpleTheme ? purpleTheme : defaultTheme}>
        <Container
          className="p-0"
          fluid={true}
          style={{
            background: usePurpleTheme
              ? defaultTheme.primaryColor
              : purpleTheme.primaryColor,
          }}
        >
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <PrimaryButton onClick={() => setUsePurpleTheme(!usePurpleTheme)}>
              Change Theme
            </PrimaryButton>
            <Navbar.Brand>{state.title}</Navbar.Brand>
            <Navbar.Toggle className="border-0" aria-controls="navbar-toggle" />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link className="nav-link" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
                {/* <Link className="nav-link" to="/contact">Contact</Link> */}
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <HomePage
                title={state.home.title}
                subTitle={state.home.subTitle}
              />
            )}
          />
          <Route
            path="/about"
            render={() => <AboutPage title={state.about.title} />}
          />
          {/* <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          /> */}
        </Container>
        <Footer />
      </ThemeProvider>
    </Router>
  );
};

export default App;
