const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

router.get('/',tourController.getAllTours); 
router.get('/:id',tourController.getTourById); 

module.exports = router;