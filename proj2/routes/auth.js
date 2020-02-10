const express = require("express");
const router = express.Router();

router.get("/signup", (req, res, next) => {
  console.log("hello");
  res.render("../views/auth/signup.hbs");
});

module.exports = router;
