import React from "react";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import Page from "../components/Page";
import LandingHero from "src/components/_external-pages/pages/LandingHero";
import LandingFeature from "../components/_external-pages/pages/LandingFeature";
import LandingAbout from "../components/_external-pages/pages/LandingAbout";
import LandingContact from "../components/_external-pages/pages/LandingContact";
import LandingRoadmap from "../components/_external-pages/pages/LandingRoadmap";
import LandingFounders from "../components/_external-pages/pages/LandingFounders";
import LandingFooter from "../components/_external-pages/pages/LandingFooter";

const RootStyle = styled(Page)({
  height: "100%",
});

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.body,
}));

export default function LandingPage() {
  return (
    <RootStyle
      title="The starting point for your next project | Minimal-UI"
      id="move_top"
    >
      <ContentStyle>
        <LandingHero />
        <LandingFeature />
        <LandingAbout />
        <LandingContact />
        <LandingRoadmap />
        <LandingFounders />
        <LandingFooter />
      </ContentStyle>
    </RootStyle>
  );
}
