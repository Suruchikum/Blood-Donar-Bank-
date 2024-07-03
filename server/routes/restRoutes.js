const express=require("express");
const { restController } = require("../controllers/restController");
const router=express.Router();
router.get("/rest",restController);

module.exports=router;
