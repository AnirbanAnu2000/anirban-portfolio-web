import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Button, Container, Row, Col } from 'react-bootstrap';
import Navigation from '../../Shared/Navigation/Navigation';
import './Contact.css';
import Footer from '../../Shared/Footer/Footer';

const Contact = () => {

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5q6b9ej', 'template_fkrz5w8', e.target, 'user_9GeXd0sM0oOO8OZd9X2qH')
      .then((result) => {
          console.log(result);
      }, (error) => {
          console.log(error);
      });
      e.target.reset();
  };

  return (
    <div>
      <Navigation></Navigation>
        <div className="contact-part">
          <Container className="border-top border-1 border-primary">
          <h1 className="fw-bold brand-color text-center mt-5 mb-4 contact-heading text-primary" style={{fontSize:"50px"}}>Contact Us</h1>
          <Row className="justify-content-center">
            <Col lg={8} className="pb-5">
              <Form onSubmit={sendEmail}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">Your Name</Form.Label>
                  <Form.Control type="text" placeholder="Your Name" name="name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label className="fw-bold">Contact Number</Form.Label>
                  <Form.Control type="text" placeholder="Your Contact Number" name="phone" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                  <Form.Label className="fw-bold">Your Message</Form.Label>
                  <Form.Control as="textarea" rows={3} placeholder="Message" name="message" />
                </Form.Group>

                <Button variant="primary" className="fw-bold" type="submit">
                  Submit
                </Button>
              </Form>
            </Col>  
          </Row>
        </Container>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Contact;

