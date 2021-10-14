// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Grid, Container } from "@material-ui/core";
// components
import Page from "../components/Page";

// ----------------------------------------------------------------------

const RootStyle = styled(Page)(({ theme }) => ({
  paddingTop: theme.spacing(8),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(11),
  },
}));

// ----------------------------------------------------------------------

export default function Documentation() {
  return (
    <RootStyle title="Contact us | Minimal-UI">
      <Container sx={{ my: 10 }}>
        <Grid container spacing={10}>
          <Grid item xs={12} md={6}></Grid>
          <Grid item xs={12} md={6}></Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
