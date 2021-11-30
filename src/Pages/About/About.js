import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';
import Footer from '../Shared/Footer/Footer';

const About = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <h1 className="text-center text-primary mb-4">About Me</h1>
            <p>My name is Anirban Barua, a junior front end web developer focused on crafting great web experiences. For the last few months, I am enjoying working in the web development sector very much. So I have decided to develop myself in this sector as an efficient & qualified one. I enjoy creating beautifully designed as well as make dynamic that website and functional websites.</p>
            <h5 className="text-primary">My skills about which I am comfortable</h5>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>Front end framework bootstrap</li>
              <li>React JS</li>
            </ul>
    
            <h5 className="text-primary">My skills about which I am familiar</h5>
            <ul>
              <li>node.js</li>
              <li>express.js</li>
              <li>mongoDB</li>
            </ul>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default About;