const register = require("../controllers/registerController");

const { Router } = require("express");
const router = new Router();

router.route("/register").post(register);

module.exports = router;
