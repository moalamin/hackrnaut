import React, {Component} from 'react';

class Jumbotron extends Component {
  render() {
    return (
      <div className='jumbo'>
        <h1 className='jumbo--big-text'>Hello, I'm Mo.</h1>
        <h5 className="jumbo--blurb hidden-phone">
          I am a software developer form New York city.
        </h5>
      </div>
    );
  }
}

export default Jumbotron;
