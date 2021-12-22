import React from 'react';
import Navigation from '../Shared/Navigation/Navigation';

const Services = () => {
  return (
    <div>
      <Navigation></Navigation>
      <div className="container my-5">
        <h1 className="text-center text-primary mb-5">Blogs</h1>
        <div className="row justify-content-center">
          <div className="col-lg-10 mb-4">
            <div>
              <a href="#react-js" className="fw-bold d-inline-block text-decoration-none text-dark">React.js</a>
              <span className='fw-bold mx-1'>&#x2f;</span>
              <a href="#back-end-topic" className="fw-bold d-inline-block text-decoration-none text-dark">Back-end</a>
            </div>
            <h3 id="react-js" className="topic-heading text-primary fw-bold border-bottom border-1 border-primary pb-2 mb-4 mt-3">
              React.js
            </h3>
            <div className="blog-topic mb-4">
              <h4 className="text-primary">what is JSX</h4>
              <p>JSX in full form JavaScript XML & for XML Extensible Markup Language. JSX use in reactjs to write HTML in to React component.</p>
            </div>

            <div className="blog-topic mb-4">
              <h4 className="text-primary">virtual dom</h4>
              <p>In react virtual DOM is like mild copy of real DOM. Same in real dom exists in virtual in mild form. It is likely to the real dom but it does not have the ability to actually render document. Time of affectivity of real DOM  is greater than virtual DOM. Which means virtual DOM change rapidly.</p>
            </div>

            <div className="blog-topic mb-4">
              <h4 className="text-primary">props and state</h4>
              <p>In javaScript both state & props are data container. State is related issue with any component & and on other hand props is not depends on component. Props are read only & state will be change.</p>
            </div>

            <div className="blog-topic mb-4">
              <h4 className="text-primary">component lifecycle</h4>
              <p>Component are made to render something into UI, after its need come to end then gone. From build then render as well as the vanish after it’s need call component lifecycle.</p>
            </div>

            <div className="blog-topic mb-4">
              <h4 className="text-primary">redux</h4>
              <p>Redux is state management tools in react where we need to manage a huge data need to organize as well as distribute.</p>
            </div>

            <div className="blog-topic mb-4">
              <h4 className="text-primary">"key" prop</h4>
              <p>“Key” props is special attribute in React by which can easily identify react which array items will be change or update.</p>
            </div>

            <div className="blog-topic mb-4">
              <h4 className="text-primary">prop drilling</h4>
              <p>Prop drilling is that process by which data flow on going from one react component to another via use react component tree where to pass data some component where as no need the data of that component at all but only for passing data it was act via there.</p>
            </div>

            <div className="blog-topic mb-4">
              <h4 className="text-primary">purpose of useState</h4>
              <p>useState is bulid in hook of react own itself. In a react app we call it from react package for use. Hook is here play roll to allow useState to implement without use class component.
              </p>
            </div>

            <div className="blog-topic mb-4">
              <h4 className="text-primary">custom hooks</h4>
              <p>In react js by custom hooks which is create by our-self use to share needful information like authentication system into different react components easily which is actually js function</p>
            </div>

            <div className="blog-topic mb-4">
              <h4 className="text-primary">context API</h4>
              <p>In react js context API used for manage state its like different process than props drilling where pass state from grand component to  grandchild component is not so flexible way where state passed manually. But use context API it is very to pass state parent component to its different child component.</p>
            </div>

          </div>

          <div className="col-lg-10 mb-4">
            <h3 id="back-end-topic" className="topic-heading text-primary fw-bold border-bottom border-1 border-primary pb-2 mb-4 mt-3">
              Back-end related some topics
            </h3>

            <div className="blog-topic mb-4">
              <h4 className="text-primary">CRUD Operations</h4>
              <p>CRUD in full form create-read-update-delete. Which is basic backend operation done from client side to database. By create operation user input any data which is actually newly posted. Read operation bring user stored information from database to render it into UI. Update operation modify user previous information & store the modified information in to database. Delete operation erase user information from database if needed.
              </p>
            </div>

            <div className="blog-topic mb-4">
              <h4 className="text-primary">MySQL Database</h4>
              <p>It is open source resources use to organize user data to store as well as provide to render when user call it from client side can do perform most of platform. By MySQL we maintain relation to database for manage user data. We can use it as per our expectation & also modify when needed as per our requirement.</p>
            </div>

            <div className="blog-topic mb-4">
              <h4 className="text-primary">SQL</h4>
              <p>SQL means structure query language. By which language can connect to relational database as well done various DB related operation with this language. Where user data save in to table form & there relation with row & column, different table column with column.</p>
            </div>

            <div className="blog-topic mb-4">
              <h4 className="text-primary">mongodb database</h4>
              <p>It is also open source user data management system but it is non-relational database called noSQL database. This type of database used to manage husge volume size of data gather from user. As it is non-relation database it’s easy to put user data directly from client side.</p>
            </div>

            <div className="blog-topic mb-4">
              <h4 className="text-primary">Node.js</h4>
              <p>Nodejs is actually runtime for javaScript. Ript perform only into client side or browser but node js perform in both side. Nodejs help javaScript to run into backend server. Node js non-blocking system.</p>
            </div>

            <div className="blog-topic mb-4">
              <h4 className="text-primary">Express js</h4>
              <p>Open source resourse of web application do make quickly application for both single / multipage. Actually it is framework for node.js. By express js code do run in to backend server as well as possible to connect to database with frontend.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;