import React from "react";
import { AppBar, Toolbar } from "@material-ui/core";
import { H6 } from "../typography/headings";
import GitHubIcon from "@material-ui/icons/GitHub";
import { IconButton } from "../buttons";
import { Right } from "./navbarStyles";

export default () => (
  <AppBar position="static">
    <Toolbar>
      <H6>3.15+ Interviews with Chris Wilson</H6>
      <Right>
        <IconButton
          component="a"
          href="https://github.com/alumpe/chris-wilson-interviews"
          target="_blank"
        >
          <GitHubIcon />
        </IconButton>
      </Right>
    </Toolbar>
  </AppBar>
);
