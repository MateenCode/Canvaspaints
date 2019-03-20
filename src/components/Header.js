import React, { Component } from "react";
import { Collapse, Navbar } from "reactstrap";
import { NavbarBrand, Nav, NavItem, NavLink } from "reactstrap";

import Logo from "../assets/icon/logo.svg";
import Help from "../assets/icon/help.svg";
import Cart from "../assets/icon/cart.svg";
import Bars from "../assets/icon/bars.svg";
import "../css/Header.scss";

export default class Header extends Component {
  state = {
    collapsed: true
  };

  toggleNavbar = () => {
    this.setState(state => ({
      collapsed: !state.collapsed
    }));
  };

  render() {
    return (
      <div className="header">
        <Navbar light expand="md">
          <span>
            <span onClick={this.toggleNavbar}>
              <img src={Bars} alt="n/a" className="logo_svg mr-5" />
            </span>
            <img src={Logo} alt="n/a" className="logo_svg mr-2" />
          </span>
          <Collapse isOpen={!this.state.collapsed} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink href="">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">Contact</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="">About</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
          <NavbarBrand>
            <img src={Help} alt="n/a" className="icon_svg mr-2" />
            <img src={Cart} alt="n/a" className="icon_svg" />
          </NavbarBrand>
        </Navbar>
        <div className="banner">
          <span className="text">87% Off Canvas Prints! Click For Details</span>
        </div>
      </div>
    );
  }
}
