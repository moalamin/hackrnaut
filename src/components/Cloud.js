import React from 'react';

module.exports = (props) => {
  console.log(props)
  return (<svg className="cloud" id="Layer_1" data-name="Layer 1" style={{top:props.top, left:props.top}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 408 199"><defs><style>{` .cls-1{fill:#f2f2f2;} `}</style></defs><title>cloud</title><path className="cls-1 cloud__path" d="M633,458a48.11,48.11,0,0,0-5.13.28,69.69,69.69,0,0,0-45.47-40.66,96.59,96.59,0,0,0-128-47.93h0C440.37,401.8,464,424,464,424c-26.82-8.32-25.41-40.61-25-45.4a96.9,96.9,0,0,0-26.29,27.76,74.49,74.49,0,0,0-87,57.68c-.54,0-1.08,0-1.62,0a45,45,0,0,0-45,45c0,22.47,16.47,41.64,38,45H633a48,48,0,0,0,0-96Z" transform="translate(-276 -358)"/></svg>)
}
