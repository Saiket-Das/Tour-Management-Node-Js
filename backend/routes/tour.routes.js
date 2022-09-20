const express = require("express");
const tourControllers = require("../controllers/tour.controllers");
const router = express.Router();

router
  .route("/")
  .get(tourControllers.getTours)
  .post(tourControllers.createNewTour);

router.route("/trending").get(tourControllers.getTredningTour);
router.route("/cheapest").get(tourControllers.getCheapestTour);

router
  .route("/:id")
  .get(tourControllers.getSingleTour)
  .patch(tourControllers.updateSingleTour);

module.exports = router;
