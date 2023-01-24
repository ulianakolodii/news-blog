import React, { useState, ChangeEventHandler } from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import {
  InputAdornment,
  Box,
  Typography,
  OutlinedInput,
  Divider,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { ReactComponent as SearchIcon } from "./assets/icons/search.svg";
import { CalendarToday } from "@mui/icons-material";
import { ArrowForward } from "@mui/icons-material";


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
      <Box sx={{ marginTop: 4.5 }}>
        <Card
          sx={{
            maxWidth: 400,
            border: "1px solid",
            borderColor: "primary.main",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
            borderRadius: "5px",
          }}
        >
          <CardMedia
            sx={{ height: 217 }}
            image="/static/images/cards/contemplative-reptile.jpg"
            title="green iguana"
          />
          <CardContent
            sx={{ display: "flex", flexDirection: "column", gap: 2 }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: 1,
              }}
            >
              <CalendarToday
                sx={{ height: "13px", width: "12px", color: "text.secondary" }}
              />{" "}
              <Typography color="text.secondary" fontSize={14}>
                June 29th, 2021
              </Typography>
            </Box>
            <Typography variant="h5" component="div" color="secondary.main">
              The 2020 World's Most Valuable Brands
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Non sed molestie tortor massa vitae in mattis. Eget vel consequat
              hendrerit commodo libero aliquam. Urna arcu nunc tortor vitae
              pharetra...
            </Typography>
          </CardContent>
          <CardActions>
            <Button
              variant="text"
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                gap: "4px",
              }}
            >
              <Link to="/readmore" style={{ textDecoration: 'none' }}>
                  <Typography
                    sx={{
                      textTransform: "lowercase",
                      color: "secondary.main",
                      fontWeight: 700,
                      fontSize: 16,
                      ":first-letter": {
                        textTransform: "uppercase",
                      }
                    }
                }
                  >
                    Read more
                  </Typography>
              </Link>
              <ArrowForward
                sx={{
                  height: "10px",
                  width: "12px",
                  color: "secondary.main",
                  marginTop: "2px",
                }}
              />
            </Button>
          </CardActions>
        </Card>
      </Box>
    </Container>
  );
}
