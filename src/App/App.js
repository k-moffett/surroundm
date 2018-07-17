import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import {LandingPage, HomePage} from './components/index'

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/homepage" component={HomePage} />
        </div>
      </Router>
    );
  }
}

export default App;
