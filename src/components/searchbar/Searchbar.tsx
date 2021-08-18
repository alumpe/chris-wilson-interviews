import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";
import { Container } from "./searchbarStyles";

export const Searchbar = () => {
  return (
    <Container>
      <div>
        <SearchIcon />
      </div>

      <div>
        <TextField label="Search" />
      </div>
    </Container>
  );
};
