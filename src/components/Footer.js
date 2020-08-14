import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";

import strings from "../utilities/strings";

export const Footer = () => {
  const { name } = strings.hero;
  return (
    <AppBar position="static" color="default">
      <Typography align="center" variant="subtitle1">
        {name}
      </Typography>
    </AppBar>
  );
};
