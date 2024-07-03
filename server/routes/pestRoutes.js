const express=require("express");
const { pestController } = require("../controllers/pestController");
const router=express.Router();
router.get("/pest",pestController);

module.exports=router;
