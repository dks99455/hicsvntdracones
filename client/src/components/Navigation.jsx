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
              <Nav.Link onClick={() => {console.log('YEAH')}}>Hic Svnt Dracones</Nav.Link>
              <Nav.Link onClick={() => {console.log('YEAH')}}>Location</Nav.Link>
              <NavDropdown title="What's nearby?">
                <NavDropdown.Item onClick={() => {console.log('YEAH')}}>Creatures</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {console.log('YEAH')}}>Spirits</NavDropdown.Item>
                <NavDropdown.Item onClick={() => {console.log('YEAH')}}>Safe Havens</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;