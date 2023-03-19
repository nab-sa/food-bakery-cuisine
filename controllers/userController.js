const User = require("../models/userModel");
const jwt = require('jsonwebtoken');
require('dotenv').config()

const registerUser = async (req, res) => {
    try {
      const { name, email, zipCode } = req.body;
      if (!(name && email && zipCode)) {
        return res.status(400).send({
          success: false,
          message: "Please enter the required information",
        });
      }
  
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(200).send({
          success: false,
          message: `${User.name} already exists, please login`,
        });
      }
      const newUser = await User.create(req.body)
  
      const token = jwt.sign({ user_id: newUser.id, email }, process.env.TOKEN_KEY);
      newuser.token = token;
      console.log(newUser)
      return res.status(200).json({
        success: true,
        message: `${newUser.name} is registered`,
        newUser,
        token
      });
    } catch (error) {
      res.status(500).send({
        success: false,
        message: error.message,
      });
    }
  };
  
  module.exports = {
    registerUser,
  };