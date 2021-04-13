import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "../../App.css";

export default function body() {
  return (
    <>
      <Container>
        <Row>
          <Col
            className="justify-content-md-center"
            xs
            lg="6"
            style={{
              paddingLeft: "75px",
              padding: "90px 0 50px",
              fontSize: "16px",
              flex: "1",
              color: "#555",
              boxSizing: "border-box",
              display: "block",
            }}
          >
            <h1
              style={{
                fontSize: "30px",
                color: "#293348",
                marginTop: "0",
                marginBottom: "15px",
                margin: ".67em 0",
                fontFamily: "inherit",
                fontWeight: "500",
                lineHeight: "1.1",
                boxSizing: "border-box",
                display: "block",
                marginBlockStart: "0.67em",
                marginBlockEnd: "0.67em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
              }}
            >
              AI + Human-in-the-Loop for Deal Discovery
            </h1>
            <p
              style={{
                marginBottom: "25px",
                margin: "0 0 10px",
                boxSizing: "border-box",
                display: "block",
                marginBlockStart: "1em",
                marginBlockEnd: "1em",
                marginInlineStart: "0px",
                marginInlineEnd: "0px",
                fontSize: "16px",
                color: "#555",
              }}
            >
              Tracking Innovative companies across 350+ Technology Sectors,{" "}
              <br />
              1000+ Emerging Themes, and Dedicated Coverage on 30+ Countries
            </p>
            <div
              style={{
                marginBottom: "20px",
                marginTop: "15px",
                boxSizing: "border-box",
                display: "block",
                fontSize: "16px",
                color: "#555",
              }}
            >
              Designed with precision for
              <ul
                style={{
                  paddingLeft: "17px",
                  marginTop: "10px",
                  marginBottom: "10px",
                  boxSizing: "border-box",
                  display: "block",
                  listStyleType: "disc",
                  marginBlockStart: "1em",
                  marginBlockEnd: "1em",
                  marginInlineStart: "0px",
                  marginInlineEnd: "0px",
                  paddingInlineStart: "40px",
                  fontSize: "16px",
                  color: "#555",
                }}
              >
                <li
                  style={{
                    fontSize: "14px",
                    marginTop: "10px",
                    boxSizing: "border-box",
                    display: "list-item",
                    textAlign: "-webkit-match-parent",
                    listStyleType: "disc",
                    color: "#555",
                  }}
                >
                  Private Market Investors - VC, PE, IB, Incubators, Angel
                  Networks, Family Offices
                </li>
                <li
                  style={{
                    fontSize: "14px",
                    marginTop: "10px",
                    boxSizing: "border-box",
                    display: "list-item",
                    textAlign: "-webkit-match-parent",
                    listStyleType: "disc",
                    color: "#555",
                  }}
                >
                  Large Corporates - M&A, Innovation and Digital Transformation
                  Teams
                </li>
                <li
                  style={{
                    fontSize: "14px",
                    marginTop: "10px",
                    boxSizing: "border-box",
                    display: "list-item",
                    textAlign: "-webkit-match-parent",
                    listStyleType: "disc",
                    color: "#555",
                  }}
                >
                  Government Agencies, Industry Bodies, Universities
                </li>
              </ul>
            </div>
            <a href="/signup">
              <Button
                style={{
                  background: "#feb743",
                  borderColor: "#feb743",
                  color: "#fff",
                  padding: "10px 15px",
                  fontSize: "14px",
                  fontFamily: "inherit",
                  fontWeight: "500",
                  cursor: "pointer",
                  textAlign: "center",
                  whiteSpace: "nowrap",
                  overflowY: "visible",
                  overflowX: "visible",
                  lineHeight: "1",
                  borderRadius: "2px",
                  display: "inline-block",
                  verticalAlign: "baseline",
                  textTransform: "none",
                  margin: "0",
                  boxSizing: "border-box",
                  letterSpacing: "normal",
                  wordSpacing: "normal",
                  textIndent: "0px",
                  textShadow: "none",
                  alignItems: "flex-start",
                  font: "400 13.3333px Arial",
                }}
              >
                Sign Up
              </Button>
            </a>
            <Button
              style={{
                border: "1px solid #feb743",
                color: "#feb743",
                background: "transparent",
                padding: "10px 15px",
                minWidth: "90px",
                fontSize: "14px",
                fontFamily: "inherit",
                fontWeight: "500",
                cursor: "pointer",
                textAlign: "center",
                whiteSpace: "nowrap",
                overflowX: "visible",
                overflowY: "visible",
                lineHeight: "1",
                transition: "all .05s cubic-bezier(.65,.045,.405,1) .02s",
                display: "inline-block",
                borderRadius: "2px",
                verticalAlign: "baseline",
                marginLeft: "15px",
                textTransform: "none",
                margin: "0",
                boxSizing: "border-box",
                letterSpacing: "normal",
                wordSpacing: "normal",
                textIndent: "0px",
                textShadow: "none",
                alignItems: "flex-start",
              }}
            >
              Take a Demo
            </Button>
            <div
              style={{
                fontStyle: "italic",
                fontSize: "12px",
                fontWeight: "400",
                marginTop: "10px",
                marginBottom: "10px",
                boxSizing: "border-box",
                display: "block",
              }}
            >
              No credit card required
            </div>
          </Col>
          <Col
            className="justify-content-md-center"
            xs
            lg="6"
            style={{
              paddingLeft: "75px",
              padding: "90px 0 50px",
              fontSize: "16px",
              flex: "1",
              color: "#555",
              boxSizing: "border-box",
              display: "block",
            }}
          >
            <div
              style={{
                paddingRight: "75px",
                justifyContent: "center",
                flex: "1",
                display: "flex",
                flexDirection: "row",
                padding: "10px",
                boxSizing: "border-box",
              }}
            >
              <img
                alt="banner"
                draggable="false"
                class="txn--margin-auto txn--full-width txn--position-relative"
                src="https://cdn.tracxn.com/images/static/homepage/banner-circular.svg"
                loading="lazy"
                width="565"
                height="429"
                style={{
                  aspectRatio: "565 / 429",
                  width: "100%",
                  height: "auto",
                  alignSelf: "center",
                  position: "relative",
                  margin: "0 auto",
                  borderStyle: "none",
                  verticalAlign: "middle",
                  boxSizing: "border-box",
                }}
              />
            </div>
          </Col>
        </Row>
      </Container>
      <p
        style={{
          marginBottom: "25px",
          marginTop: "45px",
          textAlign: "center",
          color: "#555",
          paddingLeft: "10px",
          paddingRight: "10px",
          margin: "0 0 10px",
          boxSizing: "border-box",
          display: "block",
          marginBlockStart: "1em",
          marginBlockEnd: "1em",
          marginInlineStart: "0px",
          marginInlineEnd: "0px",
        }}
      >
        Tracxn is the research partner of choice for over 1000 Investors,
        Corporates and Government bodies across the globe
      </p>
      <div
        style={{
          maxWidth: "1280px",
          flexWrap: "wrap",
          justifyContent: "space-around",
          textAlign: "center",
          display: "flex",
          flexDirection: "row",
          margin: "0 auto",
          boxSizing: "border-box",
        }}
      >
        <img
          class="txn--margin-horizontal-xl"
          src="https://i.tracxn.com/tracxn-trustedby-logos/c2eac795672f2f3e9488f0412dc0cdb3_92e8864f-57bc-4f23-814f-0b12a71b5e82?height=50&amp;width=160"
          alt="Andreessen Horowitz"
          width="160"
          height="50"
          loading="lazy"
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            borderStyle: "none",
            verticalAlign: "middle",
            boxSizing: "border-box",
            aspectRatio: "auto 160 / 50",
            width: "160px",
            height: "50px",
            objectFit: "contain",
            marginBottom: "30px",
            textAlign: "center",
          }}
        />
        <img
          class="txn--margin-horizontal-xl"
          src="https://i.tracxn.com/tracxn-trustedby-logos/Social_Capital_21aedd4f-7118-4079-a071-3b754ca2208a.png?height=50&amp;width=160"
          alt="Social Capital"
          width="160"
          height="50"
          loading="lazy"
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            borderStyle: "none",
            verticalAlign: "middle",
            boxSizing: "border-box",
            aspectRatio: "auto 160 / 50",
            width: "160px",
            height: "50px",
            objectFit: "contain",
            marginBottom: "30px",
            textAlign: "center",
          }}
        />
        <img
          class="txn--margin-horizontal-xl"
          src="https://i.tracxn.com/tracxn-trustedby-logos/1554352519735_511e2e99-c60f-475a-b7aa-4e48513f90f3.png?height=50&amp;width=160"
          alt="Citi"
          width="160"
          height="50"
          loading="lazy"
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            borderStyle: "none",
            verticalAlign: "middle",
            boxSizing: "border-box",
            aspectRatio: "auto 160 / 50",
            width: "160px",
            height: "50px",
            objectFit: "contain",
            marginBottom: "30px",
            textAlign: "center",
          }}
        />
        <img
          class="txn--margin-horizontal-xl"
          src="https://i.tracxn.com/tracxn-trustedby-logos/GGV_9ad48847-cf3d-473e-888f-cf00674f6a3b.png?height=50&amp;width=160"
          alt="GGV Capital"
          width="160"
          height="50"
          loading="lazy"
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            borderStyle: "none",
            verticalAlign: "middle",
            boxSizing: "border-box",
            aspectRatio: "auto 160 / 50",
            width: "160px",
            height: "50px",
            objectFit: "contain",
            marginBottom: "30px",
            textAlign: "center",
          }}
        />
        <img
          class="txn--margin-horizontal-xl"
          src="https://i.tracxn.com/tracxn-trustedby-logos/Google_930d6db0-7fdc-434d-91fd-18da0c1d5de8.jpeg?height=50&amp;width=160"
          alt="Google"
          width="160"
          height="50"
          loading="lazy"
          style={{
            marginLeft: "20px",
            marginRight: "20px",
            borderStyle: "none",
            verticalAlign: "middle",
            boxSizing: "border-box",
            aspectRatio: "auto 160 / 50",
            width: "160px",
            height: "50px",
            objectFit: "contain",
            marginBottom: "30px",
            textAlign: "center",
          }}
        />
      </div>
      <div
        className="second body"
        style={{
          borderTop: "1px solid #eaebef",
          borderBottom: "1px solid #eaebef",
          background: "#fbfbfb",
          boxSizing: "border-box",
          display: "block",
        }}
      >
        <div
          className="second body inside"
          style={{
            width: "980px",
            maxWidth: "100%",
            marginLeft: "auto",
            marginRight: "auto",
            background: "transparent",
            boxShadow: "none",
            padding: "10px",
            borderRadius: "1px",
            boxSizing: "border-box",
            display: "block",
          }}
        >
          <div
            className="our offerings"
            style={{
              marginBottom: "25px",
              marginTop: "40px",
              position: "relative",
              textAlign: "center",
              color: "#555",
              boxSizing: "border-box",
              display: "block",
            }}
          >
            <span
              style={{
                background: "#fbfbfb",
                zIndex: "3",
                fontSize: "28px",
                margin: "0",
                maxWidth: "580px",
                position: "relative",
                display: "inline-block",
                color: "#404040",
                paddingLeft: "20px",
                paddingRight: "20px",
                boxSizing: "border-box",
                textAlign: "center",
              }}
            >
              Our Offerings
            </span>
            <div
              style={{
                flexWrap: "wrap",
                justifyContent: "space-around",
                display: "flex",
                flexDirection: "row",
                boxSizing: "border-box",
              }}
            >
              <Container>
                <Row>
                  <Col
                    className="justify-content-md-center"
                    style={{
                      marginBottom: "30px",
                      boxSizing: "border-box",
                      display: "block",
                    }}
                  >
                    <h4
                      className=""
                      style={{
                        fontSize: "20px",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        color: "#293348",
                        marginBottom: "15px",
                        marginTop: "10px",
                        fontFamily: "inherit",
                        fontWeight: "500",
                        lineHeight: "1.1",
                        boxSizing: "border-box",
                        marginBlockStart: "1.33em",
                        marginBlockEnd: "1.33em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                      }}
                    >
                      Deal Discovery
                    </h4>
                    <ul
                      style={{
                        paddingLeft: "25px",
                        fontSize: "15px",
                        textAlign: "left",
                        color: "#777",
                        marginTop: "0",
                        marginBottom: "10px",
                        boxSizing: "border-box",
                        display: "block",
                        listStyleType: "disc",
                        marginBlockStart: "1em",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                        paddingInlineStart: "40px",
                      }}
                    >
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        350+ Technology Sector
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        30+ Countries
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        1000+ Emerging Themes
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Scout by Team Backgrounds
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Leaderboard of Companies scored on 25+ signals
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Analyst Picks & Proprietary Soonicorn Club
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Instantly Connect with Companies from the Platform
                      </li>
                    </ul>
                  </Col>
                  <Col
                    className="justify-content-md-center"
                    style={{
                      marginBottom: "30px",
                      boxSizing: "border-box",
                      display: "block",
                    }}
                  >
                    <h4
                      className=""
                      style={{
                        fontSize: "20px",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        color: "#293348",
                        marginBottom: "15px",
                        marginTop: "10px",
                        fontFamily: "inherit",
                        fontWeight: "500",
                        lineHeight: "1.1",
                        boxSizing: "border-box",
                        marginBlockStart: "1.33em",
                        marginBlockEnd: "1.33em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                      }}
                    >
                      Data Sets
                    </h4>
                    <ul
                      style={{
                        paddingLeft: "25px",
                        fontSize: "15px",
                        textAlign: "left",
                        color: "#777",
                        marginTop: "0",
                        marginBottom: "10px",
                        boxSizing: "border-box",
                        display: "block",
                        listStyleType: "disc",
                        marginBlockStart: "1em",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                        paddingInlineStart: "40px",
                      }}
                    >
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Funding Rounds
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        30+ Countries
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Mergers and Acquisitions
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        IPOs, Cap Tables, and Financial Statements
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Analyst Picks & Proprietary Soonicorn Club
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Startup Ecosystem Events
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Employee Count & Growth
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Investors - Institutional and Individual
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        People - Founders, Directors, Partners
                      </li>
                    </ul>
                  </Col>
                  <Col
                    className="justify-content-md-center"
                    style={{
                      marginBottom: "30px",
                      boxSizing: "border-box",
                      display: "block",
                    }}
                  >
                    <h4
                      className=""
                      style={{
                        fontSize: "20px",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        color: "#293348",
                        marginBottom: "15px",
                        marginTop: "10px",
                        fontFamily: "inherit",
                        fontWeight: "500",
                        lineHeight: "1.1",
                        boxSizing: "border-box",
                        marginBlockStart: "1.33em",
                        marginBlockEnd: "1.33em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                      }}
                    >
                      Productivity Tools
                    </h4>
                    <ul
                      style={{
                        paddingLeft: "25px",
                        fontSize: "15px",
                        textAlign: "left",
                        color: "#777",
                        marginTop: "0",
                        marginBottom: "10px",
                        boxSizing: "border-box",
                        display: "block",
                        listStyleType: "disc",
                        marginBlockStart: "1em",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                        paddingInlineStart: "40px",
                      }}
                    >
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Inbuilt CRM Tool
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Custom Dashboard Builder
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Boards for Sourcing, and Tracking Companies
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Portfolio Management Board
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        API Support
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Browser Extensions for Chrome and Firefox
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Saved Searches & Alerts
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Export Tools
                      </li>
                    </ul>
                  </Col>
                </Row>
                <Row>
                  <Col
                    className="justify-content-md-center"
                    style={{
                      marginBottom: "30px",
                      boxSizing: "border-box",
                      display: "block",
                    }}
                  >
                    <h4
                      className=""
                      style={{
                        fontSize: "20px",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        color: "#293348",
                        marginBottom: "15px",
                        marginTop: "10px",
                        fontFamily: "inherit",
                        fontWeight: "500",
                        lineHeight: "1.1",
                        boxSizing: "border-box",
                        marginBlockStart: "1.33em",
                        marginBlockEnd: "1.33em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                      }}
                    >
                      In-depth Reports
                    </h4>
                    <ul
                      style={{
                        paddingLeft: "25px",
                        fontSize: "15px",
                        textAlign: "left",
                        color: "#777",
                        marginTop: "0",
                        marginBottom: "10px",
                        boxSizing: "border-box",
                        display: "block",
                        listStyleType: "disc",
                        marginBlockStart: "1em",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                        paddingInlineStart: "40px",
                      }}
                    >
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        1000+ Reports published every Quarter
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Reports for 350+ Sectors, 1500+ Business Models, and 35+
                        Countries
                      </li>
                    </ul>
                  </Col>
                  <Col
                    className="justify-content-md-center"
                    style={{
                      marginBottom: "30px",
                      boxSizing: "border-box",
                      display: "block",
                    }}
                  >
                    <h4
                      className=""
                      style={{
                        fontSize: "20px",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        color: "#293348",
                        marginBottom: "15px",
                        marginTop: "10px",
                        fontFamily: "inherit",
                        fontWeight: "500",
                        lineHeight: "1.1",
                        boxSizing: "border-box",
                        marginBlockStart: "1.33em",
                        marginBlockEnd: "1.33em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                      }}
                    >
                      Competition Analysis
                    </h4>
                    <ul
                      style={{
                        paddingLeft: "25px",
                        fontSize: "15px",
                        textAlign: "left",
                        color: "#777",
                        marginTop: "0",
                        marginBottom: "10px",
                        boxSizing: "border-box",
                        display: "block",
                        listStyleType: "disc",
                        marginBlockStart: "1em",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                        paddingInlineStart: "40px",
                      }}
                    >
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Instant Competitors for 950K+ Companies
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Ranking and Quartile Mapping
                      </li>
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Quick view of Global Equivalents
                      </li>
                    </ul>
                  </Col>
                  <Col
                    className="justify-content-md-center"
                    style={{
                      marginBottom: "30px",
                      boxSizing: "border-box",
                      display: "block",
                    }}
                  >
                    <h4
                      className=""
                      style={{
                        fontSize: "20px",
                        alignItems: "center",
                        display: "flex",
                        flexDirection: "row",
                        color: "#293348",
                        marginBottom: "15px",
                        marginTop: "10px",
                        fontFamily: "inherit",
                        fontWeight: "500",
                        lineHeight: "1.1",
                        boxSizing: "border-box",
                        marginBlockStart: "1.33em",
                        marginBlockEnd: "1.33em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                      }}
                    >
                      Enterprise Grade Support
                    </h4>
                    <ul
                      style={{
                        paddingLeft: "25px",
                        fontSize: "15px",
                        textAlign: "left",
                        color: "#777",
                        marginTop: "0",
                        marginBottom: "10px",
                        boxSizing: "border-box",
                        display: "block",
                        listStyleType: "disc",
                        marginBlockStart: "1em",
                        marginBlockEnd: "1em",
                        marginInlineStart: "0px",
                        marginInlineEnd: "0px",
                        paddingInlineStart: "40px",
                      }}
                    >
                      <li
                        style={{
                          marginBottom: "10px",
                          boxSizing: "border-box",
                          display: "list-item",
                          textAlign: "-webkit-match-parent",
                          fontSize: "15px",
                          color: "#777",
                          listStyleType: "disc",
                        }}
                      >
                        Dedicated support from 2:30AM to 9:30PM GMT
                      </li>
                    </ul>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
      <div
        className="sectors we work"
        style={{
          width: "980px",
          maxWidth: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          boxShadow: "none",
          padding: "10px",
          background: "#fff",
          borderRadius: "1px",
          boxSizing: "border-box",
          display: "block",
        }}
      >
        <div
          style={{
            marginTop: "40px",
            position: "relative",
            textAlign: "center",
            color: "#555",
            boxSizing: "border-box",
            display: "block",
          }}
        >
          <span
            style={{
              zIndex: "3",
              fontSize: "28px",
              margin: "0",
              maxWidth: "580px",
              position: "relative",
              display: "inline-block",
              background: "#fff",
              color: "#404040",
              paddingLeft: "20px",
              paddingRight: "20px",
              boxSizing: "border-box",
              textAlign: "center",
            }}
          >
            Sectors We Track
          </span>
        </div>
        <p
          style={{
            marginBottom: "25px",
            textAlign: "center",
            color: "#555",
            marginTop: "7px",
            paddingLeft: "10px",
            paddingRight: "10px",
            margin: "0 0 10px",
            boxSizing: "border-box",
            display: "block",
            marginBlockStart: "1em",
            marginBlockEnd: "1em",
            marginInlineStart: "0px",
            marginInlineEnd: "0px",
          }}
        >
          Tracking 500+ sectors and counting!
        </p>
        <div
          className="explore sectors"
          style={{
            fontFamily: "Poppins, sans-serif !important",
            marginTop: "40px",
            boxSizing: "border-box",
            display: "block",
          }}
        >
          <h4
            style={{
              fontSize: "14px",
              textAlign: "center",
              color: "#999",
              marginTop: "25px",
              marginBottom: "25px",
              fontFamily: "inherit",
              fontWeight: "500",
              lineHeight: "1.1",
              boxSizing: "border-box",
              display: "block",
              marginBlockStart: "1.33em",
              marginBlockEnd: "1.33em",
              marginInlineStart: "0px",
              marginInlineEnd: "0px",
            }}
          >
            EXPLORE SECTORS
          </h4>
          <div
            style={{
              maxWidth: "850px",
              flexWrap: "wrap",
              justifyContent: "center",
              display: "flex",
              margin: "0 auto",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                width: "170px",
                borderRadius: "40px",
                marginBottom: "30px",
                boxShadow:
                  "0 -1px 4px rgb(0 0 0 / 5%), 0 4px 4px rgb(0 0 0 / 10%)",
                fontSize: "14px",
                textDecoration: "none",
                cursor: "pointer",
                textAlign: "center",
                display: "inline-block",
                background: "#fff",
                color: "#333",
                paddingTop: "15px",
                paddingBottom: "15px",
                marginLeft: "10px",
                marginRight: "10px",
                boxSizing: "border-box",
              }}
            >
              Practice Areas
            </div>
            <div
              style={{
                width: "170px",
                borderRadius: "40px",
                marginBottom: "30px",
                boxShadow:
                  "0 -1px 4px rgb(0 0 0 / 5%), 0 4px 4px rgb(0 0 0 / 10%)",
                fontSize: "14px",
                textDecoration: "none",
                cursor: "pointer",
                textAlign: "center",
                display: "inline-block",
                background: "#fff",
                color: "#333",
                paddingTop: "15px",
                paddingBottom: "15px",
                marginLeft: "10px",
                marginRight: "10px",
                boxSizing: "border-box",
              }}
            >
              Geographies
            </div>
            <div
              style={{
                width: "170px",
                borderRadius: "40px",
                marginBottom: "30px",
                boxShadow:
                  "0 -1px 4px rgb(0 0 0 / 5%), 0 4px 4px rgb(0 0 0 / 10%)",
                fontSize: "14px",
                textDecoration: "none",
                cursor: "pointer",
                textAlign: "center",
                display: "inline-block",
                background: "#fff",
                color: "#333",
                paddingTop: "15px",
                paddingBottom: "15px",
                marginLeft: "10px",
                marginRight: "10px",
                boxSizing: "border-box",
              }}
            >
              Waves
            </div>
            <div
              style={{
                width: "170px",
                borderRadius: "40px",
                marginBottom: "30px",
                boxShadow:
                  "0 -1px 4px rgb(0 0 0 / 5%), 0 4px 4px rgb(0 0 0 / 10%)",
                fontSize: "14px",
                textDecoration: "none",
                cursor: "pointer",
                textAlign: "center",
                display: "inline-block",
                background: "#fff",
                color: "#333",
                paddingTop: "15px",
                paddingBottom: "15px",
                marginLeft: "10px",
                marginRight: "10px",
                boxSizing: "border-box",
              }}
            >
              Trending Themes
            </div>
            <div
              style={{
                width: "170px",
                borderRadius: "40px",
                marginBottom: "30px",
                boxShadow:
                  "0 -1px 4px rgb(0 0 0 / 5%), 0 4px 4px rgb(0 0 0 / 10%)",
                fontSize: "14px",
                textDecoration: "none",
                cursor: "pointer",
                textAlign: "center",
                display: "inline-block",
                background: "#fff",
                color: "#333",
                paddingTop: "15px",
                paddingBottom: "15px",
                marginLeft: "10px",
                marginRight: "10px",
                boxSizing: "border-box",
              }}
            >
              Team Background
            </div>
            <div
              style={{
                width: "170px",
                borderRadius: "40px",
                marginBottom: "30px",
                boxShadow:
                  "0 -1px 4px rgb(0 0 0 / 5%), 0 4px 4px rgb(0 0 0 / 10%)",
                fontSize: "14px",
                textDecoration: "none",
                cursor: "pointer",
                textAlign: "center",
                display: "inline-block",
                background: "#fff",
                color: "#333",
                paddingTop: "15px",
                paddingBottom: "15px",
                marginLeft: "10px",
                marginRight: "10px",
                boxSizing: "border-box",
              }}
            >
              Unbundling
            </div>
            <div
              style={{
                width: "170px",
                borderRadius: "40px",
                marginBottom: "30px",
                boxShadow:
                  "0 -1px 4px rgb(0 0 0 / 5%), 0 4px 4px rgb(0 0 0 / 10%)",
                fontSize: "14px",
                textDecoration: "none",
                cursor: "pointer",
                textAlign: "center",
                display: "inline-block",
                background: "#fff",
                color: "#333",
                paddingTop: "15px",
                paddingBottom: "15px",
                marginLeft: "10px",
                marginRight: "10px",
                boxSizing: "border-box",
              }}
            >
              Y for X
            </div>
            <div
              style={{
                width: "170px",
                borderRadius: "40px",
                marginBottom: "30px",
                boxShadow:
                  "0 -1px 4px rgb(0 0 0 / 5%), 0 4px 4px rgb(0 0 0 / 10%)",
                fontSize: "14px",
                textDecoration: "none",
                cursor: "pointer",
                textAlign: "center",
                display: "inline-block",
                background: "#fff",
                color: "#333",
                paddingTop: "15px",
                paddingBottom: "15px",
                marginLeft: "10px",
                marginRight: "10px",
                boxSizing: "border-box",
              }}
            >
              Industries
            </div>
            <div
              style={{
                width: "170px",
                borderRadius: "40px",
                marginBottom: "30px",
                boxShadow:
                  "0 -1px 4px rgb(0 0 0 / 5%), 0 4px 4px rgb(0 0 0 / 10%)",
                fontSize: "14px",
                textDecoration: "none",
                cursor: "pointer",
                textAlign: "center",
                display: "inline-block",
                background: "#fff",
                color: "#333",
                paddingTop: "15px",
                paddingBottom: "15px",
                marginLeft: "10px",
                marginRight: "10px",
                boxSizing: "border-box",
              }}
            >
              Investment Industry
            </div>
            <div
              style={{
                width: "170px",
                borderRadius: "40px",
                marginBottom: "30px",
                boxShadow:
                  "0 -1px 4px rgb(0 0 0 / 5%), 0 4px 4px rgb(0 0 0 / 10%)",
                fontSize: "14px",
                textDecoration: "none",
                cursor: "pointer",
                textAlign: "center",
                display: "inline-block",
                background: "#fff",
                color: "#333",
                paddingTop: "15px",
                paddingBottom: "15px",
                marginLeft: "10px",
                marginRight: "10px",
                boxSizing: "border-box",
              }}
            >
              Generic Lists
            </div>
          </div>
        </div>
        <h4
          style={{
            fontSize: "14px",
            textAlign: "center",
            color: "#999",
            marginBottom: "25px",
            marginTop: "10px",
            fontFamily: "inherit",
            fontWeight: "500",
            lineHeight: "1.1",
            boxSizing: "border-box",
            display: "block",
            marginBlockStart: "1.33em",
            marginBlockEnd: "1.33em",
            marginInlineStart: "0px",
            marginInlineEnd: "0px",
          }}
        >
          EXPLORE FEEDS
        </h4>
        <div
          style={{
            flexWrap: "wrap",
            justifyContent: "space-around",
            display: "flex",
            flexDirection: "row",
            marginLeft: "10px",
            boxSizing: "border-box",
          }}
        >
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Telemedicine
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Online Health Information
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Freelancer Marketplace
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Horizontal E-Commerce
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Gambling Tech
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Recipe Box
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Online Gaming Platforms
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Online Courses
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              B2C Grocery Delivery
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              OTT Streaming Platforms
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Kids Hobby Classes
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Online Events
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              At Home Fitness
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Remote Work Tools
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Plant Based Protein
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Online Tutoring
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              AR VR in Retail
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              AR VR in Healthcare
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              AR VR in Education
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              AR VR in Real Estate
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Cybersecurity
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Enterprise Networking
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              IT Operations
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Data Center Infrastructure
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Cloud Infrastructure
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Big Data Infrastructure
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Virtualization
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Docker Ecosystem
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              API Management
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Application Development Tools
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Software Testing Tools
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              PaaS
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              DevOps
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Open Source
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Database Technology
            </span>
          </a>
          <a
            href="/login"
            style={{
              width: "220px",
              marginRight: "10px",
              alignItems: "center",
              textDecoration: "none",
              display: "inline-flex",
              flexDirection: "row",
              padding: "10px",
              backgroundColor: "transparent",
              boxSizing: "border-box",
              cursor: "pointer",
            }}
          >
            <i class="fa fa-feed"></i>
            <span
              style={{
                width: "auto",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                color: "#333",
                paddingLeft: "10px",
                boxSizing: "border-box",
              }}
            >
              Enterprise Mobility
            </span>
          </a>
        </div>
        <span
          style={{
            fontSize: "14px",
            cursor: "pointer",
            textTransform: "uppercase",
            textAlign: "center",
            display: "block",
            color: "#337ab7",
            marginTop: "20px",
            textDecoration: "underline",
            boxSizing: "border-box",
          }}
        >
          View All Sectors
        </span>
      </div>
      <div
        className="sector report"
        style={{
          marginTop: "40px",
          position: "relative",
          textAlign: "center",
          color: "#555",
          boxSizing: "border-box",
          display: "block",
          fontSize: "14px",
          lineHeight: "1.42857143",
        }}
      >
        <span
          style={{
            zIndex: "3",
            fontSize: "28px",
            margin: "0",
            maxWidth: "580px",
            position: "relative",
            display: "inline-block",
            background: "#fff",
            color: "#404040",
            paddingLeft: "20px",
            paddingRight: "20px",
            boxSizing: "border-box",
            textAlign: "center",
            lineHeight: "1.42857143",
          }}
        >
          Sector Reports
        </span>
      </div>
      <p
        style={{
          lineHeight: "1.42857143",
          marginBottom: "25px",
          textAlign: "center",
          color: "#555",
          marginTop: "7px",
          paddingLeft: "10px",
          paddingLeft: "10px",
          margin: "0 0 10px",
          boxSizing: "border-box",
          display: "block",
          marginBlockStart: "1em",
          marginBlockEnd: "1em",
          marginInlineStart: "0px",
          marginInlineEnd: "0px",
        }}
      >
        Get latest trends and insights into the sectors of your interest
      </p>
      <div
        style={{
          overflow: "hidden",
          marginBottom: "25px",
          marginTop: "15px",
          marginLeft: "20%",
          boxSizing: "border-box",
          display: "block",
          color: "#293348",
          fontSize: "14px",
          lineHeight: "1.42857143",
          WebkitTapHighlightColor: "transparent",
          WebkitTextSizeAdjust: "100%",
          WebkitFontSmoothing: "antialiased",
        }}
      >
        {/* <Container> */}
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        <a
          style={{
            fontSize: "13px",
            display: "flex",
            flexDirection: "row",
            color: "#555",
            marginBottom: "5px",
            paddingTop: "10px",
            paddingBottom: "10px",
            width: "50%",
            float: "left",
            backgroundColor: "transparent",
            textDecoration: "none",
            boxSizing: "border-box",
            cursor: "pointer",
            lineHeight: "1.42857143",
          }}
          href="/"
        >
          <span
            style={{
              width: "90px",
              color: "#999",
              display: "inline-block",
              paddingLeft: "10px",
              boxSizing: "border-box",
              fontSize: "13px",
              cursor: "pointer",
              lineHeight: "1.42857143",
            }}
          >
            Apr 2021
          </span>
          Language Learning - Feed Report
        </a>
        {/* </Container> */}
      </div>
      <div
      className="complimentry offerings"
        style={{
          marginTop: "40px",
          position: "relative",
          textAlign: "center",
          color: "#555",
          boxSizing: "border-box",
          display: "block",
          fontSize: "14px",
        }}
      >
        <span></span>
      </div>
    </>
  );
}
