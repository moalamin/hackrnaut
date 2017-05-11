import React, {Component} from 'react';
import '../styles/Jumbotron.scss';

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbo-logo">
        {/*<svg id="Layer_1" width="100%" height="100%" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 290.86 452.82"><defs>
          <style>{`.cls-1 {fill: url(#radial-gradient)} `}</style>
          <radialGradient id="radial-gradient" cx="640" cy="512" r="190.28" gradientUnits="userSpaceOnUse"><stop id="color-one" offset="0" stopColor="#29abe2"/><stop id="color-two" offset="1" stopColor="#0071bc"/></radialGradient></defs><title>hackrlogo</title><path className="cls-1" d="M509.57,285.59h31.57a15,15,0,0,1,15,15V456.21a15,15,0,0,0,15,15H708.86a15,15,0,0,0,15-15V300.59a15,15,0,0,1,15-15h31.57a15,15,0,0,1,15,15V723.41a15,15,0,0,1-15,15H738.86a15,15,0,0,1-15-15V537.77a15,15,0,0,0-15-15H571.14a15,15,0,0,0-15,15V723.41a15,15,0,0,1-15,15H509.57a15,15,0,0,1-15-15V300.59A15,15,0,0,1,509.57,285.59Z" transform="translate(-494.57 -285.59)"/>
        </svg>*/}
        <h1 className="jumbo-logo__text" >Hello, I'm Mo.</h1>
        <h2 className="jumbo-logo__text--asmall">I make websites.</h2>
        <svg className="cloud" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 199"><defs><style>{` .cls-1{fill:#f2f2f2;stroke:#000;stroke-miterlimit:10;stroke-width:6px;} `}</style></defs><title>cloud</title><path className="cls-1 cloud__path" d="M633,458a48.11,48.11,0,0,0-5.13.28,69.69,69.69,0,0,0-45.47-40.66,96.59,96.59,0,0,0-128-47.93h0C440.37,401.8,464,424,464,424c-26.82-8.32-25.41-40.61-25-45.4a96.9,96.9,0,0,0-26.29,27.76,74.49,74.49,0,0,0-87,57.68c-.54,0-1.08,0-1.62,0a45,45,0,0,0-45,45c0,22.47,16.47,41.64,38,45H633a48,48,0,0,0,0-96Z" transform="translate(-276 -358)"/></svg>
        <svg className="cloud-two" id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 199"><defs><style>{` .cls-1{fill:#f2f2f2;stroke:#000;stroke-miterlimit:10;stroke-width:6px;} `}</style></defs><title>cloud</title><path className="cls-1 cloud__path" d="M633,458a48.11,48.11,0,0,0-5.13.28,69.69,69.69,0,0,0-45.47-40.66,96.59,96.59,0,0,0-128-47.93h0C440.37,401.8,464,424,464,424c-26.82-8.32-25.41-40.61-25-45.4a96.9,96.9,0,0,0-26.29,27.76,74.49,74.49,0,0,0-87,57.68c-.54,0-1.08,0-1.62,0a45,45,0,0,0-45,45c0,22.47,16.47,41.64,38,45H633a48,48,0,0,0,0-96Z" transform="translate(-276 -358)"/></svg>
      </div>
    );
  }
}

export default Jumbotron;
