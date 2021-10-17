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
import { MHidden } from "src/components/@material-extend";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(8, 0),
  // backgroundColor: "gray",
  [theme.breakpoints.down("sm")]: {
    padding: theme.spacing(4, 0),
  },
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "left",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

const RoadmapStep = ({
  percent,
  title,
  subtitle,
  textDecoration,
  noDivider,
}) => (
  <Stack
    direction="row"
    justifyContent="space-between"
    alignItems="flex-start"
    spacing={5}
    paddingBottom={5}
  >
    <Stack
      direction="column"
      justifyContent="flex-start"
      alignItems="center"
      spacing={2}
      style={{ minWidth: 150 }}
    >
      <img
        src="/static/images/teardrop.svg"
        width="19px"
        alt="roadmap-teardrop"
      />
      <Typography
        variant="h1"
        color={percent === "100" ? "primary" : ""}
        style={{ textDecoration: textDecoration }}
      >
        <span style={{ fontWeight: 800 }}>{`${percent}%`}</span>
      </Typography>
      {!noDivider && (
        <Divider
          orientation="vertical"
          sx={{ height: 50, borderLeft: "solid" }}
        />
      )}
    </Stack>
    <Stack direction="column" spacing={2} justifyContent="flex-start">
      <Typography
        variant="h2"
        color="primary"
        style={{ textDecoration: textDecoration }}
      >
        {title}
      </Typography>
      <Typography variant="h4" style={{ textDecoration: textDecoration }}>
        {subtitle}
      </Typography>
    </Stack>
  </Stack>
);

export default function LandingRoadmap() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Container maxWidth="xlg">
        <Grid container spacing={12} justifyContent="center" sx={{ mb: 5 }}>
          <MHidden width="mdUp">
            <Grid item xs={12} md={6} sx={{ position: "relative" }}>
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{ width: "100%" }}
              >
                <MHidden width="mdUp">
                  <Box
                    component="img"
                    src="/static/images/moon-icon.svg"
                    sx={{ width: 200 }}
                  />
                </MHidden>
                <MHidden width="mdDown">
                  <Box
                    component="img"
                    src="/static/images/moon-icon.svg"
                    sx={{ position: "absolute", left: 2, top: 50, zIndex: 0 }}
                  />
                </MHidden>
                <MotionInView variants={varFadeInUp}>
                  <Typography
                    variant="h3"
                    sx={{
                      [theme.breakpoints.up("xs")]: { fontSize: 72, mb: 4 },
                      [theme.breakpoints.up("sm")]: { fontSize: 72, mb: 4 },
                      [theme.breakpoints.up("md")]: { fontSize: 98, mb: 12 },
                      [theme.breakpoints.up("lg")]: { fontSize: 124, mb: 12 },
                    }}
                  >
                    <span style={{ fontWeight: 800 }}>Roadmap</span>
                  </Typography>
                </MotionInView>

                <MotionInView variants={varFadeInUp}>
                  <Typography variant="h4">
                    Each Vampire token allows the holder passage into the realms
                    of
                    <span style={{ color: theme.palette.primary.main }}>
                      {` The Syndicate, `}
                    </span>
                    where no mortal has left alive. All ERC-721 Vampire tokens
                    are stored on the Ethereum blockchain.
                  </Typography>
                </MotionInView>
              </Stack>
            </Grid>
          </MHidden>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <RoadmapStep
                  percent="10"
                  title="First Blood"
                  subtitle="Special giveaway for all vampires within the first week."
                  textDecoration="line-through"
                />

                <RoadmapStep
                  percent="25"
                  title="Night Fall"
                  subtitle="All vampires will get a special companion; the Syndicate releases the bats."
                  textDecoration="none"
                />
                <RoadmapStep
                  percent="50"
                  title="Twilight"
                  subtitle="It gets cold without sunlight. Merch release."
                  textDecoration="line-through"
                />
                <RoadmapStep
                  percent="75"
                  title="Eclipse"
                  subtitle="Introduction of the Vampire Lair. Hang out and kick back with your fellow vampires in the Metaverse."
                  textDecoration="none"
                />
                <RoadmapStep
                  percent="100"
                  title="Vampires live forever"
                  subtitle="Gen 2 teaser."
                  textDecoration="line-through"
                  noDivider
                />
              </MotionInView>
            </ContentStyle>
          </Grid>
          <MHidden width="mdDown">
            <Grid item xs={12} md={6} sx={{ position: "relative" }}>
              <Stack
                justifyContent="center"
                alignItems="center"
                sx={{ width: "100%" }}
              >
                <MHidden width="mdUp">
                  <Box
                    component="img"
                    src="/static/images/moon-icon.svg"
                    sx={{ width: 200 }}
                  />
                </MHidden>
                <MHidden width="mdDown">
                  <Box
                    component="img"
                    src="/static/images/moon-icon.svg"
                    sx={{ position: "absolute", left: 2, top: 50, zIndex: 0 }}
                  />
                </MHidden>
                <MotionInView variants={varFadeInUp}>
                  <Typography
                    variant="h3"
                    sx={{
                      [theme.breakpoints.up("xs")]: { fontSize: 72, mb: 4 },
                      [theme.breakpoints.up("sm")]: { fontSize: 72, mb: 4 },
                      [theme.breakpoints.up("md")]: { fontSize: 98, mb: 12 },
                      [theme.breakpoints.up("lg")]: { fontSize: 124, mb: 12 },
                    }}
                  >
                    <span style={{ fontWeight: 800 }}>Roadmap</span>
                  </Typography>
                </MotionInView>

                <MotionInView variants={varFadeInUp}>
                  <Typography variant="h4">
                    Each Vampire token allows the holder passage into the realms
                    of
                    <span style={{ color: theme.palette.primary.main }}>
                      {` The Syndicate, `}
                    </span>
                    where no mortal has left alive. All ERC-721 Vampire tokens
                    are stored on the Ethereum blockchain.
                  </Typography>
                </MotionInView>
              </Stack>
            </Grid>
          </MHidden>
        </Grid>
      </Container>
    </RootStyle>
  );
}
