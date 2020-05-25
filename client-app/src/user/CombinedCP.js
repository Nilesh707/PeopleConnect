import React from "react";

import { Tab, Tabs,Container } from "react-bootstrap";
import Menu from "../common/Menu";
import CategoryVideoCard from "../common/CategoryVideoCard";
import PhotoView from "./PhotoView";
function CombinedCP({match}) {
  return (
    <div>
      <Menu />
      <Container style={{ marginTop: "100px" }}>
        <Tabs defaultActiveKey="Videos" id="uncontrolled-tab-example">
          <Tab eventKey="Videos" title="Videos">
            <CategoryVideoCard categoryId={match.params.categoryId}/>
          </Tab>
          <Tab eventKey="Photos" title="Photos">
          <PhotoView categoryId={match.params.categoryId}/>
          </Tab>
         
        </Tabs>
      </Container>
    </div>
  );
}

export default CombinedCP;
