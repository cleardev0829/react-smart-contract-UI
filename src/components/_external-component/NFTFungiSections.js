import React from "react";
import { experimentalStyled as styled } from "@material-ui/core/styles";
import VideoPlayer from "src/components/VideoPlayer";
import { Section } from "./";

const RootStyle = styled("div")(({ theme }) => ({
  padding: theme.spacing(10, 0, 5, 0),
  backgroundColor: "black",
}));

export default function NFTFungiSections() {
  return (
    <RootStyle>
      <div id="fungi-description">
        <Section
          title="1 Lichtheimia Corymbifera - Hyphae"
          components={[
            <img
              width={340}
              src="https://drive.google.com/uc?id=12IqaOirecME1Z8_dBVXndyt_QTlbquG-"
              data-src="https://drive.google.com/uc?id=12IqaOirecME1Z8_dBVXndyt_QTlbquG-"
              alt=""
            />,
          ]}
        >
          <span>
            A beautiful microscopic view at Lichtheimia corymbifera,
            athermophilic fungus, growing in multicellular filaments called
            hyphae. Lichtheimia corymbifer normally grows as a fuzzy mold that
            under certain circumstances can infect umans and cause cause
            pulmonary. Microscpic images were colellected by Yuri, Medical
            Laboratory Technician, who has an artistic eye when it comes to
            capturing snaps of photogenic microorganisms isolated from human
            patient samples from different hospitals.
          </span>
        </Section>
        <Section
          title=" 2 Aspergillus Niger - Mould Nebula"
          components={[
            <img
              src="https://drive.google.com/uc?id=1xTMm-xLaT77qhn468a7IyCA_3e-i-3_O"
              data-src="https://drive.google.com/uc?id=1xTMm-xLaT77qhn468a7IyCA_3e-i-3_O"
              alt=""
            />,
          ]}
        >
          <span>
            Macroscopic look at different mould species including Aspergillus
            Flavus, Aspergillus Calidoustus, Aspergillus Glaucus and Aspergillus
            Niger. Isolated from hospital patients and cultured and captured by
            Yuri. Beautiful filamentous, fuzzy structures grown on SAB agar
            plates serve as the template for alternate universes.
          </span>
        </Section>

        <Section
          title="3 Psilocybe Sensu Lato - Magic Mushrooms"
          components={[
            <img
              src="https://drive.google.com/uc?id=125ycQZAy0n6aZ9QCLEq1xuRjrfXbrO7L"
              data-src="https://drive.google.com/uc?id=125ycQZAy0n6aZ9QCLEq1xuRjrfXbrO7L"
              alt=""
            />,
            <VideoPlayer url="https://drive.google.com/uc?export=download&id=1BBGZYCVRTVmHG9eXs7xBIa8aSMjDE-GL" />,
          ]}
        >
          <span>
            The genus Psilocybe comprises an iconic group of mushroom-forming
            fungi, which are famous for its neurotropic use, especially in
            sacred religious ceremonies and more recently in phsychodelic
            experiences in western culture. Hallucinogenic effects are evoked by
            the psychedelic compounds psilocybin, psilocin and baeocystin
            produced by the mushroom. The psychodelic compounds act as agonists
            for several serotonin receptors and induce euphoria, visual and
            mental hallucinations, changes in perception, a distorted sense of
            time, and perceived spiritual experiences.
            <br />
            <br />
            <span style={{ fontSize: 14 }}>
              Based on phylogenetic studies publishes in open access journal
              Botany:
              <br />
              <br />
              Ramírez-CruzVirginia, GuzmánGastón, Villalobos-ArámbulaAlma Rosa,
              RodríguezAarón, MathenyP. Brandon, Sánchez-GarcíaMarisol, and
              Guzmán-DávalosLaura. Phylogenetic inference and trait evolution of
              the psychedelic mushroom genus Psilocybe sensu lato (Agaricales).
              <br />
              Botany. 91(9): 573-591.
              <br /> https://doi.org/10.1139/cjb-2013-0070.
            </span>
          </span>
        </Section>
      </div>
    </RootStyle>
  );
}
