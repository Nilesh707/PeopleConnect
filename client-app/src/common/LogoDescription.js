import React from "react";
import { Container, Row, Col } from "react-bootstrap";
const LogoDescription = () => {
  return (
    <Container style={{ marginTop: "20px" }}>
      <Row >
        <Col style={{marginTop:"50px"}} lg={8} md={12} xs={12}>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.</p>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.</p>
        </Col>
        <Col lg={4} md={12} xs={12}>
        <img
           style={{height:"100%"}}
            className="d-block w-100"
            src="assets/images/logo.png"
            alt="Second slide"
          />

        </Col>
      </Row>
    </Container>
  );
};

export default LogoDescription;
