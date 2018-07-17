import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import {LandingPage, HomePage} from './components/index'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route path='/homepage' component={HomePage} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
