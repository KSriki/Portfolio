import React from 'react';

  import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap'; 

export default class NavBar extends React.Component {
    
      render() {
        return (
      
            <Navbar color="light" light expand="md" sticky="top" style={{"borderBottom": "1px solid #444"}}>
              <NavbarBrand href="/">Portfolio</NavbarBrand>
            
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/#about">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/#work">Work</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/#contact">Contact</NavLink>
                  </NavItem>
                </Nav>
        
            </Navbar>
 
        );
      }
    }