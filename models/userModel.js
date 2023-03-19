const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: { type: String, trim: true },
    lastName: { type: String, trim: true },
    email: { type: String, required: true, lowercase: true, unique: true },
    zipCode: {
      type: Number,
      min: [1000, "ZipCode is too short"],
      max: 99999,
    },
    password: { type: String, required: true },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
    subscribedAccount: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Subscriber",
    },
    token: {
      type: String,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;
