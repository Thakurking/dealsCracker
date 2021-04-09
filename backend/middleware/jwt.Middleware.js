const token = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const { jwt } = req.headers;
    console.log(jwt);
    if (!jwt) {
      return res.json({ message: "Access Failed", isSuccess: false });
    }
    const auth = jwt.replace("Bearer ", "");
    token.verify(auth, process.env.JWT_SECRET, async (err, payload) => {
      if (err) {
        return res.json({
          message: "Token Authorization Failed",
          isSuccess: false,
        });
      }
      if (payload.client && payload.user) {
        req.user = payload.user;
        req.client = true;
        next();
      } else {
        return res.json({ message: "User Not Authorized", isSuccess: false });
      }
    });
  } catch (error) {
    console.log(error);
    return res.json({ message: "Internal Server Error", isSuccess: false });
  }
};
