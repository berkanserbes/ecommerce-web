const { Schema, default: mongoose } = require("mongoose");

const productSchema = new Schema(
  {
    _id: {
      type: Number,
    },
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
      default: 5,
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

productSchema.pre("save", async function (next) {
  if (this.isNew) {
    const highestProduct = await mongoose
      .model("Product")
      .findOne()
      .sort({ _id: -1 }) // descending order
      .exec();
    this._id = highestProduct ? highestProduct._id + 1 : 1;
  }
  next();
});

module.exports = mongoose.model("Product", productSchema);
