import { NewsItemType } from "../api/news";
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
import { CalendarToday } from "@mui/icons-material";
import { ArrowForward } from "@mui/icons-material";
// import dayjs from "dayjs";
// import relativeTime from "dayjs/plugin/relativeTime";

// dayjs().format();
// dayjs.extend(relativeTime);

const NewsItem = ({ title, imageUrl, summary, publishedAt }: NewsItemType) => {
  return (
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
            <CalendarToday
              sx={{ height: "13px", width: "12px", color: "text.secondary" }}
            />
            <Typography color="text.secondary" fontSize={14}>
              {/* {dayjs().to(dayjs(publishedAt))} */}
            </Typography>
          </Box>
          <Typography variant="h5" component="div" color="secondary.main">
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {summary}
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
            <Link to="/readmore" style={{ textDecoration: "none" }}>
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
  );
};

export default NewsItem;
