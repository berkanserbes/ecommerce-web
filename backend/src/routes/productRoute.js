const {
  getProducts,
  createProduct,
  updateProduct,
  removeProduct,
  getProductById,
} = require("../controllers/productController");

const { Router } = require("express");

const router = new Router();

router.route("/").get(getProducts).post(createProduct);
router.route("/:id").get(getProductById).delete(removeProduct);

module.exports = router;
