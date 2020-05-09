import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import SideBar from './components/SideBar/SideBar';
import Games from './components/Games/Games';
import TopStreams from './components/TopStreams/TopStreams';
import Live from './components/Live/Live';
import GameStreams from './components/GameStreams/GameStreams';
import Resultats from './components/Resultat/Resultat'
import Erreur from './components/Erreur/Erreur';

import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router >
      <div className="App">
        <Header />
        <SideBar />
        <Switch >
          <Route exact path="/" component={Games} />
          <Route exact path="/top-streams" component={TopStreams} />
          <Route exact path="/live/:slug" component={Live} />
          <Route exact path="/game/:slugpppppp" component={GameStreams} />
          <Route exact path="/resultats/:slug" component={Resultats} />
          <Route exact path="/resultats/" component={Erreur} />

        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
