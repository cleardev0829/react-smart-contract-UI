import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Container, Grid, Typography } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";
import { MDImageVideoSection } from "./";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
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

export default function HomeDesci() {
  return (
    <RootStyle>
      <ContentStyle>
        <Container maxWidth="xlg">
          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h4"
              sx={{
                mb: 3,
                fontWeight: "bold",
                fontFamily: (theme) => `${theme.typography.headingFontFamily}`,
              }}
            >
              What is DeSci?
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h2"
              color="primary"
              sx={{
                fontStyle: "italic",
                fontWeight: "normal",
                mb: 5,
              }}
            >
              Decentalised Science. In a time where information transfer is
              besieged by controversy, ideology and manipulation, free and open
              sharing of knowledge is more important than ever.
            </Typography>
          </MotionInView>

          <MDImageVideoSection
            url1="https://drive.google.com/uc?id=18gZjWC6zqIdztpatfrpRNbLxHg61Lt_M"
            videoUrl2="https://drive.google.com/uc?export=download&id=1qD475YBwZilt6YSxmpWW139FlJzjv2M1"
          />

          <Grid
            container
            spacing={10}
            justifyContent="center"
            alignItems="flex-start"
            sx={{
              pt: 10,
            }}
          >
            <Grid item xs={12} md={4} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <img
                  src="https://drive.google.com/uc?id=1X_CwL4h1l6iVLHq4m98bdagXyr3VrPNE"
                  data-src="https://drive.google.com/uc?id=1X_CwL4h1l6iVLHq4m98bdagXyr3VrPNE"
                  alt=""
                />
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={4} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontStyle: "normal", fontWeight: "normal" }}
                >
                  DeSci’s vision is to create a vibrant ecosystem that supports
                  scientific communities from around the world by utilizing
                  decentralised and uncensorable blockchain technology. The
                  transfer of ideas, information, data, methodology, contacts
                  and resources can be revolutionised through the Ethereum
                  Mainnet. Combined with the talent and innovation that is seen
                  every day in the Ethereum community, DeSci hopes to see new
                  life flourish across the world of Science.
                </Typography>
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={4} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="subtitle1"
                  sx={{ fontStyle: "normal", fontWeight: "normal" }}
                >
                  Alongside facilitating free and fair information exchange,
                  DeSci hopes to bring research to life through the amalgamation
                  of art and science. Art provides a link to the soul that is
                  rarely found in the field of science. Through its deep
                  connections to the non-tangible aspects of humanity, Art can
                  open the esoteric up to everyone.
                </Typography>
              </MotionInView>
            </Grid>
          </Grid>
        </Container>
      </ContentStyle>
    </RootStyle>
  );
}
