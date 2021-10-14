import faker from "faker";
import Slider from "react-slick";
import PropTypes from "prop-types";
// import { motion } from "framer-motion";
import { useState, useRef } from "react";
import { Link as RouterLink } from "react-router-dom";
// material
import {
  // alpha,
  useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import {
  // CardContent,
  Box,
  Card,
  // Typography
} from "@material-ui/core";
// utils
import { mockImgFeed } from "../../utils/mockImages";
//
// import { varFadeInRight, MotionContainer } from "../animate";
import {
  CarouselControlsPaging1,
  // CarouselControlsArrowsBasic1,
} from "../carousel";

// ----------------------------------------------------------------------

const CAROUSELS = ["001", "002", "003", "004", "005", "006", "007"].map(
  (item, index) => {
    const setIndex = index + 1;

    return {
      title: item,
      description: faker.lorem.lines(),
      image: mockImgFeed(setIndex),
    };
  }
);

const CarouselImgStyle = styled("img")(({ theme }) => ({
  height: 580,
  width: "100%",
  objectFit: "cover",
  [theme.breakpoints.up("xl")]: {
    height: 520,
  },
}));

// ----------------------------------------------------------------------

CarouselItem.propTypes = {
  item: PropTypes.object,
  isActive: PropTypes.bool,
};

function CarouselItem({ item, isActive }) {
  const { image, title } = item;

  return (
    <RouterLink to="#">
      <Box sx={{ position: "relative" }}>
        <Box
          sx={{
            top: 0,
            width: "100%",
            height: "100%",
            position: "absolute",
          }}
        />
        <CarouselImgStyle alt={title} src={image} />
      </Box>
    </RouterLink>
  );
}

export default function CarouselImg() {
  const theme = useTheme();
  const carouselRef = useRef();
  const [currentIndex, setCurrentIndex] = useState(
    theme.direction === "rtl" ? CAROUSELS.length - 1 : 0
  );

  const settings = {
    speed: 800,
    dots: true,
    arrows: false,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === "rtl"),
    beforeChange: (current, next) => setCurrentIndex(next),
    ...CarouselControlsPaging1({
      color: "primary.main",
      sx: {
        top: theme.spacing(3),
        left: theme.spacing(3),
        bottom: "auto",
        right: "auto",
      },
    }),
  };

  // const handlePrevious = () => {
  //   carouselRef.current.slickPrev();
  // };

  // const handleNext = () => {
  //   carouselRef.current.slickNext();
  // };

  return (
    <Card sx={{ position: "relative" }}>
      {/* <Box sx={{ position: "absolute", top: 0, left: 0 }}>
        <img
          src="https://drive.google.com/uc?id=1w8OQIC8fYY-uCM0EFJ_m35v8wdUlFpU1"
          data-src="https://drive.google.com/uc?id=1w8OQIC8fYY-uCM0EFJ_m35v8wdUlFpU1"
          alt=""
        />
      </Box> */}
      <Slider ref={carouselRef} {...settings}>
        {CAROUSELS.map((item, index) => {
          console.log(item);
          return (
            <CarouselItem
              key={item.title}
              item={item}
              isActive={index === currentIndex}
            />
          );
        })}
      </Slider>

      {/* <CarouselControlsArrowsBasic1
        onNext={handleNext}
        onPrevious={handlePrevious}
      /> */}
    </Card>
  );
}
