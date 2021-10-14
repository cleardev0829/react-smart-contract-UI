import PropTypes from "prop-types";
// material
import { useTheme } from "@material-ui/core/styles";
import { useLocation } from "react-router-dom";
import { Box } from "@material-ui/core";

// ----------------------------------------------------------------------

Logo.propTypes = {
  sx: PropTypes.object,
};

export default function Logo({ sx }) {
  const theme = useTheme();
  const { pathname } = useLocation();

  const PRIMARY_LIGHT = theme.palette.primary.light;
  // const PRIMARY_MAIN = theme.palette.primary.main;
  // const PRIMARY_DARK = theme.palette.primary.dark;

  const logo =
    pathname === "/"
      ? // ? "https://drive.google.com/uc?id=1I0B7kXyQrqeScfCoAsmycuQKI3a4egZ_"
        "https://drive.google.com/uc?id=19UtXMdXrovzqRQa0RLKjenk1mJC_Jgmm"
      : "https://drive.google.com/uc?id=19UtXMdXrovzqRQa0RLKjenk1mJC_Jgmm";

  return (
    <Box sx={{ mt: 5, ...sx }} color={PRIMARY_LIGHT}>
      <img width="130.23" height="150" src={logo} data-src={logo} alt="" />
    </Box>
  );
}
