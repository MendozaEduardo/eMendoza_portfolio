import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

export const NavBar = () => {
  return (
    <AppBar position="static" color="default">
        <Typography align="center" variant="h4">
          Eduardo Mendoza
        </Typography>
    </AppBar>
  );
};
