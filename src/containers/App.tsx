import React from "react";
import { YoutubePlayer } from "../components/player/YoutubePlayer";

import Navbar from "../components/navbar/Navbar";
import { Searchbar } from "../components/searchbar/Searchbar";
import { Tabs } from "../components/tabs/Tabs";
import { Right, Left, SplitView } from "../components/layout";

function App() {
  // const { seekTo, setVideoId } = usePlayer();

  return (
    <div className="App">
      <Navbar />
      <SplitView>
        <Left>
          <YoutubePlayer />
        </Left>
        <Right>
          <Searchbar />

          <Tabs />
        </Right>
      </SplitView>
    </div>
  );
}

export default App;
