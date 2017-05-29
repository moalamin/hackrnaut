import React from 'react';

export default () => (
  <div className='pure-g about bg-dark'>
    <div className='pure-u-md-1-3 pure-u-1 about--portrait-container'>
      <img src='/me.png' alt='Portrait' className='pure-img'/>
    </div>
    <div className="pure-u-1 pure-u-md-2-3 about--blurb font-light">
      <div className='pure-u-1 pure-u-md-3-4 about--blurb-container'>
        <h1>I do Full-Stack.</h1>
        <p>
          I graduated in 2015 with a Bachelor's Degree in Computer Science.
          Since graduating I have been building and maintaining websites full time.
          I worked at <a href='https://www.wirecare.com' target='_blank'>Wirecare</a> where I helped them
          rewrite thier website in a RAILS stack over the course of a year. I am currently working at <a href='https://www.law360.com'>Law360</a>
          where I am also doing full-stack work. My favorite languages are Javascript and Ruby.
          <br/>
        </p>
        <h2>Technical Skills</h2>
        <p><strong>Languages:&nbsp;</strong>Ruby, Javascript, HTML, CSS</p>
      </div>
  </div>
</div>
);
