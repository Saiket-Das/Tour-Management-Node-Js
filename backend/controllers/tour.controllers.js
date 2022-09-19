const {
  createNewTourService,
  getToursService,
  getSingleTourService,
} = require("../services/tour.services");

exports.getTours = async (req, res, next) => {
  try {
    const User = await getToursService();
    res.status(200).json({
      success: true,
      data: User,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "What the issue wrong",
      error: error.message,
    });
  }
};

exports.createNewTour = async (req, res, next) => {
  try {
    const user = await createNewTourService(req.body);

    console.log(user);
    res.status(200).json({
      success: true,
      message: "Tour package created.",
      data: user,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};

exports.getSingleTour = async (req, res, next) => {
  try {
    const { id } = req.params;
    const blog = await getSingleTourService(id);
    res.status(200).json({
      success: true,
      data: blog,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
};
