const express = require ('express');
const {infocontroller} = require('/home/dhananjay/Desktop/project 2/src/controllers/index.js');
const AirplaneRoutes = require('/home/dhananjay/Desktop/project 2/src/routes/airplane-routes.js');
const router = express.Router();
router.use('/airplanes',AirplaneRoutes);
router.get('/info', infocontroller.info)
   
module.exports = router;