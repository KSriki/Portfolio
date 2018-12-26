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
          <div>
            <Navbar color="light" light expand="md">
              <NavbarBrand href="/">Portfolio</NavbarBrand>
            
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">About</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Work</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/">Contact</NavLink>
                  </NavItem>
                </Nav>
        
            </Navbar>
          </div>
        );
      }
    }