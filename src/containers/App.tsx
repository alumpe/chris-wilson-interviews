import React from "react";
import { usePlayer } from "../utils/usePlayer";
import { YoutubePlayer } from "../components/player/YoutubePlayer";

import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "../components/accordion";
import Typography from "@material-ui/core/Typography";
import Navbar from "../components/navbar/Navbar";

function App() {
  // const { seekTo, setVideoId } = usePlayer();

  return (
    <div className="App">
      <Navbar />
      <YoutubePlayer />

      <Accordion>
        <AccordionSummary>
          <Typography>Accordion 1</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}

export default App;
