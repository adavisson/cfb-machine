import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar sticky="top" expand="lg">
      <Navbar.Brand href="/">CFB Machine</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/match-history">Match History</Nav.Link>
          <Nav.Link href="/team-stats">Team Stats</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
        </Nav>
        <Nav inline>
          <Nav.Link href="https://andydavisson.com">Back to andydavisson.com</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
 
export default NavBar;