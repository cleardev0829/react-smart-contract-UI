import { useRef } from "react";
import Slider from "react-slick";
import {
  useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import { Box, Grid, Container, Stack, Typography } from "@material-ui/core";
import { varFadeIn, varFadeInUp, MotionInView } from "../../animate";
import { CarouselControlsArrowsBasic2 } from "../../carousel";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(24, 0),
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

const IMAGES = [];
[...Array(18)].map((_, index) => {
  IMAGES.push(`static/images/${index + 1}.png`);
});
console.log(IMAGES);

export default function LandingHugePackElements() {
  const carouselRef = useRef();
  const theme = useTheme();

  const settings = {
    speed: 500,
    slidesToShow: 5,
    centerMode: true,
    centerPadding: "0 80px",
    rtl: Boolean(theme.direction === "rtl"),
    responsive: [
      {
        breakpoint: 1279,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 959,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 600,
        settings: { slidesToShow: 3 },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current.slickNext();
  };

  return (
    <RootStyle>
      <Container maxWidth="xlg">
        <Grid container spacing={5} justifyContent="center">
          <Grid
            item
            xs={12}
            md={12}
            sx={{ display: "flex", alignItems: "center" }}
          >
            <ContentStyle>
              <MotionInView variants={varFadeInUp}>
                <Stack direction="row" spacing={5} justifyContent="center">
                  <img
                    src="/static/images/teardrop.svg"
                    alt="feature-teardrop"
                  />
                  <Typography variant="h1">
                    <span style={{ fontSize: 125 }}>Featured Vamps</span>
                  </Typography>
                  <CarouselControlsArrowsBasic2
                    onNext={handleNext}
                    onPrevious={handlePrevious}
                    sx={{ transform: "translateY(-64px)" }}
                  />
                </Stack>
              </MotionInView>
            </ContentStyle>
          </Grid>
        </Grid>
      </Container>
      <MotionInView variants={varFadeInUp}>
        <Box>
          <Slider ref={carouselRef} {...settings}>
            {IMAGES.map((img, index) => (
              <MotionInView key={`motion-${index}`} variants={varFadeIn}>
                <Box key={`box-img-${index}`} sx={{ px: 4 }}>
                  <Box
                    key={`img-${index}`}
                    component="img"
                    src={img}
                    sx={{ width: "100%", borderRadius: 1 }}
                  />
                </Box>
              </MotionInView>
            ))}
          </Slider>
        </Box>
      </MotionInView>
    </RootStyle>
  );
}
