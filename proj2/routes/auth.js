const express = require("express");
const router = express.Router();
const User = require("../models/User");
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
    .then(createdUser => {
      req.session.user = createdUser;
      console.log(req.session.user);
      res.redirect("/");
    })
    .catch(error => {
      console.log(error);
    });
});

router.get("/login", (req, res, next) => {
  res.render("auth/login");
});

router.post("/login", (req, res, next) => {
  const theUsername = req.body.username;
  const thePassword = req.body.password;

  if (theUsername === "" || thePassword === "") {
    res.render("auth/login", {
      errorMessage: "Please enter both a username and  a password to sign in."
    });
    return;
  }

  User.findOne({ username: theUsername })
    .then(user => {
      if (!user) {
        res.render("auth/login", {
          errorMessage: "The username doesn't exist."
        });
        return;
      }
      if (bcrypt.compareSync(thePassword, user.password)) {
        console.log(req.session);
        req.session.user = user;
        res.redirect("/");
      } else {
        res.render("auth/login", {
          errorMessage: "Incorrect password"
        });
      }
    })
    .catch(error => {
      next(error);
    });
});

module.exports = router;
