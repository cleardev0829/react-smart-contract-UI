import PropTypes from "prop-types";
import { motion } from "framer-motion";
import { experimentalStyled as styled } from "@material-ui/core/styles";

const HeroCircleStyle = styled(motion.div)({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "94px",
  height: "94px",
  border: "solid 2px",
  borderRadius: "50%",
  borderColor: "#d31717",
});

CircleImage.propTypes = {
  onClick: PropTypes.func,
};

export default function CircleImage({ onClick, children, ...other }) {
  return (
    <HeroCircleStyle onClick={onClick} style={{ ...other }}>
      {children}
    </HeroCircleStyle>
  );
}
