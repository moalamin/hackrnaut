import React, {Component} from 'react';
import '../styles/Jumbotron.scss';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbo-logo">
        <h1 className="jumbo-logo__text" >Hello, I'm Mo.</h1>
        <h2 className="jumbo-logo__text-small">I am a software developer from New York City. </h2>
      </div>
    );
  }
}

export default Jumbotron;
