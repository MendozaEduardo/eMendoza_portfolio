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

import { Title } from "../components/StyledComponents";

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
        <Title title={title} />
      </Grid>
      <Container className="skillsContainer" maxWidth="lg">
        <Grid container direction="row">
          {/* Languages */}
          <Grid item lg={4} md={4} sm={8}>
            <ListItem>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary="Programming Languages" />
            </ListItem>
            <Divider variant="middle" />
            <List aria-label="Technical Skills">
              {languages.map(item => {
                return (
                  <ListItem key={item.id}>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
          <Divider />

          {/* Libraries and Frameworks */}
          <Grid item lg={4} md={4} sm={8}>
            <ListItem>
              <ListItemIcon>
                <LibraryBooksIcon />
              </ListItemIcon>
              <ListItemText primary="Libraries and Frameworks" />
            </ListItem>
            <Divider variant="middle" />
            <List aria-label="Technical Skills">
              {librariesAndFrameworks.map(item => {
                return (
                  <ListItem key={item.id}>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Grid>

          {/* Other tools */}
          <Grid item lg={4} md={4} sm={8}>
            <ListItem>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary="Other Development Tools" />
            </ListItem>
            <Divider variant="middle" />
            <List aria-label="Technical Skills">
              {otherTools.map(item => {
                return (
                  <ListItem key={item.id}>
                    <ListItemText>{item}</ListItemText>
                  </ListItem>
                );
              })}
            </List>
          </Grid>
        </Grid>
      </Container>
    </React.Fragment>
  );
}
