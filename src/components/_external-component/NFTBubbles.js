import React from "react";
import { Grid } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import Bubbles from "src/components/bubbles";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 0),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(0),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

export default function NFTBubbles() {
  return (
    <RootStyle id="buttons">
      <Grid container spacing={5} justifyContent="center">
        <ContentStyle>
          <Grid
            id="bubbles"
            container
            spacing={0}
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={6} dir="ltr">
              <Bubbles
                name="bubbles1"
                title1="biological"
                title2="traits"
                style={{ backgroundColor: "black" }}
              />
            </Grid>

            <Grid item xs={12} md={6} dir="ltr">
              <Bubbles name="bubbles2" title1="visual" title2="traits" />
            </Grid>
          </Grid>
        </ContentStyle>
      </Grid>
    </RootStyle>
  );
}
