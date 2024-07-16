const {
  getProducts,
  createProduct,
  updateProduct,
  removeProduct,
} = require("../controllers/productController");

const { Router } = require("express");

const router = new Router();

router.route("/").get(getProducts).post(createProduct);

module.exports = router;
