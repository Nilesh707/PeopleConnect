const express = require("express");
const router = express.Router();
const {
    getUserById,
    getUser,
    updateUser,
  } = require("../controller/user");
  
  const { isSignedIn, isAuthenticated, isAdmin } = require("../controller/auth");


//param
router.param("userId", getUserById);


//user routes
router.get("/user/:userId", isSignedIn, isAuthenticated, getUser);
router.put("/user/:userId", isSignedIn, isAuthenticated, updateUser);

module.exports = router;