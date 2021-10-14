import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
}));

export default function SMImageSection(props) {
  return (
    <RootStyle>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="flex-start"
        sx={{ pb: 2 }}
      >
        <Grid item xs={12} md={4} dir="ltr" sx={{ px: 0 }}>
          <Box>
            <MotionInView variants={varFadeInUp}>
              <img data-src={props.url1} alt="ALT" src={props.url1} />
            </MotionInView>
          </Box>
        </Grid>

        <Grid item xs={12} md={4} dir="ltr" sx={{ px: 0 }}>
          <Box>
            <MotionInView variants={varFadeInUp}>
              {props.url2 && (
                <img
                  data-src={props.url2}
                  alt="Raycounting 00001 Listing"
                  src={props.url2}
                />
              )}

              {props.videoUrl2 && (
                <video
                  width="100%"
                  height="100%"
                  muted={false}
                  loop={false}
                  playsInline=""
                  autoPlay={true}
                  preload="none"
                  data-src={props.videoUrl2}
                  data-lazyload=""
                  data-behavior="softVideo"
                  src={props.videoUrl2}
                ></video>
              )}
            </MotionInView>
          </Box>
        </Grid>
        <Grid item xs={12} md={4} dir="ltr" sx={{ px: 0 }}>
          <Box>
            <MotionInView variants={varFadeInUp}>
              {props.url3 && (
                <img
                  data-src={props.url3}
                  alt="Raycounting 00001 Listing"
                  src={props.url3}
                />
              )}

              {props.videoUrl3 && (
                <video
                  width="100%"
                  height="100%"
                  muted={false}
                  loop={false}
                  playsInline=""
                  autoPlay={true}
                  preload="none"
                  data-src={props.videoUrl3}
                  data-lazyload=""
                  data-behavior="softVideo"
                  src={props.videoUrl3}
                ></video>
              )}
            </MotionInView>
          </Box>
        </Grid>
      </Grid>
    </RootStyle>
  );
}
