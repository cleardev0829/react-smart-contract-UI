import PropTypes from "prop-types";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import CircleImage from "src/components/_external-component/CircleImage";
import { Stack } from "@material-ui/core";

const RootStyle = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
}));

CarouselControlsArrowsBasic2.propTypes = {
  onNext: PropTypes.func,
  onPrevious: PropTypes.func,
};

export default function CarouselControlsArrowsBasic2({
  onNext,
  onPrevious,
  ...other
}) {
  return (
    <RootStyle {...other}>
      <Stack direction="row" spacing={2}>
        <CircleImage onClick={onNext}>
          <img src="/static/images/arrow-left.svg" alt="feature-arrow-left" />
        </CircleImage>

        <CircleImage onClick={onPrevious}>
          <img src="/static/images/arrow-right.svg" alt="feature-arrow-right" />
        </CircleImage>
      </Stack>
    </RootStyle>
  );
}
