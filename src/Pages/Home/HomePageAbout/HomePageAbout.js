import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './HomePageAbout.css';

const HomePageAbout = () => {
  return (
    <div>
      <Container className="pt-5 border-bottom border-1 border-primary pb-4">
        <Row>
          <Col lg={6} className="py-5 order-lg-0 order-1">
            <img src="https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/portfolio/about.jpg" alt="About Us" className="w-100 p-3" style={{border:"10px solid #0078a6"}} />
          </Col>
          <Col lg={6} className="d-flex align-items-center order-lg-1 order-0">
            <div className="p-4 home-about-right-content">
              <h2 className="mb-4 text-primary">LET’S INTRODUCE<br /> ABOUT MYSELF</h2>
              <h4 className="brand-color mb-4 fw-bold">Welcome To My Website</h4>
              <p className="mb-5">Hi! I am Anirban Barua, a full stack web developer focused on crafting great web experiences. Designing and Coding have been my passion since the days I started working with computers but I found myself into web developer it's near to one year. I enjoy creating beautifully designed as well as make dynamic that website and functional websites.</p>
              <Button variant="primary" className="fw-bold">Read More <i className="fas fa-angle-right"></i></Button>
            </div>
          </Col>
        </Row>
        </Container>
    </div>
  );
};

export default HomePageAbout;