import React from "react";
import { Link } from "react-router-dom";
import Container from "@mui/material/Container";
import { Box, Typography, Button } from "@mui/material";
import { ArrowBack } from "@mui/icons-material";

export default function ReadMore() {
  return (
    <Container sx={{}}>
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
          boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.05)",
        }}
      >
        <Box sx={{ fontSize: 24, marginTop: 3.5 }}>
          The 2020 World's Most Valuable Brands
        </Box>
        <Box sx={{ textAlign: "left", fontSixe: 18, marginY: 5, marginX: 7.5 }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum
          ornare convallis non etiam tincidunt tincidunt. Non dolor vel purus
          id. Blandit habitasse volutpat id dolor pretium, sem iaculis. Faucibus
          commodo mauris enim, turpis blandit. Porttitor facilisi viverra mi
          lacus lacinia accumsan. Pellentesque gravida ligula bibendum aliquet
          nulla massa elit. Ac faucibus donec sit morbi pharetra urna. Vel
          facilisis amet placerat ultrices lobortis proin nulla. Molestie tellus
          sed pellentesque tortor vitae eu cras nisl. Sem facilisi amet vitae
          ultrices nullam tellus. Pellentesque eget iaculis morbi at quis eget
          lacus, aliquam etiam. Neque ipsum, placerat vel convallis nulla orci,
          nunc etiam. Elementum risus facilisi mauris diam amet et sed. At
          aliquet id amet, viverra a magna lorem urna. Nibh scelerisque quam
          quam massa amet, sollicitudin vel non. Gravida laoreet neque tincidunt
          eu egestas massa vitae nibh. Nec ullamcorper amet tortor, velit.
          Dictum pellentesque dolor sit duis sed nibh. Euismod rutrum
          pellentesque semper mattis aliquet ornare. Cursus maecenas massa, arcu
          ac adipiscing odio facilisis ac eu. In eget ipsum, sed ultrices tempor
          consequat, elementum cras porta. Sagittis etiam dictumst at duis
          praesent a. Malesuada odio amet aenean diam. Tincidunt lorem faucibus
          neque aliquet lobortis feugiat sed aliquam pulvinar. Praesent aliquet
          ut tempus feugiat placerat quis duis mauris nibh. Eu ullamcorper id
          feugiat sit risus turpis mi. Tristique posuere sed convallis magna eu
          vulputate. Cum sit in hac felis blandit. Cursus eu porta lectus mollis
          nisi, consectetur ac. Ornare vitae lectus iaculis nibh ac et.
          Adipiscing amet in parturient etiam fames. Facilisi id eu sem in
          elementum. Lacus, ipsum morbi vel purus ut arcu laoreet id eu. Libero,
          tincidunt aliquet parturient dolor sapien faucibus nunc. In ipsum
          suscipit nec pharetra non vitae sagittis aenean sit. Consequat integer
          sit netus pellentesque scelerisque ut. Elit augue dui viverra facilisi
          varius. Volutpat iaculis eu ipsum ut. Dui, ut viverra ut amet magna in
          in varius. Aliquet penatibus pretium feugiat lobortis. Mauris nunc, eu
          non massa donec sit duis. Libero nascetur mauris, ac in aliquet cras
          duis donec. Sit porttitor sociis aliquam aliquet odio arcu a viverra.
          Proin convallis bibendum venenatis non orci id proin vitae. Faucibus
          eleifend fermentum sit dictum sagittis fermentum. At id nisi, aliquet
          ut sagittis proin enim. Eget in aenean mi a elit viverra amet urna,
          diam. Cursus id viverra amet adipiscing. Pretium, amet amet mi mauris
          urna, maecenas. Risus ut sit quis donec. Lacinia elementum, amet
          gravida convallis elementum, metus cras. 
          nulla.
        </Box>
      </Box>
      <Button
        variant="text"
        sx={{
          left: 0,
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          gap: "4px",
          marginLeft: 10,
          paddingBottom: 4.5
        }}
      >
        <ArrowBack
          sx={{
            height: "10px",
            width: "12px",
            color: "secondary.main",
            marginTop: "2px",
          }}
        />
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
    </Container>
  );
}
