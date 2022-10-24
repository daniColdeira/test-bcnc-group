import React from "react";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import MainView from "./components/MainView";
import Podcast from "./components/Podcast";
import EpisodeView from "./components/EpisodeView";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={MainView} />
          <Route exact path="/podcast/:podcastId">
            <Podcast />
          </Route>
          <Route exact path="/podcast/:podcastId/episode/:episodeId">
            <EpisodeView />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
