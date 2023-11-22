import React from "react";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ value, setValue, target }) => {
  const handleSearchChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <FormControl sx={{ m: 2 }} className="search-input-form">
      <TextField
        id="search-input"
        placeholder={`${target} 찾기`}
        value={value}
        onChange={handleSearchChange}
        InputProps={{
          endAdornment: (
            <IconButton aria-label="search-button">
              <SearchIcon />
            </IconButton>
          ),
        }}
      />
    </FormControl>
  );
};

export default SearchBar;
