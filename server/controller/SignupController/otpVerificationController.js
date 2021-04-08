//MODELS
const OTP = require("../../models/components/otp/OTP.model");
const User = require("../../models/components/user/user.Model");

//#region OTP Verification Controller
exports.otpVerify = async (req, res) => {
  const { otp, userId } = req.body;
  if (!otp || !userId) {
    return res.json({
      message: "Please Provide All The Details",
      isSccess: false,
    });
  }
  const findOTP = await OTP.findOne({ otp: otp, user: userId });
  if (findOTP) {
    if (findOTP.status === "1") {
      const updateOtpStatus = await OTP.updateOne(
        { otp: otp },
        { $set: { status: "2" } }
      );
      const updateUserStatus = await User.updateOne(
        { _id: userId },
        { $set: { status: "Y" } }
      );
      if (updateOtpStatus && updateUserStatus) {
        return res.json({
          message: "OTP Verified Successfully, ThankYou",
          isSccess: true,
        });
      }
    }
  }
  if (findOTP.status === "2") {
    return res.json({
      message: "Your OTP Already Verified",
      isSccess: false,
    });
  }
};
//#endregion
