import React from "react";
import { Container, Col, Row } from "react-bootstrap";

const FeatureIcon = () => {
  return (
    <Container style={{ marginTop: "30px" }}>
      <Row>
        <Col lg={4} nd={12} xs={12}>
          <img
            className="center"
            style={{
              height: "60%",
              width: "60%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
            src="assets/icons/kindness.png"
          />
          <h2 className="text-center ">Kindness</h2>
        </Col>
        <Col lg={4} md={12} xs={12}>
          <img
            style={{
              height: "60%",
              width: "60%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
            src="assets/icons/team.png"
          />
          <h2 className="text-center ">Collabration</h2>
        </Col>
        <Col lg={4} md={12} xs={12}>
          <img
            style={{
              height: "60%",
              width: "60%",
              marginLeft: "auto",
              marginRight: "auto",
              display: "block",
            }}
            src="assets/icons/hug.png"
          />
          <h2 className="text-center ">TeamWork</h2>
        </Col>
      </Row>
    </Container>
  );
};

export default FeatureIcon;
