import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import Container from "@material-ui/core/Container";

import {Title} from "../components/StyledComponents";
import { tileData } from "../assets";
import strings from "../utilities/strings";

const useStyles = makeStyles(theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    textAlign: "center",
    overflow: "hidden",
    backgroundColor: theme.palette.grey,
  },
  gridList: {
    width: 1000,
    height: 550,
    transform: "translateZ(0)",
  },
  titleBar: {
    background:
      "linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, " +
      "rgba(0,0,0,0.3) 100%, rgba(0,0,0,0) 100%)",
  },
}));

export function PhotoGrid() {
  const classes = useStyles();
  const { title } = strings.photoGrid;
  return (
    <Container className={classes.root}>
      <Title title={title} />
      <GridList cellHeight={500} spacing={1} className={classes.gridList}>
        {tileData.map(tile => (
          <GridListTile key={tile.img} cols={2} rows={1}>
            <img src={tile.img} alt={tile.title} />
            <GridListTileBar title={tile.title} titlePosition="top" className={classes.titleBar} />
          </GridListTile>
        ))}
      </GridList>
    </Container>
  );
}
