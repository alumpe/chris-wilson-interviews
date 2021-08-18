import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { TextField } from "@material-ui/core";
import { Container } from "./searchbarStyles";
import { useStore } from "../../store/useStore";

export const Searchbar = () => {
  const { searchTerm, setSearchTerm } = useStore();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value || undefined);

  return (
    <Container>
      <div>
        <SearchIcon />
      </div>

      <div>
        <TextField
          label="Search"
          value={searchTerm ?? ""}
          onChange={handleChange}
        />
      </div>
    </Container>
  );
};
