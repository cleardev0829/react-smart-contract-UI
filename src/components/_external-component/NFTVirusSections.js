import React from "react";
import PropTypes from "prop-types";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import { Box, ListItem } from "@material-ui/core";
import ImageMagnifier from "src/components/ImageMagnifier";
import VideoPlayer from "src/components/VideoPlayer";
import { Section } from "./";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 0, 5, 0),
  backgroundColor: "black",
}));

IconBullet.propTypes = {
  type: PropTypes.oneOf(["subheader", "item"]),
};

function IconBullet({ type = "item" }) {
  return (
    <Box sx={{ width: 24, height: 16, display: "flex", alignItems: "center" }}>
      <Box
        component="span"
        sx={{
          ml: "2px",
          width: 4,
          height: 4,
          borderRadius: "50%",
          bgcolor: "currentColor",
          ...(type !== "item" && {
            ml: 0,
            width: 8,
            height: 2,
            borderRadius: 2,
          }),
        }}
      />
    </Box>
  );
}

export default function NFTVirusSections() {
  return (
    <RootStyle id="virus-description">
      <Section
        title="1 Virus particles and structures - Molecules"
        components={[
          <VideoPlayer url="https://drive.google.com/uc?export=download&id=1EhqxqZYfo4-kPm-LG0SUKxkt92cEnHyr" />,
          <ImageMagnifier
            maxWidth={340}
            src="https://drive.google.com/uc?id=1f4KtgrHaVO68jKvtVmRYVAdzwoNCL7CO"
            underSrc="https://drive.google.com/uc?id=1wynSxn8NUtkId3-7e5srMZZ74AKOa5YE"
          />,
        ]}
      >
        <span>
          Looking deep inside the molecular structure of some of the deadliest
          viruses on earth. Whole viral particles as well as essential
          components were visualised using scientific open source software
          srcipt pymol based on experimentally acquired data from x-ray
          crystallography, Nuclear Magnetic Resonance and
          cryo-Electronmicroscopy experiments available publically in the RSCB
          protein data bank. This included animated artwork from :
          <br />
          <br />
          <ListItem>
            <IconBullet />
            Influenza virus
          </ListItem>
          <ListItem>
            <IconBullet />
            Hepatitis virus
          </ListItem>
          <ListItem>
            <IconBullet />
            Dengue virus
          </ListItem>
          <ListItem>
            <IconBullet />
            Rabies virus
          </ListItem>
          <ListItem>
            <IconBullet />
            Ebola virus
          </ListItem>
          <ListItem>
            <IconBullet />
            Papilloma virus
          </ListItem>
          <ListItem>
            <IconBullet />
            Poliovirus
          </ListItem>
          <ListItem>
            <IconBullet />
            Rotavirus
          </ListItem>
          <ListItem>
            <IconBullet />
            Smallpox
          </ListItem>
          <ListItem>
            <IconBullet />
            HIV
          </ListItem>
          <br />
          Includes 19 ultrarare
          <br /> interactive SARS-COV-2
          <br /> (COVID-19 diesease) strucures.
          <br />
          <br /> <span style={{ fontSize: 14 }}>https://www.rcsb.org/</span>
        </span>
      </Section>
      <Section
        title=" Herpes Simplex Virus - Hidden Passenger"
        components={[
          <VideoPlayer url="https://drive.google.com/uc?export=download&id=1si9O4mE5KMYe94QXG6Dv0jHlFpY2cQpz" />,
        ]}
      >
        <span>
          More than half of the human population are infected with Herpes
          simplex virus (HSV-1 or -2). Many of the carriers of the virus never
          develop symptoms, as the virus hides from the patroling immune system
          in the body of our nerve cells. In certain cases HSV-1 infection can
          lead to the inflamation of the brain (Encephalitis).Studying very
          early events in viral infections by looking inside our cells is of
          great importance to understand how we can prevent infection from this
          hidden passenger. Laser fluoerescent microspcopy coupled with state of
          the art fluorescent labeling of viral genetic material, allows
          tracking the infection in real time.
          <br />
          <br />
          <span style={{ fontSize: 14 }}>
            Based on work by Catherine Cherry at Imperial College London
          </span>
        </span>
      </Section>
    </RootStyle>
  );
}
