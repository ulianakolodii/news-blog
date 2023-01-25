import { FC } from "react";
import { Article } from "../api";
import { Link } from "react-router-dom";
import {
  Box,
  Typography,
  Card,
  CardContent,
  CardMedia,
  CardActions,
  Button,
} from "@mui/material";
import { ReactComponent as CalendarToday } from "../assets/icons/calendar.svg";
import { ReactComponent as ArrowForward } from "../assets/icons/arrow-forward.svg";
import dayjs from "dayjs";

const truncate = (str: string, length: number) => {
  if (str.length > length) {
    return str.substring(0, length) + "...";
  }
  return str;
};

const NewsCard: FC<Article & { keywordsAsMap: Record<string, true> }> = ({
  id,
  title,
  imageUrl,
  summary,
  keywordsAsMap,
  publishedAt,
}) => {
  const highlightedTitle = title.split(" ").map((word) => {
    if (keywordsAsMap[word.toLowerCase()]) {
      return <span style={{ background: "yellow" }}> {word} </span>;
    }
    return ` ${word} `;
  });
  const truncatedSummary = truncate(summary || "", 100);
  const highlightedSummary = truncatedSummary.split(" ").map((word) => {
    if (keywordsAsMap[word.toLowerCase()]) {
      return <span style={{ background: "yellow" }}> {word} </span>;
    }
    return ` ${word} `;
  });
  return (
    <Card
      sx={{
        maxWidth: 400,
        border: "1px solid",
        borderColor: "primary.main",
        boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
        borderRadius: 1.25,
        flex: 1,
        flexBasis: "100%",
      }}
    >
      <CardMedia sx={{ height: 217 }} image={imageUrl} />
      <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 1,
          }}
        >
          <CalendarToday />
          <Typography color="text.secondary" fontSize={14}>
            {dayjs(publishedAt).format("MMM D, YYYY")}
          </Typography>
        </Box>
        <Typography variant="h5" component="div" color="secondary.main">
          {highlightedTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {highlightedSummary}
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          variant="text"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 0.75,
          }}
        >
          <Link to={`/readmore/${id}`} style={{ textDecoration: "none" }}>
            <Typography
              sx={{
                textTransform: "lowercase",
                color: "secondary.main",
                fontWeight: 700,
                fontSize: 16,
                ":first-letter": {
                  textTransform: "uppercase",
                },
              }}
            >
              Read more
            </Typography>
          </Link>
          <ArrowForward />
        </Button>
      </CardActions>
    </Card>
  );
};

export default NewsCard;
