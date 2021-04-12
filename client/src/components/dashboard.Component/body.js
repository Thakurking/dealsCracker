import React from "react";
import { Col, Container, Row, Button } from "react-bootstrap";
import "../../App.css";

export default function body() {
  return (
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
            Tracking Innovative companies across 350+ Technology Sectors, <br />
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
        <Col className="justify-content-md-center" xs lg="6">
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
          background: "fbfbfb",
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
                        fontSize: "18px",
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
                        fontSize: "14px",
                        textAlign: "left",
                        color: "#777",
                        marginTop: "0",
                        marginBottom: "10px",
                        boxSizing: "border-box",
                      }}
                    ></ul>
                  </Col>
                  <Col className="justify-content-md-center">how</Col>
                  <Col className="justify-content-md-center">are you</Col>
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
