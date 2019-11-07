import React, { Component } from 'react';
import './App.css';
import {OurCoffee} from './pages/OurCoffee';
import {ContactUs} from './pages/ContactUs';
import {Events} from './pages/Events';
import {FindUs} from './pages/FindUs';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap'

class App extends Component {
  render() {
    return (
      <div>

        <React.Fragment>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
              <img
                alt=""
                src="/coffeehouselogo.png"
                width="30"
                height="30"
                className="d-inline-block align-top"
              />
              {' Some Coffee Shop'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/">OUR COFFEE</Nav.Link>
                <Nav.Link href="/events">EVENTS</Nav.Link>
                <Nav.Link href="/find-us">FIND US</Nav.Link>
                <Nav.Link href="/contact-us">CONTACT US</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </React.Fragment>

        <React.Fragment>
          <BrowserRouter>
            <Switch>
              <Route exact path="/" component={OurCoffee}/>
              <Route exact path="/events" component={Events}/>
              <Route exact path="/find-us" component={FindUs}/>
              <Route exact path="/contact-us" component={ContactUs}/>
            </Switch>
          </BrowserRouter>
        </React.Fragment>
        
      </div>
    );
  }
}

export default App;