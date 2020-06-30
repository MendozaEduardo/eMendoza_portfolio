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

export function Skills() {
  return (
    <Container className="skillsContainer" maxWidth="lg">
      <Grid container direction="row">
        <Grid item lg={4} md={4} sm={8}>
          <List aria-label="Technical Skills">
            <ListItem>
              <ListItemIcon>
                <CodeIcon />
              </ListItemIcon>
              <ListItemText primary="Programming/Spoken Languages" />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText>JavaScript - includes JSX</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>CSS</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>HTML</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Spanish (Fluent)</ListItemText>
            </ListItem>
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
            <ListItem>
              <ListItemText>React</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Material-UI</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Bootstrap</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>react-spring</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Semantic UI</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText></ListItemText>
            </ListItem>
          </List>
        </Grid>

        <Grid item lg={4} md={4} sm={8}>
          <List aria-label="Technical Skills">
            <ListItem>
              <ListItemIcon>
                <BuildIcon />
              </ListItemIcon>
              <ListItemText primary="Other Developer Tools" />
            </ListItem>
            <Divider variant="middle" />
            <ListItem>
              <ListItemText>Node.js</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Figma</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Storybook</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Github/Gitlab</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Codepen</ListItemText>
            </ListItem>
            <ListItem>
              <ListItemText>Passport.js</ListItemText>
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Container>
  );
}
