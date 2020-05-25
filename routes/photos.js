const express = require("express");
const router = express.Router();
const { getUserById } = require("../controller/user");
  module.exports = router;
const { isSignedIn, isAuthenticated, isAdmin } = require("../controller/auth");
const {createPhoto,getAllPhotos,getPhotosByCategoryId} = require("../controller/photos")
const { getStateById } = require("../controller/state");
const { check, validationResult } = require("express-validator");
const { getCategoryById } = require("../controller/category");
//param
router.param("userId", getUserById);
router.param("stateId", getStateById);
router.param("categoryId", getCategoryById);
//router.param("videoId", getPhotoById);
//routes
//create photo
router.post(
  "/photo/create/:userId",
  isSignedIn,
  isAuthenticated,
  isAdmin,
  //getUserById,
 // getCategoryById,
  //getStateById, 
  createPhoto
);

router.put(
    "/photo/:userId/:photoId",
    isSignedIn,
    isAuthenticated,
    isAdmin,
    //getUserById,
   // getStateById,
   // getCategoryById,
   // updateVideo
  );
// //remove State
//  router.delete("/photo/:photoId/:userId",isSignedIn,isAuthenticated,isAdmin,deletePhoto);
// GetAllPhotos
  router.get("/photo/photos",getAllPhotos)

  router.get("/photo/photos/:categoryId",getPhotosByCategoryId)
