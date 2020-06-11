import React from "react";
import "./App.css";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

import { Footer, WelcomeModal } from "../src/components";
import { HomePage, AboutPage } from "../src/pages";

// 'ContactPage' will be added at a later time

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-bottom" bg="transparent" expand="lg">
            <Navbar.Brand>{this.state.title}</Navbar.Brand>
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
                title={this.state.home.title}
                subTitle={this.state.home.subTitle}
              />
            )}
          />
          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          />
          {/* <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          /> */}
        </Container>
        <Footer />
      </Router>
    );
  }
}

export default App;
