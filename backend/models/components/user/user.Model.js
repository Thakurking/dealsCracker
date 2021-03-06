const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcryptjs");

const userSchema = new Schema(
  {
    name: {
      type: String,
      max: 30,
    },
    phone: {
      type: Number,
      max: 10,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      min: 6,
      required: true,
    },
    status: {
      type: String,
      default: "P",
    },
    role: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

userSchema.pre("save", async function (next) {
  if (!this.isModified("password")) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
  next();
});

userSchema.methods.passwordVerification = async function (password) {
  return await bcrypt.compare(password, this.password);
};

module.exports = mongoose.model("User", userSchema);
