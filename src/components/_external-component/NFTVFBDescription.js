import React from "react";
import { Container, Typography } from "@material-ui/core";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { varFadeInUp, MotionInView } from "../animate";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(20, 0),
}));

const ContentStyle = styled("div")(({ theme }) => ({
  width: "100%",
  textAlign: "center",
  marginBottom: theme.spacing(10),
  [theme.breakpoints.up("md")]: {
    textAlign: "left",
    marginBottom: 0,
  },
}));

export default function NFTVFBDescription({ id, title, color }) {
  return (
    <RootStyle id={id}>
      <ContentStyle id="buttons">
        <Container maxWidth="xlg" justifyContent="space-between">
          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h4"
              sx={{
                mb: 5,
                fontWeight: "bold",
                fontFamily: (theme) => `${theme.typography.headingFontFamily}`,
              }}
            >
              {title}
            </Typography>
          </MotionInView>

          <MotionInView variants={varFadeInUp}>
            <Typography
              variant="h4"
              color={color}
              sx={{
                fontStyle: "italic",
                fontWeight: "normal",
              }}
            >
              Ancient small single-celled organisms residing in and all around
              us. Tiny molecular factories that are found almost everywhere on
              earth, even under the most extreme condiotions, and are essential
              for the planet’s ecosystem. Bacteria play an essential role in the
              homeostasis of our body. The human body carries millions of
              bacteria and infact, is estimated to contain more bacterial cells
              than human cells. While most bacteria are beneficial, living in
              symbiosis with the human system, some can cause fatal diseases
              that are becoming harder to treat with the rise of antibiotic
              resistence.
            </Typography>
          </MotionInView>
        </Container>
      </ContentStyle>
    </RootStyle>
  );
}
