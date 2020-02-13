const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  let user = req.session.user;
  res.render("index", { user: user });
});

router.use((req, res, next) => {
  if (req.session.user) {
    next();
  } else {
    res.redirect("/user/login");
  }
});

router.get("/logout", (req, res, next) => {
  req.session.destroy(err => {
    // cannot access session here
    res.redirect("/");
  });
});

module.exports = router;
