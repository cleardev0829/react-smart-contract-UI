import React from "react";
import { Container, Grid, Typography, Stack } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";
import { experimentalStyled as styled } from "@material-ui/core/styles";

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(0),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

export default function Section({ children, title, components }) {
  return (
    <ContentStyle>
      <Container maxWidth="xlg">
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          spacing={25}
        >
          <Grid item xs={12} md={7} dir="ltr">
            <MotionInView variants={varFadeInUp}>
              <Typography
                variant="h6"
                color="secondary"
                sx={{
                  mb: 5,
                  fontStyle: "italic",
                  fontWeight: "300",
                }}
              >
                {title}
              </Typography>
            </MotionInView>

            <MotionInView variants={varFadeInUp}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontStyle: "normal",
                  fontWeight: "normal",
                }}
                color="white"
              >
                {children}
              </Typography>
            </MotionInView>
          </Grid>

          <Grid item xs={12} md={5} dir="ltr">
            <MotionInView variants={varFadeInUp}>
              <Stack justifyContent="center" alignItems="center" spacing={5}>
                {components &&
                  components.map((c, index) => {
                    return c;
                  })}
              </Stack>
            </MotionInView>
          </Grid>
        </Grid>

        <Grid
          container
          xs={12}
          md={12}
          dir="ltr"
          justifyContent="center"
          alignItems="center"
        >
          <img
            width={41.5}
            height={41.5}
            src="https://drive.google.com/uc?id=1MVLZWavVAZsEv2cIcDA50BqxfhxLMziD"
            data-src="https://drive.google.com/uc?id=1MVLZWavVAZsEv2cIcDA50BqxfhxLMziD"
            alt=""
          />
        </Grid>
      </Container>
    </ContentStyle>
  );
}
