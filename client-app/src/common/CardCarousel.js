import React, { useState } from "react";
import { Container, Carousel } from "react-bootstrap";
const CardCarousel = () => {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  const ControlledCarousel = () => {
    return (
      <Carousel activeIndex={index} onSelect={handleSelect} >
        <Carousel.Item  style={{height:"500px", width:"100%"}}>
          <img
            style={{height:"500px",opacity:"1"}}
            className="d-block w-100"
            src="assets/images/c1.jpg"
            alt="First slide"
          />
          <Carousel.Caption className="texcaption">
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
          <Carousel.Item style={{height:"500px",opacity:"1"}}>
          <img
           style={{height:"500px"}}
            className="d-block w-100"
            src="assets/images/c2.jpg"
            alt="Second slide"
          />

          <Carousel.Caption className="text-black" >
            <h3 className="text-black" >Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item style={{height:"500px",font:"bold"}}>
          <img
             style={{height:"500px",opacity:"1"}}
            className="d-block w-100"
            src="assets/images/c3.jpg"
            alt="Third slide"
          />

          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>     
      </Carousel>
    );
  };

  return (
    <div style={{marginTop:"0px"}}>
        <Container fluid style={{width:"100%"}}>
      <ControlledCarousel />
      </Container>
    </div>
  );
};

export default CardCarousel;
