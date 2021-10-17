import {
  useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Container,
  Typography,
  Stack,
  Divider,
} from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(4, 0),
  // backgroundColor: "green",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(8, 0),
  },
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

export default function LandingFooter() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Container maxWidth="xlg">
        <Grid container spacing={5} justifyContent="center">
          <Grid
            item
            xs={12}
            md={5}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <Stack
              width="100%"
              direction="column"
              alignItems="center"
              style={{ position: "relative" }}
            >
              <Box
                top={-20}
                width={100}
                component="img"
                src="/static/images/purchase-bookmark-icon.svg"
              />
              <MotionInView variants={varFadeInUp}>
                <img src="/static/images/footer-text.svg" alt="footer-text" />
              </MotionInView>
            </Stack>
          </Grid>
          <Grid item xs={12} md={7}>
            <ContentStyle>
              <Grid container spacing={8}>
                <Grid item xs={12} md={6}>
                  <Stack
                    direction="column"
                    alignItems={{
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                      lg: "flex-start",
                    }}
                    spacing={2}
                  >
                    <MotionInView variants={varFadeInUp}>
                      <Typography variant="h3">Quick Links</Typography>
                    </MotionInView>
                    <Divider
                      width={200}
                      sx={{
                        borderBottom: 2,
                        color: theme.palette.secondary.main,
                      }}
                    />
                    <MotionInView variants={varFadeInUp}>
                      <Typography variant="h5" color="secondary">
                        Discord
                      </Typography>
                    </MotionInView>
                    <MotionInView variants={varFadeInUp}>
                      <Typography variant="h5" color="secondary">
                        Twitter
                      </Typography>
                    </MotionInView>
                    <MotionInView variants={varFadeInUp}>
                      <Typography variant="h5" color="secondary">
                        Opensea
                      </Typography>
                    </MotionInView>
                  </Stack>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Stack
                    direction="column"
                    alignItems={{
                      xs: "center",
                      sm: "center",
                      md: "flex-start",
                      lg: "flex-start",
                    }}
                    spacing={2}
                  >
                    <MotionInView variants={varFadeInUp}>
                      <Typography variant="h3">Jump to</Typography>
                    </MotionInView>
                    <Divider
                      width={200}
                      sx={{
                        borderBottom: 2,
                        color: theme.palette.secondary.main,
                      }}
                    />
                    <MotionInView variants={varFadeInUp}>
                      <Typography variant="h5" color="secondary">
                        Featured
                      </Typography>
                    </MotionInView>
                    <MotionInView variants={varFadeInUp}>
                      <Typography variant="h5" color="secondary">
                        The Syndicate
                      </Typography>
                    </MotionInView>
                    <MotionInView variants={varFadeInUp}>
                      <Typography variant="h5" color="secondary">
                        Mint
                      </Typography>
                    </MotionInView>
                    <MotionInView variants={varFadeInUp}>
                      <Typography variant="h5" color="secondary">
                        Roadmap
                      </Typography>
                    </MotionInView>
                    <MotionInView variants={varFadeInUp}>
                      <Typography variant="h5" color="secondary">
                        Team
                      </Typography>
                    </MotionInView>
                  </Stack>
                </Grid>
              </Grid>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
