require('normalize.css/normalize.css');
require('styles/App.css');

import React from 'react';


import {BrowserRouter as Router,
        Route,
        NavLink} from 'react-router-dom';


// let yeomanImage = require('../images/yeoman.png');

class AppComponent extends React.Component {
  render() {
    return (
      <div className="index">
  <Router>
    <div className="basic-component">
      <nav className="mainMenu">
        <ul className="navigation">
          <li className="menu"><NavLink to="/about" activeClassName="selected">about</NavLink></li>
          <li className="menu"><NavLink to="/work" activeClassName="selected">work</NavLink></li>
          <li className="menu"><NavLink to="/contact" activeClassName="selected">contact</NavLink></li>
        </ul>
      </nav>
      <div className="content">
        <Route path="/about" component={About} />
        <Route path="/work" component={Work} />
        <Route path="/contact" component={Contact} />
      </div>
    </div>
  </Router>
      </div>
    );
  }
}

const About = () => (
  <div className="wrapperConact">
    <div className="header">
      <p>
        FRONT-END DEVELOPER | SEATTLE, WA
      </p>
      <div className="line"></div>
    </div>
    <div className="aboutText">
      <p>
        Hello, my name is Andrew. I am a Frontend Web Developer. I also hold a Masters degree in Computer Science and I have more then 3 years of professional experiance as an Web developer. I love to learn new technology and use then in real life. Since the age of 15, I have delved into numerous programming languages. My interest in designing and developing engaging user interfaces is what drove me to specialise in Frontend Development.
      </p>
      <p>Now I live in Seattle and open to new opportunities in the career of web developers.
      </p>
    </div>

    <div className="skills">
      <div className="header">
        <p>
          SCRIPTING AND PROGRAMMING LANGUAGES
        </p>
      </div>
      <div className="line"></div>

      <div className="skillsName">
        <p>HTML</p>
        <div className="skillsLevel">
          <div className="htmlLevel animateHtml">
            <p className="level">PROFICIENT</p>
          </div>
        </div>
      </div>
      <div className="skillsName">
        <p>CSS</p>
        <div className="skillsLevel">
          <div className="cssLevel animateCss">
            <p className="level">FAMILIAR</p>
          </div>
        </div>
      </div>
      <div className="skillsName">
        <p>JavaScript</p>
        <div className="skillsLevel">
          <div className="jsLevel animateJs">
            <p className="level">FAMILIAR</p>
          </div>
        </div>
      </div>
      <div className="skillsName">
        <p>JQuery</p>
        <div className="skillsLevel">
          <div className="jqLevel animateJq">
            <p className="level">FAMILIAR</p>
          </div>
        </div>
      </div>
      <div className="skillsName">
        <p>React.js</p>
        <div className="skillsLevel">
          <div className="reactLevel animateReact">
            <p className="level">BEGINER</p>
          </div>
        </div>
      </div>
    </div>
  </div>
)

const Work = () => (
  <div>
    <div className="header">
      <p>
        A SHOWCASE OF WEBSITES | DEVELOPMENT AND EXPERIMENTS
      </p>
      <div className="line"></div>
    </div>
<div className="portfolio">
<ul>
  <li>
    <span className="descr">
      LUKS CONSTRUCTION
      <br />
      <p><em>
        Construction company website specialized in hardwood floors
      </em></p>
      <br />
      <a className="toSite" href="http://www.luksconstruction.com/" target="_blank">VISIT WEBSITE </a>
    </span>
    <img src="/images/luks1.jpg" alt="Alt" />
  </li>
  <li>
    <span className="descr">
      EXCON
      <br />
      <p><em>
        Consulting company website
      </em></p>
       <br />
      <a className="toSite" href="http://excon.kiev.ua/" target="_blank">VISIT WEBSITE </a>
    </span>
    <img src="/images/excon1.jpg" alt="Alt" />
  </li>
  <li>
    <span className="descr">
      INTEK
      <br />
      <p><em>
        Architectural company website
      </em></p>
 <br />
      <a className="toSite" href="http://intek.org.ua/" target="_blank">VISIT WEBSITE </a>
    </span>
    <img src="/images/intek1.jpg" alt="Alt" />
  </li>
</ul>
</div>
  </div>
)

const Contact = () => (
  <div className="wrapperConact">
    <div className="header">
      <p>
        CURRENTLY AVAILABLE FOR CONTRACT OR FULL-TIME WORK,
        AND WOULD LOVE TO HEAR FROM YOU
      </p>
      <div className="line"></div>
    </div>
    <div className='contactForm'>
      <div className="inform">
        <div>lukandrew86@gmail.com</div>
        <div>+1 (425) 971 28 95</div>
        <div>Seattle WA, USA</div>
        <div className="contactsSocial">
        	<a href="https://github.com/lukandrew" target="_blank">GItHub</a>
        	<div> / </div>
        	<a href="https://www.linkedin.com/in/andrew-lukianchuk-970143133" target="_blank">LinkedIn</a>
        	<div> / </div>
        	<a href="https://www.facebook.com/andrew.luk.86" target="_blank">Facebook</a>
        </div>
      </div>

      <form id="form" className="topBefore">
        <input id="name" type="text" name="name" placeholder="Name" required />
        <input id="email" type="text" name="email" placeholder="E-mail" required />
        <textarea id="message" type="text" name="text" placeholder="Message" required></textarea>
        <input id="submit" type="submit" value="submit" />
      </form>

    </div>
  </div>
)



AppComponent.defaultProps = {
};

export default AppComponent;