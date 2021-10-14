import PropTypes from "prop-types";
import { NavLink as RouterLink, useLocation } from "react-router-dom";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Grid, Typography, Stack, Link } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../../components/animate";

const RootStyle = styled("div")(({ theme }) => ({
  paddingTop: theme.spacing(5),
}));

export const LinkStyle = styled(Link)(({ theme }) => ({
  ...theme.typography.subtitle2,
  color: theme.palette.text.primary,
  marginRight: theme.spacing(5),
  transition: theme.transitions.create("opacity", {
    duration: theme.transitions.duration.shortest,
  }),
  "&:hover": {
    opacity: 0.48,
    textDecoration: "none",
  },
  [theme.breakpoints.down("md")]: {
    marginRight: theme.spacing(2),
  },
}));

VerticalMenuDesktop.propTypes = {
  isOffset: PropTypes.bool,
  isHome: PropTypes.bool,
  navConfig: PropTypes.array,
};

function VerticalMenuDesktopItem({ item, pathname, isHome, isOffset }) {
  const {
    title,
    path,
    // children
  } = item;
  const isActive = pathname === path;

  return (
    <LinkStyle
      key={title}
      to={path}
      component={RouterLink}
      sx={{
        ...(isHome && { color: "text.secondary" }),
        ...(isOffset && { color: "text.secondary" }),
        ...(isActive && { color: '"text.primary"' }),
        cursor: "pointer",
      }}
    >
      <Typography
        variant="inherit"
        sx={{
          fontWeight: 400,
          fontSize: 35,
          lineHeight: "30.8px",
          fontStyle: "normal",
          cursor: "pointer",
          color: isHome ? "white" : "",
        }}
      >
        {title}
      </Typography>
    </LinkStyle>
  );
}

export default function VerticalMenuDesktop({ isOffset, isHome, navConfig }) {
  const { pathname } = useLocation();

  return (
    <RootStyle>
      <Grid
        container
        spacing={1}
        justifyContent="center"
        alignItems="flex-start"
        sx={{ pb: 2 }}
      >
        <MotionInView variants={varFadeInUp}>
          <Stack direction="column">
            {navConfig.map((link) => (
              <VerticalMenuDesktopItem
                key={link.title}
                item={link}
                pathname={pathname}
                isOffset={isOffset}
                isHome={isHome}
              />
            ))}
          </Stack>
        </MotionInView>
      </Grid>
    </RootStyle>
  );
}
