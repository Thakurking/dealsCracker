import React, { useState } from "react";
import axios from "axios";

import "bootstrap/dist/css/bootstrap.min.css";
import { Col, Container, Row, Button } from "react-bootstrap";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const postSignupRequest = () => {
    console.log(email, password, confirmPassword);
    axios
      .post("http://localhost:5050/signup", {
        email,
        password,
        confirmPassword,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Container>
        <Row className="row">
          <Col className="col-6">
            <div
              className=""
              style={{
                flex: "1",
                background: "f6f6f6",
                boxSizing: "border-box",
                display: "block",
              }}
            >
              <div
                className=""
                style={{
                  maxWidth: "650px",
                  flexDirection: "row",
                  boxSizing: "border-box",
                  background: "f6f6f6",
                  marginTop: "75px",
                }}
              >
                {/* <Row className="row"> */}
                <div
                  style={{
                    paddingBottom: "10px",
                    display: "block",
                    boxSizing: "border-box",
                  }}
                >
                  <img
                    id="logo_tracxn"
                    src="https://cdn.tracxn.com/images/static/tracxn-logo-full-100x22.svg"
                    className="img-responsive"
                    alt="DealsCracker"
                    style={{ height: "30px" }}
                  />
                </div>
                {/* </Row> */}
                <h3
                  className=""
                  style={{
                    marginTop: "25px",
                    marginBottom: "20px",
                    fontSize: "24px",
                  }}
                >
                  Join over 1000 Venture Funds and Corporates who leverage
                  Tracxn
                </h3>
                <div
                  style={{
                    marginBottom: "50px",
                    marginTop: "20px",
                    boxSizing: "border-box",
                    display: "block",
                  }}
                >
                  <div
                    className=""
                    style={{
                      fontSize: "16px",
                      position: "relative",
                      paddingLeft: "10px",
                      marginBottom: "20px",
                      boxSizing: "border-box",
                      display: "block",
                    }}
                  >
                    Scout interesting companies across your areas of interest
                  </div>
                  <div
                    className=""
                    style={{
                      fontSize: "16px",
                      position: "relative",
                      paddingLeft: "10px",
                      marginBottom: "20px",
                      boxSizing: "border-box",
                      display: "block",
                    }}
                  >
                    Regular updates on interesting sectors and business models
                  </div>
                  <div
                    className=""
                    style={{
                      fontSize: "16px",
                      position: "relative",
                      paddingLeft: "10px",
                      boxSizing: "border-box",
                      display: "block",
                    }}
                  >
                    Custom deal diligence support
                  </div>
                </div>
                <span className="" style={{ fontSize: "14px" }}>
                  OUR CUSTOMERS
                </span>
                <div
                  className=""
                  style={{
                    flexWrap: "wrap",
                    display: "flex",
                    flexDirection: "row",
                    boxSizing: "border-box",
                    color: "#293348",
                    fontSize: "14px",
                    lineHeight: "1.42857143",
                  }}
                >
                  <div
                    className=""
                    style={{
                      width: "135px",
                      height: "65px",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "row",
                      borderColor: "#e6e6e6",
                      border: "1px solid #bdbdbd",
                      marginLeft: "25px",
                      marginTop: "20px",
                      boxSizing: "border-box",
                      fontSize: "14px",
                      lineHeight: "1.42857143",
                    }}
                  >
                    <img
                      src="https://i.tracxn.com/tracxn-trustedby-logos/c2eac795672f2f3e9488f0412dc0cdb3_92e8864f-57bc-4f23-814f-0b12a71b5e82?height=40&amp;width=100"
                      alt="Andreessen Horowitz"
                      style={{
                        borderStyle: "none",
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                        fontSize: "14px",
                        lineHeight: "1.42857143",
                        maxHeight: "40px",
                        maxWidth: "100px",
                        filter: "grayscale(1)",
                      }}
                    ></img>
                  </div>

                  <div
                    className=""
                    style={{
                      width: "135px",
                      height: "65px",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "row",
                      borderColor: "#e6e6e6",
                      border: "1px solid #bdbdbd",
                      marginLeft: "25px",
                      marginTop: "20px",
                      boxSizing: "border-box",
                      fontSize: "14px",
                      lineHeight: "1.42857143",
                    }}
                  >
                    <img
                      src="https://i.tracxn.com/tracxn-trustedby-logos/Social_Capital_21aedd4f-7118-4079-a071-3b754ca2208a.png?height=40&width=100"
                      alt="Andreessen Horowitz"
                      style={{
                        borderStyle: "none",
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                        fontSize: "14px",
                        lineHeight: "1.42857143",
                        maxHeight: "40px",
                        maxWidth: "100px",
                        filter: "grayscale(1)",
                      }}
                    ></img>
                  </div>
                  <div
                    className=""
                    style={{
                      width: "135px",
                      height: "65px",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "row",
                      borderColor: "#e6e6e6",
                      border: "1px solid #bdbdbd",
                      marginLeft: "25px",
                      marginTop: "20px",
                      boxSizing: "border-box",
                      fontSize: "14px",
                      lineHeight: "1.42857143",
                    }}
                  >
                    <img
                      src="https://i.tracxn.com/tracxn-trustedby-logos/1554352519735_511e2e99-c60f-475a-b7aa-4e48513f90f3.png?height=40&width=100"
                      alt="Andreessen Horowitz"
                      style={{
                        borderStyle: "none",
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                        fontSize: "14px",
                        lineHeight: "1.42857143",
                        maxHeight: "40px",
                        maxWidth: "100px",
                        filter: "grayscale(1)",
                      }}
                    ></img>
                  </div>
                  <div
                    className=""
                    style={{
                      width: "135px",
                      height: "65px",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "row",
                      borderColor: "#e6e6e6",
                      border: "1px solid #bdbdbd",
                      marginLeft: "25px",
                      marginTop: "20px",
                      boxSizing: "border-box",
                      fontSize: "14px",
                      lineHeight: "1.42857143",
                    }}
                  >
                    <img
                      src="https://i.tracxn.com/tracxn-trustedby-logos/1554354159098_16d25f40-2e39-4ec6-b5d1-c0b1a8b0942c.png?height=40&width=100"
                      alt="Andreessen Horowitz"
                      style={{
                        borderStyle: "none",
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                        fontSize: "14px",
                        lineHeight: "1.42857143",
                        maxHeight: "40px",
                        maxWidth: "100px",
                        filter: "grayscale(1)",
                      }}
                    ></img>
                  </div>
                  <div
                    className=""
                    style={{
                      width: "135px",
                      height: "65px",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "row",
                      borderColor: "#e6e6e6",
                      border: "1px solid #bdbdbd",
                      marginLeft: "25px",
                      marginTop: "20px",
                      boxSizing: "border-box",
                      fontSize: "14px",
                      lineHeight: "1.42857143",
                    }}
                  >
                    <img
                      src="https://i.tracxn.com/tracxn-trustedby-logos/steadview_owler_20190703_185204_original_e3616a18-d65c-45b4-b086-66e73da1307d.png?height=40&width=100"
                      alt="Andreessen Horowitz"
                      style={{
                        borderStyle: "none",
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                        fontSize: "14px",
                        lineHeight: "1.42857143",
                        maxHeight: "40px",
                        maxWidth: "100px",
                        filter: "grayscale(1)",
                      }}
                    ></img>
                  </div>
                  <div
                    className=""
                    style={{
                      width: "135px",
                      height: "65px",
                      alignItems: "center",
                      justifyContent: "center",
                      display: "flex",
                      flexDirection: "row",
                      borderColor: "#e6e6e6",
                      border: "1px solid #bdbdbd",
                      marginLeft: "25px",
                      marginTop: "20px",
                      boxSizing: "border-box",
                      fontSize: "14px",
                      lineHeight: "1.42857143",
                    }}
                  >
                    <img
                      src="https://i.tracxn.com/tracxn-trustedby-logos/GGV_9ad48847-cf3d-473e-888f-cf00674f6a3b.png?height=40&width=100"
                      alt="Andreessen Horowitz"
                      style={{
                        borderStyle: "none",
                        verticalAlign: "middle",
                        boxSizing: "border-box",
                        fontSize: "14px",
                        lineHeight: "1.42857143",
                        maxHeight: "40px",
                        maxWidth: "100px",
                        filter: "grayscale(1)",
                      }}
                    ></img>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <div
            className=""
            style={{
              overflowY: "auto",
              flex: "1",
              display: "flex",
              flexDirection: "column",
              boxSizing: "border-box",
            }}
          >
            <div
              className=""
              style={{
                padding: "40px 50px 50px",
                maxWidth: "650px",
                boxSizing: "border-box",
                display: "block",
              }}
            >
              <div
                className=""
                style={{
                  transition: "all 250ms ease-in",
                  opacity: "1",
                  transform: "translateY(0px)",
                  boxSizing: "border-box",
                  display: "block",
                }}
              >
                <div
                  className=""
                  style={{ boxSizing: "border-box", display: "block" }}
                >
                  <div
                    className=""
                    style={{
                      top: "0",
                      width: "100%",
                      alignItems: "center",
                      position: "absolute",
                      display: "flex",
                      flexDirection: "column",
                      boxSizing: "border-box",
                    }}
                  >
                    <div
                      className=""
                      style={{ width: "100%", display: "block" }}
                    >
                      <div
                        className=""
                        style={{ boxSizing: "border-box", display: "block" }}
                      >
                        <div
                          className=""
                          style={{
                            maxWidth: "360px",
                            textAlign: "center",
                            margin: "0 auto",
                            boxSizing: "border-box",
                            display: "block",
                          }}
                        >
                          <h4
                            style={{
                              fontWeight: "500",
                              marginTop: "20px",
                              marginBottom: "3px",
                              fontSize: "18px",
                              fontFamily: "inherit",
                              boxSizing: "border-box",
                              display: "block",
                              textAlign: "center",
                            }}
                          >
                            Create an Account for Free
                          </h4>
                          <div
                            className=""
                            style={{
                              fontSize: "13px",
                              paddingTop: "3px",
                              marginBottom: "15px",
                              boxSizing: "border-box",
                              display: "block",
                              color: "#293348",
                              textAlign: "center",
                            }}
                          >
                            No credit card required
                          </div>
                          <form
                            className=""
                            style={{
                              boxSizing: "border-box",
                              display: "block",
                              marginTop: "0em",
                              textAlign: "center",
                            }}
                          >
                            <div
                              className=""
                              style={{
                                textAlign: "center",
                                boxSizing: "border-box",
                                display: "block",
                              }}
                            >
                              <label
                                className=""
                                style={{
                                  paddingRight: "5px",
                                  fontSize: "14px",
                                  wordBreak: "break-all",
                                  textTransform: "capitalize",
                                  marginTop: "10px",
                                  marginBottom: "10px",
                                  display: "block",
                                  maxWidth: "100%",
                                  cursor: "default",
                                  textAlign: "left",
                                }}
                              >
                                <span
                                  style={{
                                    boxSizing: "border-box",
                                    textAlign: "left",
                                    fontSize: "14px",
                                    wordBreak: "break-all",
                                    textTransform: "capitalize",
                                    fontWeight: "400",
                                    cursor: "default",
                                  }}
                                >
                                  Business Email Address
                                </span>
                              </label>
                            </div>
                            <input
                              type="email"
                              id="email"
                              placeholder="john@company.com"
                              name="email"
                              value={email}
                              onChange={(e) => setEmail(e.target.value)}
                              style={{
                                padding: "9px 7px",
                                fontSize: "14px",
                                display: "inline-block",
                                lineHeight: "1.2",
                                color: "#293348",
                                backgroundColor: "fff",
                                backgroundImage: "none",
                                backgroundClip: "padding-box",
                                border: "1px solid #bdbdbd",
                                borderRadius: "4px",
                                width: "100%",
                                textAlign: "left",
                                marginBottom: "20px",
                                overflow: "visible",
                              }}
                            />
                            <input
                              type="password"
                              id="password"
                              name="password"
                              value={password}
                              onChange={(e) => setPassword(e.target.value)}
                              style={{
                                padding: "9px 7px",
                                fontSize: "14px",
                                display: "inline-block",
                                lineHeight: "1.2",
                                color: "#293348",
                                backgroundColor: "fff",
                                backgroundImage: "none",
                                backgroundClip: "padding-box",
                                border: "1px solid #bdbdbd",
                                borderRadius: "4px",
                                width: "100%",
                                textAlign: "left",
                                marginBottom: "20px",
                                overflow: "visible",
                              }}
                            />
                            <input
                              type="Password"
                              id="confirmPassword"
                              name="confirmPassword"
                              value={confirmPassword}
                              onChange={(e) =>
                                setConfirmPassword(e.target.value)
                              }
                              style={{
                                padding: "9px 7px",
                                fontSize: "14px",
                                display: "inline-block",
                                lineHeight: "1.2",
                                color: "#293348",
                                backgroundColor: "fff",
                                backgroundImage: "none",
                                backgroundClip: "padding-box",
                                border: "1px solid #bdbdbd",
                                borderRadius: "4px",
                                width: "100%",
                                textAlign: "left",
                                marginBottom: "20px",
                                overflow: "visible",
                              }}
                            />
                            <Button
                              onClick={() => {
                                postSignupRequest();
                              }}
                              style={{
                                padding: "10px 15px",
                                minWidth: "90px",
                                fontSize: "14px",
                                fontFamily: "inherit",
                                transition:
                                  "all .1s cubic-bezier(.65,.045,.405,1)",
                                background: "#333",
                                fontWeight: "700",
                                cursor: "pointer",
                                textAlign: "center",
                                whiteSpace: "nowrap",
                                overflowX: "visible",
                                overflowY: "visible",
                                lineHeight: "1",
                                border: "1px solid #333",
                                WebkitAppearance: "button",
                                width: "100%",
                                textTransform: "uppercase",
                                borderRadius: "2px",
                                color: "#fff",
                                margin: "0",
                                boxSizing: "border-box",
                              }}
                            >
                              SEND ACTIVATION LINK
                            </Button>
                          </form>
                          <p
                            style={{
                              paddingBottom: "15px",
                              margin: "0 0 10px",
                              boxSizing: "border-box",
                              display: "block",
                              marginBlockStart: "1em",
                              marginBlockEnd: "1em",
                              marginInlineStart: "0px",
                              marginInlineEnd: "0px",
                              textAlign: "center",
                            }}
                          >
                            By Signing Up, you agree to Tracxn's
                            <a
                              style={{
                                color: "#337ab7",
                                textDecoration: "none",
                                boxSizing: "border-box",
                                cursor: "pointer",
                                textAlign: "center",
                              }}
                            >
                              Terms of Use
                            </a>
                            <span> & </span>
                            <a
                              style={{
                                color: "#337ab7",
                                textDecoration: "none",
                                boxSizing: "border-box",
                                cursor: "pointer",
                                textAlign: "center",
                              }}
                            >
                              Privacy Policy
                            </a>
                          </p>
                          <p>
                            Already have an account?{" "}
                            <a href="/login">Login now</a>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
}
