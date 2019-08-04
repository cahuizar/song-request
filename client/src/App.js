import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/Home';
// import Login from './components/auth/Login';

import SongState from './context/song/SongState';
import './App.css';

function App() {
  return (
    <SongState>
      <Router>
        <Fragment>
          <Switch>
            <Route exact path='/' component={Home} />
          </Switch>
        </Fragment>
      </Router>
    </SongState>
  );
}

export default App;
