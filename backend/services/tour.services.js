const TourPackage = require("../models/tour.model");

exports.getToursService = async () => {
  const users = await TourPackage.find({});
  return users;
};

exports.createNewTourService = async (body) => {
  console.log(body);
  const result = await TourPackage.create(body);

  return result;
};

exports.getSingleTourService = async (body) => {
  const blog = await Blog.findById(id);
  return blog;
};
