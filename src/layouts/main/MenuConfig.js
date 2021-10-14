import { Icon } from "@iconify/react";
// import homeFill from "@iconify/icons-eva/home-fill";
import fileFill from "@iconify/icons-eva/file-fill";
import featureOpenFill from "@iconify/icons-eva/file-add-outline";
import { PATH_PAGE } from "src/routes/paths";

// ----------------------------------------------------------------------

const ICON_SIZE = {
  width: 22,
  height: 22,
};

const menuConfig = [
  {
    title: "NFT",
    path: PATH_PAGE.nft,
    icon: <Icon icon={fileFill} {...ICON_SIZE} />,
  },
  {
    title: "Community",
    path: PATH_PAGE.community,
    icon: <Icon icon={featureOpenFill} {...ICON_SIZE} />,
  },
  {
    title: "Documentation",
    path: PATH_PAGE.documentation,
    icon: <Icon icon={featureOpenFill} {...ICON_SIZE} />,
  },
];

export default menuConfig;
