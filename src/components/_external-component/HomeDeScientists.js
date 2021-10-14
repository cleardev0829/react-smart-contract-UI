import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Container, Grid, Typography, Box } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";
import ImageMagnifier from "src/components/ImageMagnifier";
import VideoPlayer from "../VideoPlayer";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
  backgroundColor: "black",
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

export default function HomeDeScientists() {
  return (
    <RootStyle id="overlay">
      <ContentStyle>
        <Container maxWidth="xlg">
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              position: "relative",
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <ImageMagnifier
                src="https://drive.google.com/uc?id=1VBrOZ2tn94tg4zs_dWsWimpxLk0A5fcQ"
                underSrc="https://drive.google.com/uc?id=1Qjtfb2MV3f98zBDZr1LTCWWkRn_RnxV9"
              />
            </MotionInView>
          </Box>

          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h4"
              sx={{
                mb: 4,
                fontStyle: "normal",
                fontWeight: "bold",
                fontFamily: (theme) => `${theme.typography.headingFontFamily}`,
              }}
              color="white"
            >
              How will DeScientists collaborate?
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h2"
              sx={{
                fontStyle: "italic",
                fontWeight: "normal",
                color: "white",
                mb: 5,
              }}
            >
              The advent of DAOs (Decentralised Autonomous Organisation) has
              changed the way people and organisations interact.
              <br />
            </Typography>
          </MotionInView>

          <Grid
            container
            spacing={5}
            justifyContent="center"
            alignItems="flex-start"
            sx={{ mb: 10 }}
          >
            <Grid item xs={12} md={8} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <VideoPlayer url="https://drive.google.com/uc?export=download&id=1BLJwyxDV-ubBcIs04yl5lIqkvWZYqaiK" />
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={4} dir="ltr" sx={{ pl: 5 }}>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="subtitle1"
                  color="white"
                  sx={{ fontStyle: "normal", fontWeight: "normal" }}
                >
                  Traditionally, communities communicated through a centralised
                  platform, conforming to the parameters set by the platform
                  provider, and fitting their working style around the tools
                  that are given to them. With Ethereum and DAOs, interested
                  members can take control of the community’s future through
                  open-source codebases, decentralised community governance and
                  democratic decision-making.
                </Typography>
              </MotionInView>
            </Grid>
          </Grid>

          <Grid
            container
            spacing={5}
            justifyContent="center"
            alignItems="flex-start"
          >
            <Grid item xs={12} md={4} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <img
                  src="https://drive.google.com/uc?id=1pat5-LC82KDP9OC0sxru7hXtpGJNtKy4"
                  data-src="https://drive.google.com/uc?id=1pat5-LC82KDP9OC0sxru7hXtpGJNtKy4"
                  alt=""
                />
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={4} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <img
                  src="https://drive.google.com/uc?id=1jeG_DSRl1HFqXeziiClkMpTg5u4u32MF"
                  data-src="https://drive.google.com/uc?id=1jeG_DSRl1HFqXeziiClkMpTg5u4u32MF"
                  alt=""
                />
              </MotionInView>
            </Grid>
            <Grid item xs={12} md={4} dir="ltr" sx={{ pl: 5 }}>
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="subtitle1"
                  color="white"
                  sx={{ fontStyle: "normal", fontWeight: "normal" }}
                >
                  DeSci aims to attract not just researchers, but talented
                  people from all walks of life - this includes Ethereum
                  builders and NFT visionaries. As DeSci begins to absorb talent
                  from all sectors, it is hoped that Ethereum developers will be
                  inspired by the quality of the contributions in other fields
                  and eventually help to build dApps or a DAO structure to help
                  guide the DeSci community to become a flagship member of the
                  Ethereum ecosystem.
                </Typography>
              </MotionInView>
            </Grid>
          </Grid>
        </Container>
      </ContentStyle>
    </RootStyle>
  );
}
