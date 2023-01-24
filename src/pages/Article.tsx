import React from "react";
import { Link} from "react-router-dom";
import { Box, Typography, Button } from "@mui/material";
import dummyContent from "../dummyContent";
import { ReactComponent as ArrowBack } from "../assets/icons/arrow-back.svg";

export default function ReadMore() {


  return (
    <>
      <Box
        sx={{
          backgroundImage: "",
          position: "absolute",
          backgroundSize: "cover",
          top: 0,
          left: 0,
          right: 0,
          height: 245,
        }}
      ></Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 1290,
          marginX: "auto",
          position: "relative",
        }}
      >
        <Box
          sx={{
            marginTop: 15,
            marginBottom: 3.5,
            maxWidth: 1290,
            textAlign: "center",
            display: "flex",
            flexDirection: "column",
            border: "1px solid",
            borderColor: "primary.main",
            backgroundColor: "background.paper",
            boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
          }}
        >
          <Box sx={{ fontSize: 24, marginTop: 3.5 }}>
            The Space
          </Box>
          <Box
            sx={{
              textAlign: "left",
              fontSize: 18,
              marginY: 5,
              marginX: 7.5,
              whiteSpace: "pre-wrap",
            }}
          >
            {dummyContent}
          </Box>
        </Box>
        <Box>
          <Button
            variant="text"
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 0.5,
              marginLeft: 7,
              paddingBottom: 4.5,
            }}
          >
            <ArrowBack />
            <Link to="/" style={{ textDecoration: "none" }}>
              <Typography
                sx={{
                  textTransform: "capitalize",
                  color: "secondary.main",
                  fontWeight: 700,
                  fontSize: 16,
                }}
              >
                Back to homepage
              </Typography>
            </Link>
          </Button>
        </Box>
      </Box>
    </>
  );
}
