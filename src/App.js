import React, { Component } from 'react';
import './App.css';
import {Home} from './pages/Home';
import {OurCoffee} from './pages/OurCoffee';
import {ContactUs} from './pages/ContactUs';
import {Events} from './pages/Events';
import {FindUs} from './pages/FindUs';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import {Nav, Navbar} from 'react-bootstrap'
import Image from 'react-bootstrap/Image'


class App extends Component {
  render() {
    return (
      <div>

        <React.Fragment>
          <Navbar bg="light" expand="lg">
            <Navbar.Brand href="/">
              <Image src="/coffeehouselogo.png"
                width="50"
                height="50"
                className="d-inline-block align-top"
                roundedCircle fluid
              />
              {' Some Coffee Shop'}
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                <Nav.Link href="/our-coffee">OUR COFFEE</Nav.Link>
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
              <Route exact path="/" component={Home}/>
              <Route exact path="/our-coffee" component={OurCoffee}/>
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