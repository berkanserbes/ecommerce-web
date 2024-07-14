const { Schema } = require("mongoose");

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    stockQuantity: {
      type: Number,
      required: true,
      min: [0, "Stock quantity cannot be negative"],
    },
    price: {
      type: Number,
      required: true,
      min: [0, "Price cannet be negative"],
    },
    category: {
      type: String,
      trim: true,
    },
    imageUrl: {
      type: String,
      //default: ""
      trim: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Product", productSchema);
