import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';

import { About } from '../pages/About';
import { Locations } from '../pages/Locations';
import { Contact } from '../pages/Contact';

import { Navbar, NavItem, NavDropdown, MenuItem, Nav, Form, FormControl, Button } from 'react-bootstrap';

export const BootstrapNavbar = () => {
    return (
     <div>
       <Router>
        <Navbar bg='light' expand='lg'>
          <Navbar.Brand id='nav-brand' href="#home">C | H</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className='mr-auto'>
              <Link to="/" className='nav-links' href="#home">Home</Link>
              <Link to="/about" className='nav-links' href="#link">About</Link>
              <Link to="/locations" className='nav-links' href="#link">Locations</Link>
              <Link to="/contact" className='nav-links' href="#link">Contact Us</Link>
            </Nav>
            <Form inline>
              <FormControl type="text" placeholder="Search" className="mr-sm-2" />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route path='/about'>
            <About />
          </Route>
          <Route path='/locations'>
            <Locations />
          </Route>
          <Route path='/contact'>
            <Contact />
          </Route>
        </Switch>
      </Router>
      </div>
    );
}
