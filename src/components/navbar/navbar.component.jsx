import React, { Component } from 'react';
import {Navbar, Nav, NavDropdown ,Form, FormControl, Button} from 'react-bootstrap';
import logo from '../../honeyswap-logo.svg';
import './navbar.style.css';
import settings from '../../settings.svg';
import more from '../../square-dots.svg';
import about from '../../ico/info.svg';
import docs from '../../ico/docs.svg';
import code from '../../ico/code.svg';
import help from '../../ico/help.svg';
import analytics from '../../ico/analytics.svg';


export const NavMenu = props => {
        return <div className="navmenu"> 
            {<Navbar expand="lg">
                      <Navbar.Brand href="#home">
                        <img src={logo} className="App-logo" alt="settings" />Honeyswap
                        </Navbar.Brand>
                      <Navbar.Toggle aria-controls="basic-navbar-nav" />
                      <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto"></Nav>
                        
                        <Nav className="">
                          <Nav.Link href="" className="menu-item-1">xDai</Nav.Link>
                          <Nav.Link href="" className="menu-item-2">Connect to a wallet</Nav.Link>
                          <NavDropdown title={<div className="btn-cont"><img className="btn-icon" alt="settings" src={settings}/></div>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                          </NavDropdown>
                          <NavDropdown title={<div className="btn-cont"><img className="btn-icon" alt="more" src={more}/></div>} id="basic-nav-dropdown">
                            <NavDropdown.Item href=""><img src={about}></img>About</NavDropdown.Item>
                            <NavDropdown.Item href=""><img src={about}></img>Farm</NavDropdown.Item>
                            <NavDropdown.Item href=""><img src={docs}></img>Docs</NavDropdown.Item>                            
                            <NavDropdown.Item href=""><img src={code}></img>Code</NavDropdown.Item>
                            <NavDropdown.Item href=""><img src={help}></img>Help</NavDropdown.Item>
                            <NavDropdown.Item href=""><img src={analytics}></img>Analytics</NavDropdown.Item>
                          </NavDropdown>
                        </Nav>
                      </Navbar.Collapse>
                  </Navbar>
        }     
        </div>
        
}

export default NavMenu;