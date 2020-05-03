const express = require("express");
const reviewRouter = express.Router();
const reviewModel = require("../model/reviewModel");
reviewRouter.post("", async function (req, res) {
  try {
    const review = await reviewModel.create(req.body);
    res.status(200).json({ review });
  } catch (err) {
    res.status(200).json({
      err: err.message
    })
  }
})
reviewRouter.get("/:id", async function (req, res) {
  const { id } = req.params;
  const review = await reviewModel.findById(id).populate("plan").populate("user");
  res.status(200).json({ review });
})
// update 
// delete 
module.exports = reviewRouter;