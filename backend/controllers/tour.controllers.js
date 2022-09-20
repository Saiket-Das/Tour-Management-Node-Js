const {
  createNewTourService,
  getToursService,
  getSingleTourService,
  updateSingleTourService,
  getTredningTourService,
  getCheapestTourService,
} = require("../services/tour.services");

// ------ GET ALL TOUR PACKAGES
exports.getTours = async (req, res, next) => {
  try {
    const filter = { ...req.query };
    const excludeFields = ["sort", "page", "limit"];

    excludeFields.forEach((field) => delete filter[field]);

    const queries = {};

    console.log(filter);

    // ----> SELETED FIELDS
    if (req.query.fields) {
      const fields = req.query.fields.split(",").join(" ");
      queries.fields = fields;
    }

    // ----> SORT BY
    if (req.query.sort) {
      const sortBy = req.query.sort.split(",").join(" ");
      queries.sortBy = sortBy;
    }

    // ----> PAGINATION
    if (req.query.page) {
      const { page = 1, limit = 2 } = req.query;
      const skip = (page - 1) * parseInt(limit);
      queries.skip = skip;
      queries.limit = parseInt(limit);
    }

    const result = await getToursService(filter, queries);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "What the issue wrong",
      error: error.message,
    });
  }
};

// ------ POST NEW TOUR PACKAGE
exports.createNewTour = async (req, res, next) => {
  try {
    const result = await createNewTourService(req.body);

    res.status(200).json({
      success: true,
      message: "Tour package created.",
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// ------ GET ONE TOUR PACKAGE
exports.getSingleTour = async (req, res, next) => {
  try {
    const { id } = req.params;
    const result = await getSingleTourService(id);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// ------ UPDATE ONE TOUR PACKAGE
exports.updateSingleTour = async (req, res, next) => {
  try {
    const result = await updateSingleTourService(req.params.id, req.body);
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// ------ GET THREE TRENDING TOUR PACKAGES
exports.getTredningTour = async (req, res, next) => {
  try {
    const result = await getTredningTourService();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

// ------ GET THREE CHEAPEST TOUR PACKAGES
exports.getCheapestTour = async (req, res, next) => {
  try {
    const result = await getCheapestTourService();
    res.status(200).json({
      success: true,
      data: result,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
