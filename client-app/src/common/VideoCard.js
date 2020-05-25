import React, { useState, useEffect } from "react";

import {
  Card,
  Button,
  Modal,
  Col,
  Row,
  Container,
  Badge,
  Alert,
  Form,
} from "react-bootstrap";
import { getInfoByVideoId } from "./helper/userapicall";
const VideoCard = ({ videoDetails }) => {
  const [modalShow, setModalShow] = React.useState(false);
  const [info, setInfo] = useState([
    {
      videoId: "",
      fullname: "",
      infodescription: "",
      familymember: "",
      infostate: "",
      contactnumber: "",
    },
  ]);
  const preload = () => {
    getInfoByVideoId(videoDetails._id).then((data) => {
      if (data.error) {
        console.log(data.error);
      } else {
        console.log(data[0]);
        setInfo(data);
      }
    });
  };
  useEffect(() => {
    preload();
  }, []);

  
  const ShowInfoModal = (props) => {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            {videoDetails.name}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {info.map((data, index) => {
            return (
              <Container key={index}>
                <Row>
                  <Col lg={12}>
                    <Alert className="text-center" variant="info">
                      <Badge variant="info">Fullname</Badge>{" "}
                      <h4>{data.fullname}</h4>
                    </Alert>
                  </Col>
                </Row>
                <Row>
                  <Col lg={4}>
                    <Alert className="text-center" variant="info">
                      <Badge variant="info">State</Badge>{" "}
                      <h4>{data.infostate}</h4>
                    </Alert>
                  </Col>
                  <Col lg={4}>
                    <Alert className="text-center" variant="info">
                      <Badge variant="info">Family Members</Badge>{" "}
                      <h4 className="text-center font-xl">
                        {data.familymember}
                      </h4>
                    </Alert>
                  </Col>
                  <Col lg={4}>
                    <Alert className="text-center" variant="info">
                      <Badge variant="info">Contact Number</Badge>
                      <h4>{data.contactnumber}</h4>
                    </Alert>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form>
                      <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Badge variant="info">Description</Badge>
                        <Form.Control
                          as="textarea"
                          onChange={false}
                          value={data.infodescription}
                          rows="6"
                        />
                      </Form.Group>
                    </Form>
                  </Col>
                </Row>
              </Container>
            );
          })}
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    );
  };
  return (
    <Card style={{ width: "18rem" }}>
      <iframe src={videoDetails.link} width="285px" height="300px"></iframe>
      <Card.Body style={{ width: "280px", height: "350" }}>
        <Card.Title> {videoDetails.name}</Card.Title>
        <Card.Text>{videoDetails.location}</Card.Text>
        <Card.Text>{videoDetails.description}</Card.Text>
        <Button onClick={() => setModalShow(true)} variant="primary">
          Go somewhere
        </Button>
        <ShowInfoModal show={modalShow} onHide={() => setModalShow(false)} />
      </Card.Body>
    </Card>
  );
};

export default VideoCard;
