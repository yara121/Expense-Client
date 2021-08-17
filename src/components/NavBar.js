import React, { useState, Component } from "react";
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
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

 
 const renderLoginOrLogout = () => {
    return (
      <NavItem>
      <NavLink href="/Login">Login</NavLink>
    </NavItem>
    )
  }

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">MERN Expense</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto"  navbar>
          <NavItem>
      <NavLink href="/Login">Login</NavLink>
    </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
