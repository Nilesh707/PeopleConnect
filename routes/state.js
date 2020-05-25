const express = require("express");
const router = express.Router();
const { getUserById } = require("../controller/user");
module.exports = router;
const { isSignedIn, isAuthenticated, isAdmin } = require("../controller/auth");
const {createState,getLocation,getStateById,updateState,removeState,getAllStates,getAllStatesById} = require("../controller/state")
//param
router.param("userId", getUserById);
router.param("stateId",getStateById);
//router.param("statename",getLocationByStateName);

//routes
//create state
router.post("/state/create/:userId",isSignedIn,isAuthenticated,isAdmin,createState);
//update State
router.put("/state/:stateId/:userId",isSignedIn,isAuthenticated,isAdmin,updateState);
//delete State
router.delete("/state/:stateId/:userId",isSignedIn,isAuthenticated,isAdmin,removeState);
//getAllState
router.get("/state/states",getAllStates)
//getAllStateById
router.get("/state/:stateId",getAllStatesById)

