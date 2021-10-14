import React from "react";
import { Grid, Typography, Button, Stack } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";
import { CarouselImg, Countdown } from ".";
import { experimentalStyled as styled } from "@material-ui/core/styles";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 0),
}));

export default function NFTMint() {
  return (
    <RootStyle>
      <Grid
        container
        spacing={0}
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={12} md={12} dir="ltr" textAlign="center">
          <Typography
            sx={{
              fontSize: 90,
              fontWeight: "normal",
            }}
          >
            microbes
          </Typography>
        </Grid>
        <Grid item xs={12} md={4} dir="ltr">
          <MotionInView variants={varFadeInUp}>
            <Countdown />
          </MotionInView>
        </Grid>
        <Grid item xs={12} md={6} dir="ltr" sx={{ py: 5 }}>
          <MotionInView variants={varFadeInUp}>
            <CarouselImg />
          </MotionInView>
        </Grid>
        <Grid item xs={12} md={4} dir="ltr" textAlign="center">
          <Stack direction="column" spacing={2}>
            <Button
              sx={{
                width: 242,
                height: 75,
                textTransform: "lowercase",
              }}
              variant="contained"
              color="inherit"
            >
              <Typography variant="h5">
                <b>mint</b>
              </Typography>
            </Button>
            <Typography variant="h5">minting cost</Typography>
          </Stack>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
