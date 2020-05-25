const express = require("express");
const router = express.Router();
const { getUserById } = require("../controller/user");
  module.exports = router;
const { isSignedIn, isAuthenticated, isAdmin } = require("../controller/auth");
const { createInfo,createVideo,getInfo,updateVideo ,getVideoById,deleteVideo,getAllVideos,getVideosByCategoryId} = require("../controller/video");
const { getStateById } = require("../controller/state");
const { check, validationResult } = require("express-validator");
const { getCategoryById } = require("../controller/category");
//param
router.param("userId", getUserById);
router.param("stateId", getStateById);
router.param("categoryId", getCategoryById);
router.param("videoId", getVideoById);
//routes
//create video
router.post(
  "/video/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  //getUserById,
 // getCategoryById,
  //getStateById, 
  createVideo
);

router.put(
    "/video/:userId/:videoId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    //getUserById,
   // getStateById,
   // getCategoryById,
    updateVideo
  );
//remove State
 router.delete("/video/:videoId/:userId",isSignedIn,isAuthenticated,isAdmin,deleteVideo);
// GetAllVideo
 router.get("/video/videos",getAllVideos)



 router.get("/video/videos/:categoryId",getVideosByCategoryId)


 //getVideoswithInfo
 router.post("/info/:videoId/:userId",isSignedIn,isAuthenticated,isAdmin,createInfo)
 //getInfoForVideoID

 router.get("/info/:videoId",getInfo)
