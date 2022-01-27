import React from 'react';
import { Navbar, Nav, NavItem } from 'reactstrap';
import "../../styles/_footer.scss"

const Footer = () => {
  return (
    <Navbar className="footer-background">
      <Nav navbar className="nav-footer" style={{padding:"0"}}>
        <NavItem>
          Copyright @2021 Make your project documentation better using dokumentasi-in.
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Footer;
