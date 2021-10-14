import {
  alpha,
  useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import { Grid, Container, Typography } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(24, 0),
  backgroundImage:
    theme.palette.mode === "light"
      ? `linear-gradient(180deg, ${alpha(theme.palette.grey[300], 0)} 0%, ${
          theme.palette.grey[300]
        } 100%)`
      : "none",
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

export default function LandingContent() {
  const theme = useTheme();
  const isLight = theme.palette.mode === "light";

  return (
    <RootStyle>
      <Container maxWidth="lg">
        <Grid container spacing={5} justifyContent="center">
          <Grid
            item
            xs={12}
            md={12}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContentStyle>
              {/* <MotionInView variants={varFadeInUp}>
                <Typography
                  component="p"
                  variant="overline"
                  sx={{ mb: 2, color: "text.secondary" }}
                >
                  Interface Starter Kit
                </Typography>
              </MotionInView> */}

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  What is DeSci?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? "text.secondary" : "common.white",
                  }}
                >
                  In a time where information transfer is besieged by
                  controversy, ideology and manipulation, free and open sharing
                  of knowledge is more important than ever. Science remains the
                  central cog to progress, the principle guiding light during
                  increasingly murky times. Yet, whilst the scientific method
                  remains infallible, experiments essential and data itself
                  undeniable, the exchange of such information has fallen foul
                  of ideology and emotion. <br />
                  <br />
                  DeSci’s vision is to create a vibrant ecosystem that supports
                  scientific communities from around the world by utilizing
                  decentralised and uncensorable blockchain technology. The
                  transfer of ideas, information, data, methodology, contacts
                  and resources can be revolutionised through the Ethereum
                  Mainnet. Combined with the talent and innovation that is seen
                  every day in the Ethereum community, DeSci hopes to see new
                  life flourish across the world of Science. <br />
                  <br />
                  Alongside facilitating free and fair information exchange,
                  DeSci hopes to bring research to life through the amalgamation
                  of art and science. Papers dense with esoteric information may
                  appeal to some with a passion in the field of science, but for
                  most it serves as a gatekeeper to accessing the most
                  foundational information of our existence. Art provides a link
                  to the soul through its deep connections to the non-tangible
                  aspects of humanity: emotion, psyche and the unknown. Through
                  the minting of NFTs, art and science can be combined forever;
                  two essential worlds collide encapsulated for eternity on the
                  blockchain.
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h2" sx={{ mb: 3 }}>
                  How will DeScientists collaborate?
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography
                  sx={{
                    mb: 5,
                    color: isLight ? "text.secondary" : "common.white",
                  }}
                >
                  As shown through the cambrian explosion of DeFi protocols over
                  the last 2 years, the Ethereum community is innovating at an
                  exponential rate. The advent of DAOs (Decentralised Autonomous
                  Organisation) has changed the way people and organisations
                  interact. Traditionally, communities must communicated through
                  a centralised platform, confrom to the parameters set by the
                  platform provider, and fit their working style around the
                  tools that are given to them. With Ethereum and DAOs,
                  interested members can take control of the community’s future
                  through open-source codebases, decentralised community
                  governance and democratic decision-making. <br />
                  <br />
                  The initial launch of DeSci aims to attract not just
                  researchers, but talented people from all walks of life - this
                  includes Ethereum builders and visionaries. Whilst
                  inexperienced in the technical implementation of DAOs and
                  Smart Contract-based solutions to issues such as data storage,
                  on-chain analysis and creating a sustainable community with,
                  if required, a functional economy, the creators of DeSci
                  understand that these tasks are the bread and butter of the
                  Ethereum community. As DeSci begins to absorb talent from all
                  sectors, it is hoped that Ethereum developers will become
                  inspired by the quality of the contributions in other fields
                  and eventually help to build dApps or a DAO structure to help
                  guide the DeSci community to become a flagship member of the
                  Ethereum hall of fame.
                </Typography>
              </MotionInView>

              {/* <MotionInView variants={varFadeInUp}>
                <Button
                  size="large"
                  color="inherit"
                  variant="outlined"
                  component={RouterLink}
                  to={PATH_PAGE.components}
                >
                  View All Components
                </Button>
              </MotionInView> */}
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
