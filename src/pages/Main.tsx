import React, { useState, ChangeEventHandler } from "react";
import Container from "@mui/material/Container";
import {
  InputAdornment,
  Box,
  Typography,
  OutlinedInput,
  Divider,
} from "@mui/material";
import { ReactComponent as SearchIcon } from "./assets/icons/search.svg";
import NewsList from "../components/NewsList";

export default function Main() {
  const [searchValue, setSearchValue] = useState("");
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    setSearchValue(event.target.value);
  };

  // const handleClick = () => {
  //   setSearchValue("");
  // };

  return (
    <Container sx={{ display: "flex", flexDirection: "column" }}>
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 1, marginTop: 5 }}
      >
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
            border: "1px solid",
            borderColor: "primary.main",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
            maxWidth: 600,
            "& input": {
              padding: 0,
            },
          }}
        />
      </Box>
      <Box
        sx={{
          marginTop: 4,
          display: "flex",
          flexDirection: "column",
          gap: 0.5,
        }}
      >
        <Typography sx={{ fontWeight: 600 }}>Results: 0</Typography>
        <Divider />
      </Box>
      {/* <NewsList/> */}
    </Container>
  );
}
