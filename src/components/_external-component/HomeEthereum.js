import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Container, Grid, Box, Link, Typography } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";

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

export default function HomeEthereum() {
  return (
    <RootStyle>
      <ContentStyle id="overlay">
        <Container maxWidth="xlg">
          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h4"
              sx={{
                mb: 5,
                fontWeight: "bold",
                fontStyle: "normal",
                fontFamily: (theme) => `${theme.typography.headingFontFamily}`,
              }}
            >
              Why Ethereum?
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h2"
              sx={{
                fontStyle: "italic",
                fontWeight: "normal",
                mb: 5,
                color: (theme) => theme.palette.warning.main,
              }}
            >
              Ethereum embodies all that DeSci wants to achieve:
              <b>innovation</b>, <b>community</b> and <b>collaboration</b>.
              <br />
            </Typography>
          </MotionInView>

          <Grid
            container
            spacing={10}
            justifyContent="center"
            alignItems="space-between"
          >
            <Grid item xs={12} md={7} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <Box sx={{ position: "relative" }}>
                  <img
                    src="https://drive.google.com/uc?id=1nN2knnG7R6QTkA7CJBq8BGoTYcIpJ6jW"
                    data-src="https://drive.google.com/uc?id=1nN2knnG7R6QTkA7CJBq8BGoTYcIpJ6jW"
                    alt=""
                  />
                  <Box
                    sx={{
                      width: "100%",
                      height: "100%",
                      position: "absolute",
                      top: 0,
                      left: 0,
                    }}
                  >
                    <Box
                      sx={{
                        width: "100%",
                        height: "37.5%",
                      }}
                    ></Box>
                    <Box
                      sx={{
                        width: "100%",
                        height: "62.5%",
                      }}
                    >
                      <Grid container spacing={2} sx={{ height: "55%" }}>
                        <Grid
                          item
                          xs={6}
                          md={6}
                          textAlign="right"
                          sx={{
                            height: "100%",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              height: "100%",
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                            }}
                          >
                            <Link
                              target="_blank"
                              href={"https://ethereum.org/en/what-is-ethereum/"}
                            >
                              <Typography color="text.primary">
                                What is
                                <br />
                                Ethereum
                              </Typography>
                            </Link>
                          </Box>
                        </Grid>
                        <Grid item xs={6} md={6} textAlign="left">
                          <Box
                            sx={{
                              height: "100%",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <Link
                              target="_blank"
                              href="https://ethereum.org/en/community/"
                            >
                              <Typography color="text.primary">
                                Ethereum
                                <br />
                                Community
                              </Typography>
                            </Link>
                          </Box>
                        </Grid>
                      </Grid>
                      <Grid container spacing={2} sx={{ height: "45%" }}>
                        <Grid
                          item
                          xs={6}
                          md={6}
                          textAlign="right"
                          sx={{
                            height: "100%",
                            alignItems: "center",
                          }}
                        >
                          <Box
                            sx={{
                              height: "100%",
                              display: "flex",
                              justifyContent: "flex-end",
                              alignItems: "center",
                            }}
                          >
                            <Link
                              target="_blank"
                              href="https://ethereum.org/en/nft/"
                            >
                              <Typography color="text.primary">NFTs</Typography>
                            </Link>
                          </Box>
                        </Grid>
                        <Grid item xs={6} md={6} textAlign="left">
                          <Box
                            sx={{
                              height: "100%",
                              display: "flex",
                              justifyContent: "flex-start",
                              alignItems: "center",
                            }}
                          >
                            <Link
                              target="_blank"
                              href="https://ethereum.org/en/dao/"
                            >
                              <Typography color="text.primary">DAOs</Typography>
                            </Link>
                          </Box>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                </Box>
              </MotionInView>
            </Grid>

            <Grid item xs={12} md={5} dir="ltr">
              <MotionInView variants={varFadeInUp}>
                <Typography
                  variant="subtitle1"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: "normal",
                    mb: 5,
                  }}
                >
                  The advent of the Ethereum blockchain created an ecosystem
                  designed to help humans regain trust in interactions. Trusting
                  words, sometimes risky, has been replaced by trust-less
                  blockchain; the resulting uncensorable and immutable
                  transcational economy paves the way for thriving scientific
                  communities and discoveries, free of manipulation.
                  <br />
                </Typography>
                <Typography
                  variant="h4"
                  sx={{
                    fontStyle: "italic",
                    fontWeight: "normal",
                  }}
                >
                  The Ethereum community is the strongest and most technically
                  gifted of all blockchains and it is a no-brainer for DeSci to
                  function there.
                </Typography>
              </MotionInView>
            </Grid>
          </Grid>
        </Container>
      </ContentStyle>
    </RootStyle>
  );
}
