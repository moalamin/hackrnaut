import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import Jumbotron from './components/Jumbotron';
import About from './components/About';

class App extends Component {
  render () {
    return (
      <Router>
        <div className='root-div'>
          <Route exact path='/' component={Jumbotron} />
          <Route path='/about' component={About} />
        </div>
      </Router>
    );
  }
}

export default App;
