const subscriberRoute = require('express').Router()
const {registerSubscriber} = require("../controllers/subscriberController");

subscriberRoute.post("/create", registerSubscriber)

module.exports = subscriberRoute;