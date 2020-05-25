import React from "react";
import { Card, Button } from "react-bootstrap";
const PhotoCard = ({ photoDetails }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
       
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>{photoDetails.name}</Card.Text>
          <Card.Text>{photoDetails.location}</Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default PhotoCard;
