import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown, Button } from "react-bootstrap";

export default function Dashboard() {
  return (
    <>
      <Navbar
        bg="white"
        sticky="top"
        expand="lg"
        style={{
          zIndex: "1030",
          top: "0",
          width: "100%",
          boxSizing: "border-box",
          minHeight: "50px",
        }}
      >
        <Navbar.Brand href="#">
          <img
            id="logo_tracxn"
            src="https://cdn.tracxn.com/images/static/tracxn-logo-full-100x22.svg"
            class="img-responsive"
            alt="Tracxn.com"
            width="100"
            height="22"
            style={{ aspectRatio: "100/2" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="">
            <NavDropdown
              title="Products"
              id="basic-nav-dropdown"
              style={{
                minWidth: "112px",
                cursor: "pointer",
                boxSizing: "border-box",
                display: "block",
                color: "#293348",
              }}
            >
              <NavDropdown.Item href="#action/3.1">API</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title="Customers"
              id="basic-nav-dropdown"
              style={{
                minWidth: "112px",
                cursor: "pointer",
                boxSizing: "border-box",
                display: "block",
                color: "#293348",
              }}
            >
              <NavDropdown.Item href="#action/3.1">API</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Our Investors</Nav.Link>
            <Nav.Link href="#home">Pricing</Nav.Link>
            <Nav.Link href="#home">Contact Us</Nav.Link>
            <Nav.Link href="#home">
              <Button
                style={{
                  background: "#f9a11f",
                  border: "none",
                  boxSizing: "border-box",
                  color: "#fff",
                  borderRadius: "2px",
                  paddingTop: "5px",
                  paddingBottom: "5px",
                  paddingLeft: "10px",
                  paddingRight: "10px",
                  display: "block",
                }}
              >
                Request Demo
              </Button>
            </Nav.Link>
            <Nav.Link href="#home">Sign Up</Nav.Link>
            <Nav.Link href="#home">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
