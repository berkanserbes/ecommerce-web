const login = require("../controllers/loginController");

const { Router } = require("express");
const router = new Router();

router.route("/login").post(login);

module.exports = router;
