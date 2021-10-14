import React from "react";
import { Grid } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";

const RootStyle = styled("div")(({ theme }) => ({
  paddingBottom: theme.spacing(12, 0),
}));

export default function NFTHero() {
  return (
    <RootStyle>
      <Grid container spacing={5} justifyContent="center">
        <img
          src="https://drive.google.com/uc?id=1w8OQIC8fYY-uCM0EFJ_m35v8wdUlFpU1"
          data-src="https://drive.google.com/uc?id=1w8OQIC8fYY-uCM0EFJ_m35v8wdUlFpU1"
          alt=""
        />
      </Grid>
    </RootStyle>
  );
}
