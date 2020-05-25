import React, { useState, useEffect } from "react";
import { getCategories } from "./helper/userapicall";
import CardHome from "./CardHome";

import { Container, Col, Row } from "react-bootstrap";
const CardCategory = () => {
  const [categories, setCategories] = useState([]);
  const preload = () => {
    getCategories().then((data) => {
      if (data.error) {
        console.log(data.error);
      }
      setCategories(data);
    });
  };

  useEffect(() => {
    preload();
  }, []);
  return (
    <div>
      <Container md={{ span: 12, offset: 4 }} fluid style={{marginTop:"20px"}}> 
        <Row>
          {categories.map((data, index) => {
            return (
              <Col lg={4} md={12} xs={12}>
                <CardHome category={data} />
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
};

export default CardCategory;
