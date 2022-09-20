const mongoose = require("mongoose");

const tourModel = mongoose.Schema(
  {
    title: {
      type: String,
      require: [true, "Please provide the tour's title"],
      unique: [true, "Title must be unique"],
    },

    description: {
      type: String,
      required: [true, "Please provide the tour's description"],
    },

    image: {
      type: String,
      require: [true, "Please provide the tour's image"],
    },

    price: {
      type: Number,
      required: [true, "Please provide tour's price"],
      min: [0, "Price can't be negative"],
    },

    duration: {
      type: String,
      required: [true, "Please provide tour's duration"],
    },

    viewCounter: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const TourPackage = mongoose.model("TourPackge", tourModel);

module.exports = TourPackage;
