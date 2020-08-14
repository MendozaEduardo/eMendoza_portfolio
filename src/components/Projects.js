import React from "react";
import { Project } from "../components";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

import strings from "../utilities/strings";

export const Projects = () => {
  const { items } = strings.projects;

  const handleCardClick = id => {
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

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
    },
  }));

  const makeItems = items => {
    return items.map(item => {
      return (
        <Grid item={true} lg={2} md={12} sm={12}>
          <Project item={item} click={e => handleCardClick(item.id, e)} key={item.id} />
        </Grid>
      );
    });
  };

  return (
    <Grid container={true} wrap="wrap" justify="center" className={useStyles.root} spacing={0}>
      {makeItems(items)}
    </Grid>
  );
};
