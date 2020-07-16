import React from "react";
import { navigate } from "@reach/router";

import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root: {
    maxWidth: 300,
    textAlign: "center",
    borderRadius: 25,
    marginTop: 5,
    marginBottom: 5,
  },
});

export const Project = props => {
  const classes = useStyles();
  const goToExternalSite = () => navigate(props.item.link);

  return (
    <Card className={classes.root} onClick={() => goToExternalSite()}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt={props.item.imgSrc}
          height="300"
          image={props.item.imgSrc}
          title={props.item.imgSrc}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.item.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.item.subTitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};
