//MODELS
const User = require("../models/components/user/user.Model");
const OTP = require("../models/components/otp/OTP.model");

//HELPER
const transporter = require("../helper/nodemailer.Helper");

//#region User Signup Controller
exports.signup = async (req, res) => {
  const { email, password, cPassword } = req.body;
  console.log(req.body);
  if (!email || !password || !cPassword) {
    return res.json({
      message: "Please All The Fields",
      isSuccess: false,
    });
  }
  if (password !== cPassword) {
    return res.json({ message: "Password Does Not Match", isSuccess: false });
  }
  const isEmailExist = await User.findOne({ email: email });

  if (isEmailExist) {
    if (isEmailExist.status === "P") {
      return res.json({
        message: "Please Compleate Your OTP Verification",
        isOTP: true,
        isSuccess: false,
        userId: isEmailExist._id,
      });
    }
    return res.json({
      message: "User Already Exist Please Try With Another Email",
      isSuccess: false,
    });
  }
  const otpNum = await Math.floor(1000 + Math.random() * 9000);
  console.log(otpNum);

  const mailOption = {
    from: process.env.user,
    to: email,
    subject: `DealsCracker Account Verification`,
    html: `<h1>Account Verification</h1><br><hr>
            <br><a>Your OTP is: ${otpNum}</a>`,
  };
  const mail = transporter.transporter.sendMail(mailOption);
  if (mail) {
    const user = new User({
      email: email,
      role: "client",
      password: password,
      status: "P",
    });
    const otp = new OTP({
      user: isEmailExist._id,
      otp: otpNum,
      status: "1",
      usedFor: "Account Verification",
    });
    const saveOtp = otp.save();
    const saveUser = user.save();
    if (saveUser && saveOtp) {
      return res.json({
        message: "Please Check Your Main We Have Sent A Mail",
        isSuccess: true,
        userId: isEmailExist._id,
      });
    }
  } else {
    return res.json({
      message: "Failed To Send OTP Please Try Again",
      isSuccess: false,
    });
  }
};
//#endregion
