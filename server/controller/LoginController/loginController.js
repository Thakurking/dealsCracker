exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.json({
      message: "Please Provide All Details",
      isSuccess: false,
    });
  }
    
};
