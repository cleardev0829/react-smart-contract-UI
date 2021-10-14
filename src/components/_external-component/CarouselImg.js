import faker from "faker";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Card } from "@material-ui/core";
import { mockImgFeed } from "../../utils/mockImages";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

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

export default function CarouselImg() {
  return (
    <Card sx={{ position: "relative" }}>
      <Carousel
        autoPlay
        interval={2000}
        showThumbs={false}
        showIndicators={false}
        infiniteLoop={true}
      >
        {CAROUSELS.map((item) => {
          console.log(item);
          return <CarouselImgStyle src={item.image} />;
        })}
      </Carousel>
    </Card>
  );
}
