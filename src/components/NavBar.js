import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import Badge from "@material-ui/core/Badge";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

import strings from "../utilities/strings";

const useStyles = makeStyles(theme => ({
  grow: {
    flexGrow: 1,
  },
  title: {
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
  inputRoot: {
    color: "inherit",
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
  sectionDesktop: {
    display: "none",
    [theme.breakpoints.up("md")]: {
      display: "flex",
    },
  },
  sectionMobile: {
    display: "flex",
    [theme.breakpoints.up("md")]: {
      display: "none",
    },
  },
}));

export function NavBar() {
  const classes = useStyles();
  const { title, linkedInRef, gitHubRef } = strings.navBar;
  return (
    <section id="aboutMe">
      <div className={classes.grow}>
        <AppBar position="sticky" color="default">
          <Toolbar>
            <Typography className={classes.title} variant="h6" noWrap>
              {title}
            </Typography>
            <div className={classes.grow} />
            <IconButton aria-label="LinkedIn Link" color="inherit" href={linkedInRef}>
              <Badge color="secondary">
                <LinkedInIcon />
              </Badge>
            </IconButton>
            <IconButton aria-label="GitHub link" color="inherit" href={gitHubRef}>
              <Badge color="secondary">
                <GitHubIcon />
              </Badge>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    </section>
  );
}
