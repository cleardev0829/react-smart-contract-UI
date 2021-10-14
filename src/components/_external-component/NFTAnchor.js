import React from "react";
import {
  // useTheme,
  experimentalStyled as styled,
} from "@material-ui/core/styles";
import { Button, Stack, Box, Typography } from "@material-ui/core";
import { varFadeInUp, MotionInView } from "../animate";
import { Link as ScrollLink } from "react-scroll";

export default function NFTAnchor() {
  return (
    <Box
      sx={{
        top: 12,
        bottom: 12,
        left: 0,
        position: "fixed",
        zIndex: 100,
      }}
    >
      <Box
        sx={{
          left: 0,
          top: "40%",
          position: "absolute",
        }}
      >
        <Stack direction="column" spacing={3}>
          <MotionInView variants={varFadeInUp}>
            <ScrollLink
              to="virus"
              spy
              smooth="easeInOutQuint"
              duration={1500}
              offset={0}
            >
              <Button
                variant="contained"
                size="large"
                color="inherit"
                sx={{ width: 30 }}
              >
                <Typography sx={{ fontSize: 36, fontWeight: "bold" }}>
                  V
                </Typography>
              </Button>
            </ScrollLink>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <ScrollLink to="fungi" spy smooth duration={1500} offset={0}>
              <Button
                variant="contained"
                size="large"
                color="inherit"
                sx={{ width: 30 }}
              >
                <Typography sx={{ fontSize: 36, fontWeight: "bold" }}>
                  F
                </Typography>
              </Button>
            </ScrollLink>
          </MotionInView>
          <MotionInView variants={varFadeInUp}>
            <ScrollLink to="bacteria" spy smooth duration={1500} offset={0}>
              <Button
                variant="contained"
                size="large"
                color="inherit"
                sx={{ width: 30 }}
              >
                <Typography sx={{ fontSize: 36, fontWeight: "bold" }}>
                  B
                </Typography>
              </Button>
            </ScrollLink>
          </MotionInView>
        </Stack>
      </Box>
    </Box>
  );
}
