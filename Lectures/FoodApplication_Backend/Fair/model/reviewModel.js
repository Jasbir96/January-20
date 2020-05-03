const mongoose = require("mongoose");
const reviewSchema = new mongoose.Schema({
  review: {
    type: String,
    required: [true, "Reviw can noy be empty"]
  },
  rating: {
    type: Number,
    min: 1,
    max: 10,
    default: 5
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  plan: {
    type: mongoose.Schema.ObjectId,
    ref: "janplanmodel",
    required: [true, "Review must belong to a plan"]
  },
  user: {
    type: mongoose.Schema.ObjectId,
    ref: "janUserModel"
  }
})

// findById,findOne,findByIDandupdate 
reviewSchema.pre(/^find/, function (next) {
  console.log("I was triggred");
  this.populate("plan").populate("user");
  next();
})
const reviewModel = mongoose.model("reviewSchema", reviewSchema);
module.exports = reviewModel;