import React, { FC } from "react";
import { Box, Typography, Divider } from "@mui/material";
import NewsCard from "./NewsCard";
import { Articles } from "../api";



const NewsList: FC<{
  data?: Articles;
  keywordsAsMap: Record<string, true>;
}> = ({ data, keywordsAsMap }) => (
  <>
    <Box
      sx={{
        marginTop: 4,
        display: "flex",
        flexDirection: "column",
        gap: 0.5,
      }}
    >
      <Typography sx={{ fontWeight: 600 }}>
        Results: {data ? data.length : 0}
      </Typography>
      <Divider />
    </Box>
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        gap: 4.5,
        marginTop: 4.5,
      }}
    >
      {data &&
        data.map((newsItem) => (
          <NewsCard
            key={newsItem.id}
            {...newsItem}
            keywordsAsMap={keywordsAsMap}
          />
        ))}
    </Box>
  </>
);
export default NewsList;
