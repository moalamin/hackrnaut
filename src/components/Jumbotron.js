import React, {Component} from 'react';
import '../styles/Jumbotron.scss';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbo-logo">
        <svg id="Layer_1" width="100%" height="100%" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 290.86 452.82"><defs>
          <style>{`.cls-1 {fill: url(#radial-gradient)} `}</style>
          <radialGradient id="radial-gradient" cx="640" cy="512" r="190.28" gradientUnits="userSpaceOnUse"><stop id="color-one" offset="0" stopColor="#29abe2"/><stop id="color-two" offset="1" stopColor="#0071bc"/></radialGradient></defs><title>hackrlogo</title><path className="cls-1" d="M509.57,285.59h31.57a15,15,0,0,1,15,15V456.21a15,15,0,0,0,15,15H708.86a15,15,0,0,0,15-15V300.59a15,15,0,0,1,15-15h31.57a15,15,0,0,1,15,15V723.41a15,15,0,0,1-15,15H738.86a15,15,0,0,1-15-15V537.77a15,15,0,0,0-15-15H571.14a15,15,0,0,0-15,15V723.41a15,15,0,0,1-15,15H509.57a15,15,0,0,1-15-15V300.59A15,15,0,0,1,509.57,285.59Z" transform="translate(-494.57 -285.59)"/></svg>
      </div>
    );
  }
}

export default Jumbotron;
