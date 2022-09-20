const TourPackage = require("../models/tour.model");

exports.getToursService = async (filter, queries) => {
  const result = await TourPackage.find(filter)
    .select(queries.fields)
    .sort(queries.sortBy)
    .skip(queries.skip)
    .limit(queries.limit);
  const totalTourPackages = await TourPackage.countDocuments(filter);
  const pageCount = Math.ceil(totalTourPackages / queries.limit);
  return { totalTourPackages, pageCount, result };
};

exports.createNewTourService = async (body) => {
  const result = await TourPackage.create(body);

  return result;
};

exports.getSingleTourService = async (id) => {
  const result = await TourPackage.findByIdAndUpdate(
    { _id: id },
    { $inc: { viewCounter: 1 } }
  );

  console.log("updateViewCounter", result);

  return result;
};

exports.updateSingleTourService = async (id, body) => {
  const result = await TourPackage.updateOne(
    { _id: id },
    { $set: body },
    { runValidators: true }
  );
  return result;
};

exports.getTredningTourService = async () => {
  const result = await TourPackage.find({}).sort({ viewCounter: -1 }).limit(3);
  return result;
};

exports.getCheapestTourService = async () => {
  const result = await TourPackage.find({}).sort({ price: 1 }).limit(3);
  return result;
};
