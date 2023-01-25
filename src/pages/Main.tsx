import React, {
  useState,
  ChangeEventHandler,
  useTransition,
  useMemo,
} from "react";
import { InputAdornment, Box, Typography, OutlinedInput } from "@mui/material";
import { ReactComponent as SearchIcon } from "../assets/icons/search.svg";
import NewsList from "../components/NewsList";
import { useArticlesData } from "../hooks";

export default function Main() {
  const [, startTransition] = useTransition();
  const [filter, setFilter] = useState("");
  const [keywords, keywordsAsMap] = useMemo(() => {
    const asArr = filter.toLowerCase().split(" ").filter(Boolean);
    const asMap = asArr.reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: true,
      }),
      {}
    );
    return [asArr, asMap];
  }, [filter]);
  const data = useArticlesData({ limit: 6, keywords });
  const handleChange: ChangeEventHandler<HTMLInputElement> = (event) => {
    startTransition(() => {
      setFilter(event.target.value);
    });
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: 1330,
        marginX: "auto",
        paddingX: 2,
      }}
    >
      <Box
        sx={{ display: "flex", flexDirection: "column", gap: 1, marginTop: 5 }}
      >
        <Typography sx={{ fontWeight: 600 }}>Filter by keywords</Typography>
        <OutlinedInput
          onChange={handleChange}
          placeholder="Search..."
          value={filter}
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
      <NewsList data={data} keywordsAsMap={keywordsAsMap} />
    </Box>
  );
}
