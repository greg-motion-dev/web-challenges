// import { products } from "../../../lib/products";
import dbConnect from "@/db/connect";
import Product from "@/db/models/Product";
import Review from "@/db/models/Review";

export default async function handler(request, response) {
  // establish connection with mongodb before handling any requests
  await dbConnect();

  //extract the product id from the dynamic route query parameters /api/products/[id].js
  const { id } = request.query;

  // handle GET requests to fetch a single product by its id
  if (request.method === "GET") {
    const product = await Product.findById(id).populate("reviews");

    //check if the product actually exists in the database - otherwise 404
    if (!product) {
      return response.status(404).json({ status: "Not Found" });
    }
    // if existing, return the found product + reviews
    return response.status(200).json(product);

    // handle PUT reqyests to update existing products
  } else if (request.method === "PUT") {
    //get the updated data from request body
    const updatedProduct = request.body;
    // Find the product by its ID and update the product using its ID and the new data.
    await Product.findByIdAndUpdate(id, updatedProduct);
    return response
      .status(200)
      .json({ status: `Product successfully updated` });
  } //deleting
  else if (request.method === "DELETE") {
    await Product.findByIdAndDelete(id);
    //find and delete product by its ID
    return response
      .status(200)
      .json({ status: "Product successfully deleted." });
  }
}
