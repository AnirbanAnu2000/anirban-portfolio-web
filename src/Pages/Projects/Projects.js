import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Navigation from '../Shared/Navigation/Navigation';
import './Projects.css';
import Footer from '../Shared/Footer/Footer';

const Projects = () => {
  return (
    <div>
      <Navigation></Navigation>
      <Container className="pb-2 border-bottom border-1 border-primary mb-5">
        <h1 className="text-center mb-5 mt-5 text-primary projects-heading">My All Projects</h1>
        <Row id="comfort-car-palace">
          <Col lg={12} className="mt-3 mb-5 text-primary project-name pt-3 pb-2 text-center">
            <h2>Comfort Car Palace</h2>
          </Col>
          <Col lg={4} className="d-flex align-items-center project-view">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/portfolio/projects/car-sm.png" className="w-100 project-img-main" alt="" />
          </Col>
          <Col lg={4} className="d-flex align-items-center project-view">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/portfolio/projects/car-sm2.png" className="w-100 project-img-main" alt="" />
          </Col>
          <Col lg={4} className="d-flex align-items-center project-view">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/portfolio/projects/car-sm3.png" className="w-100 project-img-main" alt="" />
          </Col>
          <Col lg={12} className="project-short-detail py-5">
            <a href="https://comfort-car-palace2.web.app/" target="_blank" rel="noreferrer" style={{textDecoration:"none",fontWeight:"700",fontSize:"16px"}}>Go To Live Website</a> <i class="fas fa-grip-lines-vertical text-primary"></i> &nbsp; 

            <a href="https://github.com/AnirbanAnu2000/comfort-car-palace-web2" target="_blank" rel="noreferrer" style={{textDecoration:"none",fontWeight:"700",fontSize:"16px"}}>Github client side code link</a> <i class="fas fa-grip-lines-vertical text-primary"></i> &nbsp; 

            <a href="https://github.com/AnirbanAnu2000/comfort-car-palace-server2" target="_blank" rel="noreferrer" style={{textDecoration:"none",fontWeight:"700",fontSize:"16px"}}>Github server side code link</a>
            <h5 className="my-3">It is a car dealer website, below are details</h5>
            <ul>
              <li>Order buttons of products part in home page & explore page & dashboard navbar(top of the home page) are private, if one user logged in then he/she can visit.</li>
              <li>In the dashboard uses nested routing, where manage & explore products, manage all orders, add products/explore as well as make admin options can see only who is an admin. </li>
              <li>There too many options here you can get choose as comfortable car</li>
              <li>To get the wholesale price you must buy at least 10 cars</li>
              <li>From this site you can get original spare parts which are rare than other sellers</li>
              <li>Uses: Client side-React app, react bootstrap, firebase for authentication, react hook form, react router dom v5, font awesome cdn.  Server side- express, mongodb, node.js.</li>
            </ul>
          </Col>
        </Row>

        <Row id="classic-tourism-park">
          <Col lg={12} className="mt-3 mb-5 text-primary project-name pt-3 pb-2 text-center">
            <h2>Classic Tourism Park</h2>
          </Col>
          <Col lg={4} className="d-flex align-items-center project-view">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/portfolio/projects/tour-sm.png" className="w-100 project-img-main" alt="" />
          </Col>
          <Col lg={4} className="d-flex align-items-center project-view">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/portfolio/projects/tour-sm2.png" className="w-100 project-img-main" alt="" />
          </Col>
          <Col lg={4} className="d-flex align-items-center project-view">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/portfolio/projects/tour-sm3.png" className="w-100 project-img-main" alt="" />
          </Col>
          <Col lg={12} className="project-short-detail py-5">
            <a href="https://classic-tourism-park-6ab7e.web.app/" target="_blank" rel="noreferrer" style={{textDecoration:"none",fontWeight:"700",fontSize:"16px"}}>Go To Live Website</a> <i class="fas fa-grip-lines-vertical text-primary"></i> &nbsp; 

            <a href="https://github.com/AnirbanAnu2000/classic-tourism-park-web2" target="_blank" rel="noreferrer" style={{textDecoration:"none",fontWeight:"700",fontSize:"16px"}}>Github client side code link</a> <i class="fas fa-grip-lines-vertical text-primary"></i> &nbsp; 

            <a href="https://github.com/AnirbanAnu2000/classic-tourism-park-server2" target="_blank" rel="noreferrer" style={{textDecoration:"none",fontWeight:"700",fontSize:"16px"}}>Github server side code link</a>
            <h5>It is a tourism & travel website, below are details</h5>
            <ul>
              <li>Order buttons of services part in home page is private, if one user logged in then he/she can visit.</li>
              <li>After logged in a user can see some options Add Service, Manage Services, Manage Orders & My orders.</li>
              <li>It can be use to offering tour package by which one can get suitable tour package to enjoy.</li>
              <li>From this website one can get more information about any destination of tour package which also help him/her to choose a tour service.</li>
              <li>Uses: Client side-React app, react bootstrap, firebase for authentication, react hook form, react router dom v5, font awesome cdn.  Server side- express, mongodb, node.js.</li>
            </ul>
          </Col>
        </Row>

        <Row id="decent-healthcare">
          <Col lg={12} className="mt-3 mb-5 text-primary project-name pt-3 pb-2 text-center">
            <h2>Decent Healthcare</h2>
          </Col>
          <Col lg={4} className="d-flex align-items-center project-view">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/portfolio/projects/health-sm.png" className="w-100 project-img-main" alt="" />
          </Col>
          <Col lg={4} className="d-flex align-items-center project-view">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/portfolio/projects/health-sm2.png" className="w-100 project-img-main" alt="" />
          </Col>
          <Col lg={4} className="d-flex align-items-center project-view">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/portfolio/projects/health-sm3.png" className="w-100 project-img-main" alt="" />
          </Col>
          <Col lg={12} className="project-short-detail py-5">
            <a href="https://decent-healthcare2.web.app/" target="_blank" rel="noreferrer" style={{textDecoration:"none",fontWeight:"700",fontSize:"16px"}}>Go To Live Website</a> <i class="fas fa-grip-lines-vertical text-primary"></i> &nbsp; 

            <a href="https://github.com/AnirbanAnu2000/decent-healthcare--public" target="_blank" rel="noreferrer" style={{textDecoration:"none",fontWeight:"700",fontSize:"16px"}}>Github client side code link</a>

            <h5 className="my-3">It is healthcare website, below are details</h5>
            <ul>
              <li>Details buttons of services part in home page are private, if one user logged in then he/she can visit.</li>
              <li>After logged in a user can see his/her name on the top navigation</li>
              <li>If you are looking for the best medical service, you are in the right place</li>
              <li>We Provide the highest level of satisfaction care & services to our patients. Building a healthy environment that supports development for the community.</li>
              <li>Choosing child care is an important decision – it sets the stage for healthy growth and development. Find a regulated child care that's provided by us.</li>
              <li>Uses: React app, react bootstrap, react router dom v5, font awesome cdn</li>
            </ul>
          </Col>
        </Row>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Projects; 