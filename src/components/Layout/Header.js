import React from 'react';
import {Navbar, Container, NavDropdown, Nav, Form, FormControl, Button, Image} from 'react-bootstrap';
import { FontIcon } from '@react-md/icon';
import '../../styles/_header.scss'; 

const Header = () => {
  return (
    <Navbar className="nav-background" expand="lg">
        <Container >
            <Navbar.Brand href="#home">LOGO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Form className="d-flex">
            <FormControl
                type="search"
                placeholder="Search"
                className="search-bar"
                aria-label="Search"
            />
                <Button className="btn-search" style={{padding:"0"}}><FontIcon className="nav-icon">search</FontIcon></Button>
            </Form>
            <Nav className="me-auto">
                <div className="grid-navbar">
                    <FontIcon className="nav-icon">home</FontIcon>
                    <Nav.Link href="/home" className="navbar-menu">
                        Home
                    </Nav.Link>
                </div>
                <div className="grid-navbar">
                    <FontIcon className="nav-icon">settings</FontIcon>
                    <Nav.Link href="/setting" className="navbar-menu">
                        Setting
                    </Nav.Link>
                </div>
                <div className="grid-role">
                    <Image id="photo-profile" src="https://vetstreet.brightspotcdn.com/dims4/default/ed74abe/2147483647/thumbnail/645x380/quality/90/?url=https%3A%2F%2Fvetstreet-brightspot.s3.amazonaws.com%2F6c%2Fc9%2F03f60ba14dc1bfeddce2ff9c064c%2Fgolden-retriever-AP-0YXM8S-645sm8513.jpg" roundedCircle />
                    <NavDropdown title="Role" id="basic-nav-dropdown">
                        <NavDropdown.Item href="/viewprofile" style={{padding:"0"}}>
                            <div className="grid-dropdownitem">
                                <FontIcon className="icon-dropdown">person</FontIcon>
                                View Profile
                            </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/editprofile" style={{padding:"0"}}>
                            <div className="grid-dropdownitem">
                                <FontIcon className="icon-dropdown">edit</FontIcon>
                                Edit Profile
                            </div>
                        </NavDropdown.Item>
                        <NavDropdown.Item href="/" style={{padding:"0"}}>
                            <div className="grid-dropdownitem">
                                <FontIcon className="icon-dropdown">logout</FontIcon>
                                Logout
                            </div>
                        </NavDropdown.Item>
                    </NavDropdown>
                </div>
            </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  );
};

export default Header;
