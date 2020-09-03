import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";
import BuildIcon from "@material-ui/icons/Build";
import CodeIcon from "@material-ui/icons/Code";
import LibraryBooksIcon from "@material-ui/icons/LibraryBooks";
import Grid from "@material-ui/core/Grid";
import { Container } from "@material-ui/core";

import strings from "../utilities/strings";

export function Skills() {
  const { title, languages, librariesAndFrameworks, otherTools } = strings.skills;
  return (
    <React.Fragment>
      <Grid
        container
        className="aboutMeWrapper"
        direction="column"
        justify="space-around"
        alignItems="center"
      >
        <Grid item md={4}>
          <h2>
            <strong>{title}</strong>
          </h2>
        </Grid>
      </Grid>
      <Container className="skillsContainer" maxWidth="lg">
        <Grid container direction="row">
          <Grid item lg={4} md={4} sm={8}>
            <List aria-label="Technical Skills">
              {/* Start Heading of skill column */}
              <ListItem>
                <ListItemIcon>
                  <CodeIcon />
                </ListItemIcon>
                <ListItemText primary="Programming Languages" />
              </ListItem>
              <Divider variant="middle" />
              {/* End Heading of skill column */}

              {/* Start skill */}
              {languages.map(item => {
                return (
                  <ListItem>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                );
              })}
              {/* End skill */}
            </List>
          </Grid>
          <Divider />

          <Grid item lg={4} md={4} sm={8}>
            <List aria-label="Technical Skills">
              <ListItem>
                <ListItemIcon>
                  <LibraryBooksIcon />
                </ListItemIcon>
                <ListItemText primary="Libraries and Frameworks" />
              </ListItem>
              <Divider variant="middle" />
              {/* Start skill */}
              {librariesAndFrameworks.map(item => {
                return (
                  <ListItem>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                );
              })}
              {/* End skill */}
            </List>
          </Grid>

          <Grid item lg={4} md={4} sm={8}>
            <List aria-label="Technical Skills">
              <ListItem>
                <ListItemIcon>
                  <BuildIcon />
                </ListItemIcon>
                <ListItemText primary="Other Development Tools" />
              </ListItem>
              <Divider variant="middle" />
              {/* Start skill */}
              {otherTools.map(item => {
                return (
                  <ListItem>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                );
              })}
              {/* End skill */}
            </List>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
