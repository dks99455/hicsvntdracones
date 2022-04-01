import React from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';

const Navigation = (props) => {

  return(
    <>
      <Navbar collapseOnSelect fixed='top' expand='sm' bg='dark' variant='dark'>
        <Container>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='reponsive-navbar-nav' >
            <Nav>
              <Nav.Link onClick={() => {
                props.newPage('main')
              }}>Hic Svnt Dracones</Nav.Link>
              <Nav.Link onClick={() => {props.newPage('checkdestination')}}>Check Destination</Nav.Link>
              <NavDropdown title="Resources">
                <NavDropdown.Item onClick={() => {props.newPage('creaturelookup')}}>What did I see?</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {props.newPage('reportactivity')}}>I want to report what I saw!</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {props.newPage('safehavens')}}>Safe Havens</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;