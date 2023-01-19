import React, { useState, ChangeEventHandler } from "react";
import Container from "@mui/material/Container";
import { InputAdornment, Box, Typography, OutlinedInput } from "@mui/material";
import { ReactComponent as SearchIcon } from "./assets/icons/search.svg";

export default function App() {
  const [searchValue, setSearchValue] = useState("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  const handleClick = () => {
    setSearchValue("");
  };
  return (
    <Container maxWidth="sm" sx={{ display: "flex", flexDirection: "column" }}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1 }}>
        <Typography sx={{ fontWeight: 600 }}>Filter by keywords</Typography>
        <OutlinedInput
          onChange={handleChange}
          placeholder="Search..."
          value={searchValue}
          startAdornment={
            <InputAdornment position="start" sx={{ marginRight: 2 }}>
              <SearchIcon />
            </InputAdornment>
          }
          renderSuffix={undefined}
          sx={{
            paddingX: 2,
            paddingY: 1.5,
            borderRadius: 1.25,
            border: "1px solid #EAEAEA",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
            "& input": {
              padding: 0,
            },
            "& fieldset": {
              // borderColor: "red",
            },
          }}
        />
      </Box>
    </Container>
  );
}
