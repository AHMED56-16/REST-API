import mongoose from "mongoose";

const productSchema=new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Name is required to be entered!"],
      },
      price: {
        type: Number,
        required: [true, "Price is required to be entered!"],
      },
      featured: {
        type: Boolean,
        default: false,
      },
      rating: {
        type: Number,
        default: 4.8,
      },
      createdAt: {
        type: Date,
        default: Date.now(),
      },
      company: {
        type: String,
        enum: {
          values: ["Apple", "Samsung", "Google", "Dell"],
          message: `{VALUE} is not supported`,
        },
      },
})

export default mongoose.model("Product", productSchema);