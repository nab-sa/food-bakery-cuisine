const Subscriber = require("../models/subscriberModel");


const registerSubscriber = async (req, res) => {
  try {
    const { name, email, zipCode } = req.body;
    if (!(name && email && zipCode)) {
      return res.status(400).send({
        success: false,
        message: "Please enter the required information",
      });
    }

    const existingSubscriber = await Subscriber.findOne({ email });
    if (existingSubscriber) {
      return res.status(200).send({
        success: false,
        message: `${Subscriber.name} already exists, please login`,
      });
    }
    const newSubscriber = await Subscriber.create(req.body)
    
    return res.status(200).json({
      success: true,
      message: `${newSubscriber.name} is registered`,
      newSubscriber,
    });
  } catch (error) {
    res.status(500).send({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  registerSubscriber,
};
