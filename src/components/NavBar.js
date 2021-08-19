import React, { useState, Component } from "react";
import { connect } from "react-redux";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";
import { logUserOut } from "../actions";

const NavBarComponent = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggleButton = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const renderLoginOrLogout = () => {
    const { isAuth, logUserOut, profile } = props;
    console.log(profile);
    if (isAuth) {
      return (
        <ButtonDropdown isOpen={dropdownOpen} toggle={toggleButton}>
          <DropdownToggle caret color="primary" size="sm">
            Welcome,{profile.name}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => logUserOut()}>Logout</DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      );
    }
    return (
      <NavItem>
        <NavLink href="/Login">Login</NavLink>
      </NavItem>
    );
  };

  return (
    <div>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand href="/">MERN Expense</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            {renderLoginOrLogout()}
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};
const mapStateToProps = ({ auth }) => {
  return {
    isAuth: auth.isAuth,
    profile: auth.profile,
  };
};

const Navigation = connect(mapStateToProps, { logUserOut })(NavBarComponent);
export default Navigation;
