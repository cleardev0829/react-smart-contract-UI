import {
  useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Container,
  Typography,
  Button,
  Stack,
} from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";
import CircleImage from "src/components/_external-component/CircleImage";

const RootStyle = styled("div")(({ theme }) => ({
  paddingBottom: theme.spacing(12),
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

const LogoImgStyle = styled("img")(({ theme }) => ({
  // maxWidth: 160,
  // borderRadius: 8,
  // backgroundColor:
  //   theme.palette.grey[theme.palette.mode === "light" ? 300 : 800],
  // [theme.breakpoints.up("sm")]: {
  //   maxWidth: 320,
  //   paddingRight: 4,
  //   borderRadius: 12,
  // },
  // "& img": {
  //   borderRadius: 8,
  //   [theme.breakpoints.up("sm")]: {
  //     borderRadius: 12,
  //   },
  // },
}));

export default function LandingAbout() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Container maxWidth="xlg">
        <Grid container spacing={12} justifyContent="center" sx={{ mb: 5 }}>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                position: "relative",
                justifyContent: "center",
              }}
            >
              <LogoImgStyle
                src="/static/images/text-logo.svg"
                alt="about-text-logo"
              />
            </Box>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography variant="h1">
                  The
                  <span style={{ color: theme.palette.primary.main }}>
                    Syndicate
                  </span>
                  body
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h1">is populated by</Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h1" color="primary">
                  <span style={{ fontSize: 144, verticalAlign: "baseline" }}>
                    8888
                  </span>
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h1" color="primary">
                  unique vampires
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h1">
                  living eternally on
                  <br />
                  the blockchain.
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>
        </Grid>

        <Grid container spacing={12} justifyContent="center" sx={{ mb: 5 }}>
          <Grid item xs={12} md={6}>
            <Button target="_blank" href="https://twitter.com/SVSNFT">
              <Stack
                direction={{
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                }}
                spacing={3}
                alignItems="center"
              >
                <CircleImage>
                  <img
                    src="/static/images/twitter-icon.svg"
                    alt="hero-arrow-right"
                  />
                </CircleImage>
                <Box>
                  <Typography variant="h3" color="white">
                    Twitter
                  </Typography>
                  <Typography variant="h4" color="#948f8f">
                    Follow our Twitter for sneak peeks
                  </Typography>
                </Box>
              </Stack>
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography variant="h3" color="primary">
                  Fully individual
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h5">
                  All 8,888
                  <span style={{ color: theme.palette.primary.main }}>
                    {` Syndicate `}
                  </span>
                  Vampires are unique, there is no one like another. Each
                  vampire is randomly generated with its own characteristics and
                  expressions.
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>
        </Grid>

        <Grid container spacing={12} justifyContent="center">
          <Grid item xs={12} md={6}>
            <Button target="_blank" href="https://twitter.com/SVSNFT">
              <Stack
                direction={{
                  xs: "column",
                  sm: "column",
                  md: "row",
                  lg: "row",
                }}
                spacing={3}
                alignItems="center"
              >
                <CircleImage>
                  <img
                    src="/static/images/discord-icon.svg"
                    alt="hero-arrow-right"
                  />
                </CircleImage>
                <Box>
                  <Typography variant="h3" color="white">
                    Discord
                  </Typography>
                  <Typography variant="h4" color="#948f8f">
                    Join the discord for updates
                  </Typography>
                </Box>
              </Stack>
            </Button>
          </Grid>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography variant="h3" color="primary">
                  The Syndicate Secrets
                </Typography>
              </MotionInView>

              <MotionInView variants={varFadeInUp}>
                <Typography variant="h5">
                  Each Vampire token allows the holder passage into the realms
                  of
                  <span style={{ color: theme.palette.primary.main }}>
                    {` The Syndicate `}
                  </span>
                  , where no mortal has left alive. All ERC-721 Vampire tokens
                  are stored on the Ethereum blockchain.
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
