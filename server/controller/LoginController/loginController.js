//MODULES
const validator = require("validator");
const jwt = require("jsonwebtoken");

//Models
const User = require("../../models/components/user/user.Model");

//#region Login Controller for User
exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({
      message: "Please Provide All Details",
      isSuccess: false,
    });
  }
  if (!validator.isEmail(email)) {
    return res.json({
      message: "Please Enter Valid Email",
      isSuccess: false,
    });
  }
  if (
    !validator.matches(
      password,
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/
    )
  ) {
    return res.json({
      message: "Password Must Contain A Uppercase, Lowercase And A Digit",
      isSuccess: false,
    });
  }
  const isUser = await User.findOne({ email: email }).select("+password");
  if (!isUser) {
    return res.json({ message: "User Not Found", isSuccess: false });
  }
  const isPasswordVerified = await isUser.passwordVerification(password);
  if (!isPasswordVerified) {
    return res.json({ message: "Wrong Password Or Email", isSuccess: false });
  }
  const payload = {};
  payload.user = isUser._id;
  if (isUser.status === "client") payload.client = true;
  const token = jwt.sign(payload, process.env.jwtSecret, { expiresIn: "8h" });
  if (!token) {
    return res.json({
      message: "Could Not Verify Your Password",
      isSuccess: false,
    });
  }
  return res.json({
    message: "Login Successful 🚀",
    isSuccess: true,
    user_id: isUser._id,
    token: token,
  });
};
//#endregion
