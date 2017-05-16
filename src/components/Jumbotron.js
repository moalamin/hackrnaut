import React, {Component} from 'react';
import '../styles/Jumbotron.scss';
import Cloud from './Cloud'

class Jumbotron extends Component {
  render() {
    return (
      <div className="jumbo-logo">
        <h1 className="jumbo-logo__text" >Hello, I'm Mo.</h1>
        <h2 className="jumbo-logo__text-small">I am a software developer from New York City.
          <br/>
           I earned my BA in Computer Science at Hunter College.
           <br/>
           I have experience building and maintaing web applications that are used daily by millions of users.
           </h2>
        <Cloud top={"20"}/>
      </div>
    );
  }
}

export default Jumbotron;
