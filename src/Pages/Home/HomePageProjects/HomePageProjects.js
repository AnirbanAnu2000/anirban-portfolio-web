import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
// import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './HomePageProjects.css';

const HomePageProjects = () => {
  return (
    <div>
      <Container className="pb-5 border-bottom border-1 border-primary mb-5">
        <h1 className="text-center mb-3 mt-5 text-primary">My Projects</h1>
        <Row>
          <Col lg={5} className=" d-flex align-items-center project-view">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/portfolio/projects/car-sm.png" className="w-100 project-img" alt="" />
          </Col>
          <Col lg={7} className="project-short-detail py-5">
            <h3>Comfort Car Palace</h3>
            <a href="https://comfort-car-palace2.web.app/" target="_blank" rel="noreferrer" style={{textDecoration:"none",fontWeight:"700",fontSize:"18px"}}>Go To Live Website</a>
            <h5>It is a car dealer website, at a glance about it</h5>
            <ul>
              <li>All order buttons dashboard menu(top of the home page) are private.</li>
              <li>Manage & explore products, manage all orders, add products/explore as well as make admin options can see only who is an admin.</li>
              <li>Uses: Client side-React app, react bootstrap, firebase for authentication, react hook form, react router dom v5, font awesome cdn.  Server side- express, mongodb, node.js.</li>
            </ul>
            <HashLink to="/projects#comfort-car-palace" className="btn btn-primary fw-bold">Details</HashLink>
          </Col>
        </Row>

        <Row>
          <Col lg={5} className=" d-flex align-items-center project-view">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/portfolio/projects/tour-sm.png" className="w-100 project-img" alt="" />
          </Col>
          <Col lg={7} className="project-short-detail py-5">
            <h3>Classic Tourism Park</h3>
            <a href="https://classic-tourism-park-6ab7e.web.app/" target="_blank" rel="noreferrer" style={{textDecoration:"none",fontWeight:"700",fontSize:"18px"}}>Go To Live Website</a>
            <h5>It is a tourism & travel website, at a glance about it</h5>
            <ul>
              <li>Order buttons are private.</li>
              <li>After logged in a user can see some options Add Service, Manage Services, Manage Orders & My orders.</li>
              <li>Uses: Client side-React app, react bootstrap, firebase for authentication, react hook form, react router dom v5, font awesome cdn.  Server side- express, mongodb, node.js.</li>
            </ul>
            <HashLink to="/projects#classic-tourism-park" className="btn btn-primary fw-bold">Details</HashLink>
          </Col>
        </Row>

        <Row>
          <Col lg={5} className=" d-flex align-items-center project-view">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/portfolio/projects/health-sm.png" className="w-100 project-img" alt="" />
          </Col>
          <Col lg={7} className="project-short-detail py-5">
            <h3>Decent Healthcare</h3>
            <a href="https://decent-healthcare2.web.app/" target="_blank" rel="noreferrer" style={{textDecoration:"none",fontWeight:"700",fontSize:"18px"}}>Go To Live Website</a>
            <h5>It is healthcare website, at a glance about it</h5>
            <ul>
              <li>Details buttons of services part in home page are private, if one user logged in then he/she can visit.</li>
              <li>After logged in a user can see his/her name on the top navigation</li>
              <li>Uses: React app, react bootstrap, react router dom v5, font awesome cdn</li>
            </ul>
            <HashLink to="/projects#decent-healthcare" className="btn btn-primary fw-bold">Details</HashLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HomePageProjects; 