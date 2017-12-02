import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { routes } from '../utils/routes';
import CompNavigation from './CompNavigation';

// import {
//   Navbar,
//   Nav,
//   NavItem,
// } from 'react-bootstrap';

const CompHeader = () => (
  <header className="container-fluid">
    <div className="container">
      <CompNavigation />
    </div> 
  </header>
);

export default CompHeader;

/* eslint-disable */
{/*
  <Navbar collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to="/">RSUC</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    
    <Navbar.Collapse>
      <Nav>
        <NavItem eventKey={1}>
          <Link to="/">Home</Link>
        </NavItem>
        
        <NavItem eventKey={2}>
          <Link to={`/${routes.USERSLISTPAGE}`}>Users</Link>
        </NavItem>
        
        <NavItem eventKey={3}>
          <Link to="/">About</Link>
        </NavItem>
        
        <NavItem eventKey={4}>
          <Link to="/">Contact</Link>
        </NavItem>
        
      </Nav>
      <Nav pullRight>
        <NavItem eventKey={1}>
          <Link to="/">Sign up</Link>
        </NavItem>
        <NavItem eventKey={2}>
          <Link to="/">Log in</Link>
        </NavItem>
        
      </Nav>
    </Navbar.Collapse>
  </Navbar>
*/}