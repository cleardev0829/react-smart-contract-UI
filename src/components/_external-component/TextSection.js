import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Grid, Typography } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(1, 0),
  marginBottom: theme.spacing(8),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

export default function TextSection(props) {
  return (
    <RootStyle>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="flex-start"
      >
        <Grid item xs={12} md={3} dir="ltr" sx={{ px: 1 }}>
          <Box>
            <MotionInView variants={varFadeInUp}>
              <Typography>
                <span id={props.text} style={{ fontWeight: "bold" }}>
                  {props.text}
                </span>
              </Typography>
            </MotionInView>
          </Box>
        </Grid>

        <Grid item xs={12} md={3} dir="ltr" sx={{ px: 1 }}>
          <Box>
            <MotionInView variants={varFadeInUp}></MotionInView>
          </Box>
        </Grid>

        <Grid
          item
          xs={12}
          md={3}
          sx={{ display: "flex", alignItems: "center", px: 1 }}
        >
          <ContentStyle>
            <MotionInView variants={varFadeInUp}>
              <Typography variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>{props.text1}</span>
              </Typography>
            </MotionInView>
          </ContentStyle>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          sx={{ display: "flex", alignItems: "center", px: 1 }}
        >
          <ContentStyle>
            <MotionInView variants={varFadeInUp}>
              <Typography variant="subtitle1">
                <span style={{ fontWeight: "bold" }}>{props.text2}</span>
              </Typography>
            </MotionInView>
          </ContentStyle>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
