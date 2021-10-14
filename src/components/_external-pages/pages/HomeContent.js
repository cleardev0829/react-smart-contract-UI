import { useDispatch } from "react-redux";
import {
  // useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";

import {
  HomeHero,
  HomeDesci,
  HomeDeScientists,
  HomeEthereum,
} from "../../_external-component";

import { Link as ScrollLink } from "react-scroll";
import { setActive } from "src/redux/slices/active";

const RootStyle = styled("div")(({ theme }) => ({
  paddingBottom: theme.spacing(12, 0),
}));

export default function HomeContent() {
  const dispatch = useDispatch();
  window.scrollTo({
    top: 100,
    left: 100,
    behavior: "smooth",
  });

  return (
    <RootStyle>
      <HomeHero />
      <HomeDesci />
      <HomeDeScientists />
      <HomeEthereum />
      <ScrollLink
        to="overlay"
        spy
        onSetActive={(e) => dispatch(setActive(true))}
        onSetInactive={(e) => dispatch(setActive(false))}
      />
    </RootStyle>
  );
}
