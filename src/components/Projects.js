import React from "react";
import { Card } from "../components";
import Grid from "@material-ui/core/Grid";

import edsAutos from "../assets/images/edsAutos.png";
import githubMark from "../assets/images/githubMark.png";
import storybookDoc from "../assets/images/storybookDoc.png";

export class Projects extends React.Component {
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
          title: "My GitHub",
          subTitle: "Check out my code",
          imgSrc: githubMark,
          link: "https://github.com/MendozaEduardo",
          selected: false
        },
        {
          id: 2,
          title: "Storybook",
          subTitle: "Check out the storybook docs for my site",
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
      <Grid container className="my-5" justify="center">
        <Grid container item className="my-2" sm={12} justify="center">
          <h1>Check out My Projects</h1>
        </Grid>
        <Grid container item lg={12} spacing={3} justify="space-evenly">
          {this.makeItems(this.state.items)}
        </Grid>
      </Grid>
    );
  }
}
