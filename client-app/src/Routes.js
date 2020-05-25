import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";   
import Dashboard from "./common/Dashboard.js";
import CategoryVideoCard from "./common/CategoryVideoCard.js";
import CombinedCP from "./user/CombinedCP.js";
import Contributer from "./user/Contributer.js";
import UploadDetails from "./user/UploadDetails.js";



export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
            <Route path="/" exact component={Dashboard}/>
            <Route path="/category/:categoryId" exact component={CombinedCP}/>
            <Route path="/login" exact component={Contributer}/>
            <Route path="/uploaddetails" exact component={UploadDetails}/>
           
            
        </Switch>
      </BrowserRouter>
    );
  }
  