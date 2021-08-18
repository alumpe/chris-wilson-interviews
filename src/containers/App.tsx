import React from "react";
import { YoutubePlayer } from "../components/player/YoutubePlayer";

import Navbar from "../components/navbar/Navbar";
import { Searchbar } from "../components/searchbar/Searchbar";
import { Tabs } from "../components/tabs/Tabs";
import { Right, Left, SplitView, AppContainer } from "../components/layout";

const App = () => (
  <AppContainer>
    <Navbar />

    <SplitView>
      <Left>
        <div>
          <YoutubePlayer />
        </div>
      </Left>

      <Right>
        <Searchbar />

        <Tabs />
      </Right>
    </SplitView>
  </AppContainer>
);

export default App;
