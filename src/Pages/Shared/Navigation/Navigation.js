import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const activeStyle = {
    backgroundColor: "transparent",
    color: "#fff",
    border:"3px solid #fff"
  }


  return (
    <div>
      {/* navigation part start */}  
      <Navbar expand="lg" className="main-navigation w-100">
        <Container className="main-navigation-container">
          <Navbar.Brand href="/home" className="brand-logo"><h4 className="text-white fw-bold">Anirban-Portfolio</h4></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" className="brand-bg mx-auto mb-3" />
              <Navbar.Collapse id="basic-navbar-nav">
              
                <Nav className="ms-auto">
                  <NavLink activeStyle={activeStyle} className="navbar-link" to="/home">Home</NavLink>
                  <NavLink activeStyle={activeStyle} className="navbar-link" to="/about">About</NavLink>
                  <NavLink activeStyle={activeStyle} className="navbar-link" to="/projects">Projects</NavLink>
                  <NavLink activeStyle={activeStyle} className="navbar-link" to="/services">Services</NavLink>
                  <NavLink activeStyle={activeStyle} className="navbar-link" to="/contact">Contact</NavLink>
                
              </Nav>
          </Navbar.Collapse>
        </Container>         
      </Navbar>
    </div>
  );
};

export default Navigation;