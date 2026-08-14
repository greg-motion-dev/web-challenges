import mongoose from "mongoose";

// destructure schema, models, and model from mogoose for cleaner code
const { Schema, models, model } = mongoose;

// define the structure(schema), that every "Review" must follow

const reviewSchema = new Schema({
  text: { type: String, required: true },
  title: { type: String, required: true },
  rating: { type: Number, required: true },
});

// create the "Review" model or "reuse" if it already exists.

const Review = models.Review || model("Review", reviewSchema);

//export the "Review" model.

export default Review;
