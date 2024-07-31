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
      .json({ data: newProduct, message: "Product created successfully" });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json(product);
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, description, stockQuantity, price, category, imageUrl } =
      req.body;

    const updateProduct = await Product.findByIdAndUpdate(id, req.body);

    if (!updateProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({
      message: `Product with id ${id} was successfully updated.`,
      data: updateProduct,
    });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

const removeProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const removedProduct = await Product.findByIdAndDelete(id);

    if (!removedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res
      .status(200)
      .json({ message: `Product with id ${id} was successfully deleted.` });
  } catch (err) {
    console.log(err.message);
    return res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
  updateProduct,
  removeProduct,
  getProductById,
};
