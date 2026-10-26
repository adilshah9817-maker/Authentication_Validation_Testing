const express = require("express");

const router = express.Router();

const validate = require("../middleware/validate");

const {
  signupSchema,
  loginSchema
} = require("../schemas/authSchema");

let users = [];


// REGISTER
router.post(
  "/register",
  validate(signupSchema),
  (req, res) => {

    const { name, email, password } = req.body;

    const existingUser = users.find(
      (user) => user.email === email
    );

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered"
      });
    }

    users.push({
      name,
      email,
      password
    });

    res.json({
      message: "Registration successful",
      user: {
        name,
        email
      }
    });
  }
);


// LOGIN
router.post(
  "/login",
  validate(loginSchema),
  (req, res) => {

    const { email, password } = req.body;

    const user = users.find(
      (user) =>
        user.email === email &&
        user.password === password
    );

    if (!user) {
      return res.status(401).json({
        message: "Invalid email or password"
      });
    }

    res.json({
      message: "Login successful",
      user: {
        name: user.name,
        email: user.email
      }
    });
  }
);


module.exports = router;