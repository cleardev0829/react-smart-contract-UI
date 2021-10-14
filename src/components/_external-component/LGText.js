import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";

// ----------------------------------------------------------------------

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 1),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

export default function LGText(props) {
  return (
    <RootStyle>
      <Grid
        container
        spacing={0}
        justifyContent="center"
        alignItems="flex-start"
      >
        <ContentStyle>
          <MotionInView variants={varFadeInUp}>
            <Typography
              sx={{
                fontSize: "calc(1.42857vw + 3.33929rem)",
                fontFamily: (theme) => `${theme.typography.specialFontFamily}`,
              }}
            >
              {props.text}
            </Typography>
          </MotionInView>
        </ContentStyle>
      </Grid>
    </RootStyle>
  );
}
