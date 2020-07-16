import React from "react";
import { Project } from "../components";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import edsAutos from "../assets/images/edsAutos.webp";
import githubMark from "../assets/images/githubMark.webp";
import storybookDoc from "../assets/images/storybookDoc.webp";

export class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 0,
          title: "Ed's Autos",
          subTitle: "Check out my full-stack project",
          imgSrc: edsAutos,
          link: "https://eds-autos-prod.herokuapp.com/",
          selected: false,
        },
        {
          id: 1,
          title: "My GitHub",
          subTitle: "Check out my code",
          imgSrc: githubMark,
          link: "https://github.com/MendozaEduardo",
          selected: false,
        },
        {
          id: 2,
          title: "Storybook",
          subTitle: "Check out the storybook docs for my site",
          imgSrc: storybookDoc,
          link: "https://eds-style-guide.netlify.app",
          selected: false,
        },
      ],
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
      items,
    });
  };

  useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
  }));

  makeItems = items => {
    return items.map(item => {
      return (
        <Grid item={true} lg={2} md={12} sm={12}>
          <Project item={item} click={e => this.handleCardClick(item.id, e)} key={item.id} />
        </Grid>
      );
    });
  };

  render() {
    return (
      <Grid
        container={true}
        wrap="wrap"
        justify="center"
        className={this.useStyles.root}
        spacing={0}
      >
        {this.makeItems(this.state.items)}
      </Grid>
    );
  }
}
