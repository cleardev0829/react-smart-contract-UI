import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  Box,
  Grid,
  Container,
  Typography,
  Stack,
  useTheme,
} from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
  // backgroundColor: "green",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(8, 0),
  },
}));

const Founder = ({ img, name, role, social }) => {
  const theme = useTheme();

  return (
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      style={{ minWidth: 150 }}
    >
      <Box
        style={{
          width: "fit-content",
          padding: 8,
          borderColor: theme.palette.primary.main,
          border: "2px solid #d31717",
          borderRadius: "50% 15% 50% 50%",
        }}
      >
        <img
          src={img}
          height="130px"
          alt={name}
          style={{
            borderRadius: "50%",
          }}
        />
      </Box>
      <Typography variant="h3">{name}</Typography>
      <Typography variant="h4" color="primary">
        {role}
      </Typography>
      <Typography variant="h5">{social}</Typography>
    </Stack>
  );
};

export default function LandingFounders() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Container maxWidth="xlg">
        <Grid
          container
          justifyContent="center"
          textAlign="center"
          sx={{
            position: "relative",

            [theme.breakpoints.up("xs")]: { fontSize: 72, mb: 20 },
            [theme.breakpoints.up("sm")]: { fontSize: 72, mb: 20 },
            [theme.breakpoints.up("md")]: { fontSize: 98, mb: 20 },
            [theme.breakpoints.up("lg")]: { fontSize: 124, mb: 20 },
          }}
        >
          <Typography variant="h1">
            <span style={{ fontWeight: 800 }}>Syndicate Founders</span>
          </Typography>
          <Box
            component="img"
            src="/static/images/teardrop-outline.svg"
            style={{
              position: "absolute",
              top: -86,
            }}
          />
        </Grid>
        <Grid container sx={{ mb: 15 }}>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <Founder
                img="/static/images/mig.png"
                name="Mig"
                role="The Artist"
                social="Twitter"
              />
            </MotionInView>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <Founder
                img="/static/images/topkek.png"
                name="Topkek"
                role="Project lead"
                social="Twitter"
              />
            </MotionInView>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <Founder
                img="/static/images/woof.png"
                name="Woof"
                role="Lead Developer"
                social="Twitter"
              />
            </MotionInView>
          </Grid>
        </Grid>
        <Grid container>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <Founder
                img="/static/images/mig.png"
                name="Mig"
                role="The Artist"
                social="Twitter"
              />
            </MotionInView>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <Founder
                img="/static/images/topkek.png"
                name="Topkek"
                role="Project lead"
                social="Twitter"
              />
            </MotionInView>
          </Grid>
          <Grid
            item
            xs={12}
            md={4}
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MotionInView variants={varFadeInUp}>
              <Founder
                img="/static/images/woof.png"
                name="Woof"
                role="Lead Developer"
                social="Twitter"
              />
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
