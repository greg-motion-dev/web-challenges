import mongoose from "mongoose";

// destructure schema, models, and model from mogoose for cleaner code
const { Schema, models, model } = mongoose;

// define the structure(schema), that every "Product" must follow

const productSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  price: { type: Number, required: true },
  currency: { type: String, required: true },
  // importing reviews
  reviews: { type: [Schema.Types.ObjectId], ref: "Review" },
});

// Create the "Prodcut" model, or reuse it if it already exists (prevent Next.js from errors)

const Product = models.Product || model("Product", productSchema);

// export the "Product model" so that it can be uses in the API routes

export default Product;
