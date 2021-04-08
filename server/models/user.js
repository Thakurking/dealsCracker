const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      max: 30,
    },
    phone: {
      type: Number,
      required: true,
      max: 10,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      min: 6,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", userSchema);
