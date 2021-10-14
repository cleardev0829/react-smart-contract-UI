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
  Input,
  TextField,
  Divider,
} from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";
import CircleImage from "src/components/_external-component/CircleImage";

const RootStyle = styled("div")(({ theme }) => ({
  paddingBottom: theme.spacing(24),
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
          sx={{ position: "relative", mb: 15 }}
        >
          <Typography variant="h1">
            <span style={{ fontSize: 124, fontWeight: 800 }}>
              Syndicate Founders
            </span>
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
