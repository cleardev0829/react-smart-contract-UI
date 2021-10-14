import { motion } from "framer-motion";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import VideoPlayer from "../VideoPlayer";

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

export default function HomeHero(props) {
  return (
    <RootStyle>
      <VideoPlayer
        url="https://drive.google.com/uc?export=download&id=1W45sOjVCXIxp4aAOkO23jeFaOwVjSiFm"
        poster="/static/nft/poster.png"
      />
    </RootStyle>
  );
}
