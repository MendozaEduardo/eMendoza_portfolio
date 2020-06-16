import React from "react";
import { Container, Row } from "react-bootstrap";

import edsAutos from "../assets/images/edsAutos.png";
import githubMark from "../assets/images/githubMark.png";
import storybookDoc from "../assets/images/storybookDoc.png";

import { Card } from "../components";

export class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Ed's Autos",
          subTitle: "Check out my full-stack project!",
          imgSrc: edsAutos,
          link: "https://eds-autos-prod.herokuapp.com/",
          selected: false
        },
        {
          id: 1,
          title: "My GitHub Page",
          subTitle: "Check out my projects",
          imgSrc: githubMark,
          link: "https://github.com/MendozaEduardo",
          selected: false
        },
        {
          id: 2,
          title: "Storybook Documentation",
          subTitle: "Check out the storybook documentation for this site",
          imgSrc: storybookDoc,
          link: "https://eds-style-guide.netlify.app",
          selected: false
        }
      ]
    };
  }

  handleCardClick = id => {

    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}
