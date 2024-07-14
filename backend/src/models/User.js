const { Schema, default: mongoose } = require("mongoose");

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// Türkiye standartlarına uygun telefon numarası regex'i
const phoneRegex = /^(?:\+?(\d{2}))?[-. ]?(\d{3})[-. ]?(\d{3})[-. ]?(\d{4})$/;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [emailRegex, "Please enter a valid email address"],
    },
    password: {
      type: String,
      required: true,
      trim: true,
      minLength: [6, "Password must be at least 6 characters long"],
      maxLength: [30, "Password must be less than 30 characters long"],
    },
    phone: {
      type: String,
      trim: true,
      match: [phoneRegex, "Please enter a valid phone number"],
    },
    address: {
      type: String,
      trim: true,
    },
    birthDate: {
      type: Date,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      default: "user",
    },
    favorites: [
      {
        type: mongoose.Types.ObjectId,
        ref: "Product",
      },
    ],
    cart: [
      {
        productId: { type: Schema.Types.ObjectId, ref: "Product" },
        quantity: { type: Number, default: 1 },
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
