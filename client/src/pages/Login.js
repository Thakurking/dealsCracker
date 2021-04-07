import React from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Col, Container, Row, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <Container>
      <Row className="row content">
        <Col className="d-flex justify-content-around">
          <Card
            style={{
              width: "28rem",
              height: "30rem",
              boxShadow: "0 4px 8px 0 rgba(0,0,0,0.2)",
              marginTop: "10%",
            }}
          >
            <Card.Body>
              <img
                className="rounded-circle w-25 p-8 mx-auto d-block"
                src="https://reactnativecode.com/wp-content/uploads/2017/05/react_thumb_install.png"
                alt="deals cracker"
              />
              <Card.Title className="d-flex justify-content-around">
                <h4S
                  style={{
                    fontFamily: "inherit",
                    color: "inherit",
                    fontSize: "18px",
                    marginTop: "20px",
                    marginBottom: "15px",
                  }}
                >
                  Login to Access Deals Cracker
                </h4S>
              </Card.Title>
              <Form>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Business Email address</Form.Label>
                  <Form.Control type="email" placeholder="john@company.com" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="dark" type="submit" block>
                  Login
                </Button>
              </Form>
              <Card.Text>
                <p
                  style={{
                    marginTop: "25px",
                    marginBottom: "0px",
                    textAlign: "center",
                    color: "#555",
                    fontFamily: "Poppins, sans-serif !important",
                    fontSize: "14px",
                  }}
                >
                  Don't have an account? <Link to="/signup">Sign up</Link>
                </p>
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}
