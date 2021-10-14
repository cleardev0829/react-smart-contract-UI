// material
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, Container, Typography } from "@material-ui/core";
// hooks
import useCountdown from "../../hooks/useCountdown";

const CountdownStyle = styled("div")({
  display: "flex",
  justifyContent: "center",
});

const NumberStyle = styled(Typography)(({ theme }) => ({
  fontFamily: "NetKanzl, serif",
  fontSize: 64,
  fontWeight: 300,
}));

// ----------------------------------------------------------------------

export default function Countdown() {
  const countdown = useCountdown(new Date("07/07/2022 21:30"));

  return (
    <Container>
      <Box sx={{ maxWidth: 480, margin: "auto", textAlign: "center" }}>
        <CountdownStyle>
          <div>
            <NumberStyle>{countdown.hours}</NumberStyle>
            <Typography
              sx={{ fontSize: 10, color: (theme) => theme.palette.PURPLE }}
            >
              hours
            </Typography>
          </div>

          <NumberStyle>:</NumberStyle>

          <div>
            <NumberStyle>{countdown.minutes}</NumberStyle>
            <Typography
              sx={{ fontSize: 10, color: (theme) => theme.palette.PURPLE }}
            >
              minutes
            </Typography>
          </div>

          <NumberStyle>:</NumberStyle>

          <div>
            <NumberStyle>{countdown.seconds}</NumberStyle>
            <Typography
              sx={{ fontSize: 10, color: (theme) => theme.palette.PURPLE }}
            >
              seconds
            </Typography>
          </div>
        </CountdownStyle>
      </Box>
    </Container>
  );
}
