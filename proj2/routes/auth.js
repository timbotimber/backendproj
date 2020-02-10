const express = require("express");
const router = express.Router();
const User = require("../models/user");
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/signup", (req, res, next) => {
  console.log("hello");
  res.render("../views/auth/signup.hbs");
});

router.post("/signup", (req, res, next) => {
  console.log("help");

  const username = req.body.username;
  const emailaddress = req.body.emailaddress;
  const password = req.body.password;
  const favouritefilm = req.body.favouriteWeAnFilm;
  const profession = req.body.profession;
  const salt = bcrypt.genSaltSync(bcryptSalt);
  const hashPass = bcrypt.hashSync(password, salt);

  if (username === "" || password === "") {
    res.render("auth/signup", {
      errorMessage: "Indicate a username and a password to sign up"
    });
    return;
  }

  if (password === "" || password === "") {
    res.render("auth/signup", {
      errorMessage: "Indicate a username and a password to sign up"
    });
    return;
  }

  User.findOne({ username: username }).then(user => {
    if (user !== null) {
      res.render("auth/signup", {
        errorMessage: "The username already exists!"
      });
      return;
    }
  });

  User.create({
    username,
    emailaddress,
    password: hashPass,
    favouritefilm,
    profession
  })
    .then(() => {
      res.redirect("http://localhost:3000/");
    })
    .catch(error => {
      console.log(error);
    });
});

module.exports = router;
