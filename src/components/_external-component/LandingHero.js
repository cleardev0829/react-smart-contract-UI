import { motion } from "framer-motion";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { varWrapEnter } from "../animate";

// ----------------------------------------------------------------------

const RootStyle = styled(motion.div)(({ theme }) => ({
  position: "relative",
  backgroundColor: theme.palette.grey[400],
  width: "100%",
  // height: "100vh",
  display: "flex",
  alignItems: "center",
}));

// ----------------------------------------------------------------------

export default function LandingHero(props) {
  return (
    <RootStyle initial="initial" animate="animate" variants={varWrapEnter}>
      {props.children}
    </RootStyle>
  );
}
