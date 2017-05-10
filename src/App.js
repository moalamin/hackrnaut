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
        <div className="root-div">
          <Route exact to="/" component={Jumbotron} />
        </div>
      </Router>
    );
  }
}

export default App;
