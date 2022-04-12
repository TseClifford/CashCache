import { TextField, InputAdornment } from "@mui/material";
import { Search } from "@mui/icons-material";
import { useState } from "react";

const SearchBar = (props) => {
  const [inputValue, setInputValue] = useState("");

  return (
    <TextField
      className="w-2/5 max-w-sm outline-none bg-white"
      size="small"
      placeholder={props.placeholder}
      onInput={(e) => {
        e.preventDefault();
        setInputValue(e.target.value);
        console.log("target value: " + e.target.value);
        console.log("input state value: " + inputValue); // Testing state value
      }}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Search className="text-slate-300" />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default SearchBar;
