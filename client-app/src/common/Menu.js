import React from "react";
import { Navbar, Nav, Button } from "react-bootstrap";

import { Link, withRouter } from "react-router-dom";
import { isAuthenticated, signout } from "../auth/helper";
const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
      <Navbar.Brand href="/">PeopleConnect</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav>
          <Button className="text-white mr-2" variant="info">
            <Link className="text-white py-2" to="/">
              Home
            </Link>
          </Button>
          <Button className="text-white mr-2" variant="info">
            <Link className="text-white py-2" to="/login">
              Contributer
            </Link>
          </Button>
          {isAuthenticated() && (
            <Button className="text-white mr-2" variant="success">
              <Link className="text-white py-2" to="/uploaddetails">
                UploadDetails
              </Link>
            </Button>
          )}
        </Nav>
        <Nav>

          {isAuthenticated() && (
            <Button className="text-white mr-2" variant="danger">
            <Link className="text-white py-2" to="/uploaddetails">
                SignOut
              </Link>
            </Button>
          )}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default withRouter(Menu);
