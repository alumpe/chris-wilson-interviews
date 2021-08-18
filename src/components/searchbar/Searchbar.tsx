import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { TextField, InputAdornment } from "@material-ui/core";
import { Container } from "./searchbarStyles";
import { useStore } from "../../store/useStore";

export const Searchbar = () => {
  const { searchTerm, setSearchTerm } = useStore();
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setSearchTerm(event.target.value || undefined);

  return (
    <Container>
      <TextField
        placeholder="Search"
        value={searchTerm ?? ""}
        onChange={handleChange}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
      />
    </Container>
  );
};
