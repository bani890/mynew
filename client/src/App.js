import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import MyTable from './components/customers';
import Linestat from './components/linestat';
import MainComp from './components/maincomp';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Aditya Pothula</h1>
        </header>
        <Router>
          <div>
          <Navbar color="dark" light expand="md">
            <NavbarBrand href="/">Aditya Pothula</NavbarBrand>
              <Nav className="ml-auto" navbar>
                <NavItem >
                <NavLink><Link to="/">Home</Link></NavLink>
                </NavItem>
                <NavItem>
                <NavLink><Link to="/tables">Numerical Data</Link></NavLink>
                </NavItem>
                <NavItem>
                <NavLink><Link to="/graphs">Graphical Data</Link></NavLink>
                </NavItem>
              </Nav>
          </Navbar>
            <Route exact path="/" component={MainComp} />
            <Route path="/tables" component={MyTable} />
            <Route path="/graphs" component={Linestat} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
