const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const otpSchema = Schema(
  {
    user: {
      type: String,
      required: true,
    },
    otp: {
      type: String,
      required: true,
    },
    status: {
      type: Number,
      default: "1",
    },
    usedFor: {
      type: String,
      require: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("OTP", otpSchema);
