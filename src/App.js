import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Jumbotron from './components/Jumbotron'

class App extends Component {
  render() {
    return (
      <Router>
        <Route exact to="/" component={Jumbotron} />
      </Router>
    );
  }
}

export default App;
