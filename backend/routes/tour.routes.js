const express = require("express");
const tourControllers = require("../controllers/tour.controllers");
const router = express.Router();

router
  .route("/")
  .get(tourControllers.getTours)
  .post(tourControllers.createNewTour);

router.route("/:id").get(tourControllers.getSingleTour);
//   .patch(tourControllers.updateTour);

module.exports = router;
