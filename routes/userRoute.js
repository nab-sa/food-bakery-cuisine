const userRoute = require('express').Router()
const {registerUser} = require("../controllers/userController");

userRoute.post("/create", registerUser)
userRoute.post("")

module.exports = userRoute;