

const express= require('express');

const connectController=require('../controllers/connect');

const router=express.Router();

router.get('/',connectController.getContact);

module.exports=router;