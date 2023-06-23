const express = require('express');
const{ Airplanecontroller } = require('/home/dhananjay/Desktop/project 2/src/controllers/index.js');
const{ Airplanemiddlewares }= require('/home/dhananjay/Desktop/project 2/src/middlewares/index.js');
const{ validateCreateRequest }= require('/home/dhananjay/Desktop/project 2/src/middlewares/airplane-middlewares.js');
const router = express.Router();
router.post('/',
validateCreateRequest,
Airplanecontroller.createAirplane);

module.exports= router;