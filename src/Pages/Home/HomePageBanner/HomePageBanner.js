import axios from 'axios';
import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './HomePageBanner.css';

const HomePageBanner = () => {

  const download = () => {
    axios ({
      url: 'https://raw.githubusercontent.com/AnirbanAnu2000/img-storage/main/anirban-front-end-web-developer.pdf',
      method: 'GET',
      responseType: 'blob',
    })
    .then((response) => {
      const url = window.URL.createObjectURL(new Blob([response.data]));
      const link = document.createElement('a');
      link.href = url;
      link.setAttribute('download', 'anirban-front-end-web-developer.pdf');
      document.body.appendChild(link);
      link.click();
    })
  }

  return (
    <div className="home-page-banner">
      <div className="home-page-banner-overlay d-flex align-items-center">
        <Container>
          <Row className="">
            <Col lg={12} className="">  
              <div className="text-center">
                <h1 className="banner-heading text-light mb-4">Hello I am Anirban Barua</h1>
                <h3 className="text-white mb-5">A Professional Web Developer</h3>
                <Button onClick={download} variant="primary" size="lg">Download Resume <i class="fas fa-download"></i></Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default HomePageBanner;