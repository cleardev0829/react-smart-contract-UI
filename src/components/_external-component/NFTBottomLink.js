import React from "react";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Grid, Container, Typography, Link } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(12, 0),
}));

export default function NFTBottomLink() {
  return (
    <RootStyle>
      <Container maxWidth="xlg">
        <Grid container spacing={5} justifyContent="center">
          <Grid item xs={12} md={6} dir="ltr">
            <MotionInView variants={varFadeInUp}>
              <Link
                target="_blank"
                href="https://creativecommons.org/licenses/by/4.0/"
                key="https://creativecommons.org/licenses/by/4.0/"
              >
                <Typography
                  variant="subtitle1"
                  color="black"
                  sx={{
                    fontStyle: "normal",
                    fontWeight: 300,
                    "&:hover": {
                      color: (theme) => theme.palette.GREEN,
                    },
                  }}
                  textAlign="center"
                >
                  Images taken from indicated publications are under the
                  Creative Common Attribution 4.0 License (Attribution 4.0
                  International (CC BY 4.0))
                </Typography>
              </Link>
            </MotionInView>
          </Grid>
        </Grid>
      </Container>
    </RootStyle>
  );
}
