import React from "react";
import { Container, Grid, Typography } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { varFadeInUp, MotionInView } from "../animate";
import VideoPlayer from "../VideoPlayer";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(20, 0),
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

export default function NFTRarityAndTraits() {
  return (
    <RootStyle>
      <ContentStyle id="buttons">
        <Container maxWidth="xlg" justifyContent="space-between">
          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: "bold",
                fontFamily: (theme) => `${theme.typography.headingFontFamily}`,
              }}
            >
              Rarity and Traits
            </Typography>
          </MotionInView>

          <Grid container justifyContent="center" alignItems="flex-start">
            <Grid item xs={12} md={6} dir="ltr" sx={{ pr: 5 }}>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="h5"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "normal",
                  }}
                >
                  The three principle categories: Virus; Fungi and Bacteria are
                  further divided into <b>traits</b>. Traits are predefined
                  qualities that help to differentiate and identify each unique
                  NFT. Each NFT will have its traits defined on OpenSea, the
                  world’s largest NFT marketplace.
                </Typography>
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={6} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <VideoPlayer url="https://drive.google.com/uc?export=download&id=1AuF1oSVJ74hOK8X88FWLf7UzWQhUzYPo" />
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={12} dir="ltr" sx={{ mt: 10 }}>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    fontStyle: "italic",
                    fontWeight: "normal",
                    fontSize: 50,
                    color: (theme) => theme.palette.warning.main,
                  }}
                >
                  This gives each NFT a unique <b>rarity</b> and thus
                  collectability.
                </Typography>
              </MotionInView>
            </Grid>
          </Grid>
        </Container>
      </ContentStyle>
    </RootStyle>
  );
}
