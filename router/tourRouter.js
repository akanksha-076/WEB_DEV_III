// const express = require('express');
// const router = express.Router();
// const tourController = require('../controller/tourController');

// router.get('/',tourController.getAllTours); 
// router.get('/:id',tourController.getTourById); 
// router.post('/',tourController.createTour);
// router.put('/:id',tourController.updateTour);
// router.delete('/:id',tourController.deleteTour);
// module.exports = router;

const express = require('express');
const router = express.Router();
const tourController = require('../controller/tourController');

router.get('/', tourController.getAllTours);
router.get('/:id', tourController.getTourById);
router.post('/', tourController.createTour);
router.put('/:id', tourController.updateTour);
router.delete('/:id', tourController.deleteTour);

module.exports = router;