import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Grid } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";
import ImageMagnifier from "../ImageMagnifier";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
}));

export default function MDImageSection(props) {
  const { url1, url2, videoUrl1, videoUrl2, mode } = props;

  return (
    <RootStyle>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="flex-start"
        sx={{ pb: 2 }}
      >
        {url1 && (
          <Grid item xs={12} md={6} dir="ltr" sx={{ px: 0 }}>
            <Box>
              <MotionInView variants={varFadeInUp}>
                {mode && mode === "lens" ? (
                  <ImageMagnifier src={url1} />
                ) : (
                  <img data-src={url1} alt="" src={url1} />
                )}
              </MotionInView>
            </Box>
          </Grid>
        )}

        {videoUrl1 && (
          <Grid item xs={6} md={6} dir="ltr" sx={{ px: 0 }}>
            <Box>
              <MotionInView variants={varFadeInUp}>
                <video
                  width="100%"
                  height="100%"
                  muted={false}
                  loop={true}
                  playsInline=""
                  autoPlay={true}
                  preload="none"
                  data-src={videoUrl1}
                  data-lazyload=""
                  data-behavior="softVideo"
                  src={videoUrl1}
                ></video>
              </MotionInView>
            </Box>
          </Grid>
        )}

        {url2 && (
          <Grid item xs={12} md={6} dir="ltr" sx={{ px: 0 }}>
            <Box>
              <MotionInView variants={varFadeInUp}>
                {mode && mode === "lens" ? (
                  <ImageMagnifier src={url2} />
                ) : (
                  <img data-src={url2} alt="" src={url2} />
                )}
              </MotionInView>
            </Box>
          </Grid>
        )}
      </Grid>

      {videoUrl2 && (
        <Grid item xs={6} md={6} dir="ltr" sx={{ px: 0 }}>
          <Box>
            <MotionInView variants={varFadeInUp}>
              <video
                width="100%"
                height="100%"
                muted={false}
                loop={true}
                playsInline=""
                autoPlay={true}
                preload="none"
                data-src={videoUrl2}
                data-lazyload=""
                data-behavior="softVideo"
                src={videoUrl2}
              ></video>
            </MotionInView>
          </Box>
        </Grid>
      )}
    </RootStyle>
  );
}
