const express = require('express');

const router = express.Router();
const { 
  handleGetAllUser, 
  handlegetUserById, 
  handleUpdateUserById, 
  handleDeleteUserById, 
  CreateNewUser 
} = require('../controller/user');  // ✅ Import only controllers

// Define routes
router.get("/", handleGetAllUser);
router.get("/:id", handlegetUserById);
router.patch("/:id", handleUpdateUserById);
router.delete("/:id", handleDeleteUserById);
router.post("/", CreateNewUser);

module.exports = router;
