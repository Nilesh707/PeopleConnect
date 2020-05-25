import React from "react";
import {Link} from "react-router-dom"
import {Card,Button} from 'react-bootstrap'
const CardHome = ({category}) => {

  return (
    <Card style={{marginLeft:"50px",marginRight:"50px"}}>
      <Card.Img  style={{height:"300px", width:""}} variant="top" src={`assets/images/${category.name}.jpg`} />
      <Card.Body>
        <Card.Title>{category.name}</Card.Title>
        <Link to={`category/${category._id}`}><Button>Click To Know More</Button></Link>
      </Card.Body>
    </Card>
  );
};

export default CardHome;
