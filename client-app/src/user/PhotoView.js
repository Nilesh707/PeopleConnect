
import React, { useState, useEffect } from "react";
import { Container, Form, Row, Col } from "react-bootstrap";
import { getAllStates, getPhotosByCategoryId } from "../common/helper/userapicall";
import PhotoCard from "../common/PhotoCard";
const PhotoView=({categoryId})=> {
    const [statenameCard, setStatename] = useState([
        {
          citynames: [],
          statename: "",
        },
      ]);
    //  const [Location, setLocation] = useState([]);
      const [filterState, setFilterState] = useState(null);
      const [photoCategory, setPhotosCategory] = useState([{}]);
      const [fiterLocation, setfilterLocation] = useState(null);
     // const { citynames, statename } = statenameCard;
      const preload = () => {
        getAllStates().then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            setStatename(data);
          }
        });
    
        getPhotosByCategoryId(categoryId).then((data) => {
          if (data.error) {
            console.log(data.error);
          } else {
            setPhotosCategory(data);
          }
        });
      };
      useEffect(() => {
        preload();
      }, []);
    
      const onSelectedState = (e) => {
        console.log(e.target.value);
        if (e.target.value === "All") {
       //   console.log("all set");
          setFilterState(null);
          setfilterLocation(null);
        } else {
          setFilterState(e.target.value);
        }
      };
      const onSplit = (x) => {
        var arr = [];
        for (let i = 0; i < x.citynames.length; i++) {
          arr.push(
            <option key={i} value={x.citynames[i] || null}>
              {x.citynames[i]}
            </option>
          );
        }
        return arr;
      };
      const onLocationChange = (e) => {
        if (e.target.value === "All") {
        //  console.log("all set loca");
          setfilterLocation(null);
        } else {
          setfilterLocation(e.target.value);
        }
    
      };
    return (
        <div>
            <div>
      <Container style={{ marginTop: "100px" }}>
        <Form>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>State</Form.Label>
            <Form.Control as="select" onChange={onSelectedState} custom>
              <option>All</option>
              {statenameCard.map((data, index) => {
                return (
                  <option key={index} value={data._id || null}>{data.statename}</option>
                );
              })}
            </Form.Control>
          </Form.Group>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label>Location</Form.Label>
            <Form.Control as="select" onChange={onLocationChange} custom>
              <option>All</option>
              {statenameCard
                .filter((e) => e._id === filterState)
                .map((value) => onSplit(value))}
              )}
            </Form.Control>
          </Form.Group>
        </Form>
        <Row>
          {filterState !== null &&
            fiterLocation === null &&
            photoCategory
              .filter((e) => e.state === filterState)

              .map((data, index) => {
             //   console.log("tum aaya 1" + filterState);

            //    console.log("aya");
                return (
                  <Col lg={4} xs={12} md={12} className="py-3 px-3">
                   <PhotoCard photoDetails={data} />
                  </Col>
                );
              })}

          {filterState !== null &&
            fiterLocation !== null &&
            photoCategory
              .filter((e) => e.location === fiterLocation)
              .map((data, index) => {
           //     console.log("tum aaya2" + fiterLocation);
                return (
                  <Col lg={4} xs={12} md={12} className="py-3 px-3">
                   <PhotoCard photoDetails={data} />
                  </Col>
                );
              })}
          {filterState === null &&
            fiterLocation === null &&
            photoCategory.map((data, index) => {
             // console.log("tum aaya 3" + filterState);

            //  console.log("inside if aaya 3" + filterState);
              return (
                <Col key={index} lg={4} xs={12} md={12} className="py-3 px-3">
                  <PhotoCard photoDetails={data} />
                </Col>
              );
            })}
        </Row>
      </Container>
    </div>
        </div>
    )
}

export default PhotoView
