const Product = require("../models/Product");

const getProducts = async (req, res) => {
  try {
    const products = await Product.find();

    return res.status(200).json(products);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

const createProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl, stockQuantity } = req.body;

    const newProduct = await Product.create({
      name,
      description,
      price,
      imageUrl,
      stockQuantity,
    });

    return res
      .status(201)
      .json({ data: { newProduct }, message: "Product created successfully" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {};

const removeProduct = async (req, res) => {};

module.exports = { getProducts, createProduct, updateProduct, removeProduct };
