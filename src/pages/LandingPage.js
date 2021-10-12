// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import {
  AboutTeam,
  ContactUsWithMap,
} from "src/components/_external-pages/about";
// components
import Page from "../components/Page";
import { LandingHero, PostItem } from "../components/_external-pages/landing";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)({
  height: "100%",
});

const ContentStyle = styled("div")(({ theme }) => ({
  overflow: "hidden",
  position: "relative",
  backgroundColor: theme.palette.background.default,
}));

export default function LandingPage() {
  return (
    <RootStyle title="This is IRekommend website | Minimal-UI" id="move_top">
      <LandingHero />
      <ContentStyle>
        <LandingHugePackElements />

        <ContactUsWithMap />
      </ContentStyle>
    </RootStyle>
  );
}
