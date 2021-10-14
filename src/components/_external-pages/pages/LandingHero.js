import { motion } from "framer-motion";

// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Button,
  Box,
  Link,
  Container,
  Typography,
  Stack,
  Grid,
} from "@material-ui/core";
import { varWrapEnter, varFadeInRight } from "../../animate";
import CircleImage from "../../_external-component/CircleImage";
// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.background.body,
  [theme.breakpoints.up("md")]: {
    top: 0,
    left: 0,
    width: "100%",
    display: "flex",
    alignItems: "center",
  },
}));

const ContentStyle = styled((props) => <Stack spacing={5} {...props} />)(
  ({ theme }) => ({
    zIndex: 10,
    margin: "auto",
    textAlign: "center",
    position: "relative",
    [theme.breakpoints.up("md")]: {
      margin: "unset",
      textAlign: "left",
    },
  })
);

const HeroOverlayStyle = styled(motion.img)({
  zIndex: 9,
  width: "100%",
  height: "100%",
  objectFit: "cover",
  position: "absolute",
});

const HeroBookmarkImgStyle = styled(motion.img)(({ theme }) => ({
  maxWidth: 135,
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: "100%",
  margin: "auto",
  filter: `drop-shadow(40px 80px 80px rgba(0, 0, 0, 0.48))`,
  [theme.breakpoints.up("lg")]: {
    right: "8%",
    width: "auto",
  },
}));

const HeroTextImgStyle = styled(motion.img)(({ theme }) => ({
  top: 0,
  right: 0,
  bottom: 0,
  zIndex: 8,
  width: "100%",
  margin: "auto",
  filter: `drop-shadow(40px 80px 80px rgba(0, 0, 0, 0.48))`,
  [theme.breakpoints.up("lg")]: {
    right: "8%",
    width: "auto",
  },
}));

// ----------------------------------------------------------------------

export default function LandingHero() {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      <Container maxWidth="xlg">
        <Grid container spacing={10} justify="center" alignItems="center">
          <Grid item xs={12} sm={12}>
            <ContentStyle>
              <motion.div variants={varFadeInRight}>
                <HeroBookmarkImgStyle
                  src="/static/images/bookmark-icon.svg"
                  alt="bookmark-icon"
                />
              </motion.div>
              <motion.div variants={varFadeInRight}>
                <HeroTextImgStyle
                  src="/static/images/hero-text.svg"
                  alt="hero-text"
                />
              </motion.div>
            </ContentStyle>
          </Grid>
          <Grid item xs={12} sm={12}>
            <ContentStyle spacing={8}>
              <Stack direction="row" justifyContent="center" spacing={10}>
                <Link target="_blank" href="https://twitter.com/SVSNFT">
                  <Typography
                    variant="h4"
                    color="primary"
                    sx={{ textDecoration: "underline" }}
                  >
                    Twitter
                  </Typography>
                </Link>

                <Link target="_blank" href="https://twitter.com/SVSNFT">
                  <Typography
                    variant="h4"
                    color="primary"
                    sx={{ textDecoration: "underline" }}
                  >
                    Discord
                  </Typography>
                </Link>
              </Stack>

              <Stack
                direction="row"
                justifyContent="center"
                spacing={{ xs: 5, lg: 10 }}
              >
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
                        src="/static/images/arrow-right.svg"
                        alt="hero-arrow-right"
                      />
                    </CircleImage>
                    <Box>
                      <Typography variant="h3" color="white">
                        Gallery
                      </Typography>
                      <Typography variant="h4" color="#948f8f">
                        Explore the vampires
                      </Typography>
                    </Box>
                  </Stack>
                </Button>

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
                        src="/static/images/arrow-left.svg"
                        alt="hero-arrow-left"
                      />
                    </CircleImage>
                    <Box>
                      <Typography variant="h3" color="white">
                        RoadMap
                      </Typography>
                      <Typography variant="h4" color="#948f8f">
                        Look into the future
                      </Typography>
                    </Box>
                  </Stack>
                </Button>
              </Stack>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
