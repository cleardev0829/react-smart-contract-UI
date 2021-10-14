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
  TextField,
  Divider,
} from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../animate";

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

export default function LandingContact() {
  const theme = useTheme();

  return (
    <RootStyle>
      <Container maxWidth="xlg">
        <Grid container spacing={12} justifyContent="center" sx={{ mb: 5 }}>
          <Grid
            item
            xs={12}
            md={6}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Typography variant="h1">
                  <span
                    style={{
                      fontSize: 113,
                      fontWeight: 800,
                    }}
                  >
                    Join
                  </span>
                  <br />
                  <span
                    style={{
                      color: theme.palette.primary.main,
                      fontSize: 113,
                      fontWeight: 800,
                    }}
                  >
                    The Syndicate
                  </span>
                </Typography>
              </MotionInView>
            </ContentStyle>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                borderRadius: " 10px",
                border: "1px solid #454b5a",
                backgroundColor: "#0e0e0e",
                position: "relative",
                padding: "25px  40px",
              }}
            >
              <Stack spacing={2}>
                <MotionInView variants={varFadeInUp}>
                  <Box
                    position="absolute"
                    top="-20px"
                    right="35px"
                    width="80px"
                    component="img"
                    src="/static/images/purchase-bookmark-icon.svg"
                  />
                </MotionInView>

                <MotionInView variants={varFadeInUp}>
                  <Typography variant="h3">Count your counts</Typography>
                </MotionInView>

                <MotionInView variants={varFadeInUp}>
                  <Typography variant="h5">
                    Enter the amount of vampires
                    <br /> you would like to purchase.
                  </Typography>
                </MotionInView>

                <MotionInView variants={varFadeInUp}>
                  <Stack
                    direction="row"
                    justifyContent="space-between"
                    alignItems="center"
                    padding="4px 10px"
                    borderRadius="10px"
                    backgroundColor="black"
                  >
                    <img src="/static/images/purchase-image.png" width="80px" />
                    <Stack
                      direction="column"
                      justifyContent="space-between"
                      alignItems="flex-end"
                    >
                      <Typography variant="h5">Price per Vampire</Typography>
                      <Typography variant="h3">
                        <span style={{ color: theme.palette.primary.main }}>
                          0.08
                        </span>
                        &nbsp;ETH Each
                      </Typography>
                      <Typography variant="h5">0 remaining</Typography>
                    </Stack>
                  </Stack>
                </MotionInView>

                <MotionInView variants={varFadeInUp}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    type="number"
                    maxLengh={2}
                    label=""
                  />
                </MotionInView>

                <MotionInView variants={varFadeInUp}>
                  <Divider />
                </MotionInView>

                <MotionInView variants={varFadeInUp}>
                  <Stack direction="row" justifyContent="space-between">
                    <Typography variant="h5">Total</Typography>
                    <Typography variant="h3">0 ETH</Typography>
                  </Stack>
                </MotionInView>

                <MotionInView variants={varFadeInUp}>
                  <Divider />
                </MotionInView>

                <MotionInView variants={varFadeInUp}>
                  <Button
                    fullWidth
                    color="primary"
                    variant="contained"
                    size="large"
                    sx={{ borderRadius: "8px" }}
                  >
                    <Typography variant="h5">
                      Sold Out - Explore on OpenSea
                    </Typography>
                  </Button>
                </MotionInView>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
