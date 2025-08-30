const { hashpass, checkPass } = require("../helpers/helper");
const { generateToken } = require("../helpers/jwt");
const User = require("../models/user.model");

const registerUser = async (req, res) => {
  try {
    const user = req.body;

    const isExist = await User.findOne({ email: user.email });
    if (isExist)
      return res.json({ message: "User Already Exist!", type: "Error" });

    const hashedpass = await hashpass(user.password);

    const newUser = new User({
      name: user.name,
      email: user.email,
      password: hashedpass,
    });
    await newUser.save();
    res.json({ message: "User Created Successfully", type: "Success" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const loginUser = async (req, res) => {
  try {
    const user = req.body;

    const ExistingUser = await User.findOne({
      email: user.email,
    }).lean();

    if (!ExistingUser)
      return res.json({ message: "User Not Exist!", type: "Error" });

    const { password, ...desUser } = ExistingUser;

    const decryptPass = await checkPass(user.password, password);
    if (!decryptPass)
      return res.json({ message: "Check Your Credentials", type: "Warning" });

    const token = generateToken(ExistingUser);

    return res.json({
      message: "Login Successfull",
      type: "Success",
      user: desUser,
      token: token,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

const deleteUser = async (req, res) => {
  try {
    const user = req.body;

    const ExistingUser = await User.findOne({ email: user.email }).lean();
    if (!ExistingUser) return res.json({ message: "Something Went Wrong" });

    await User.findByIdAndDelete(ExistingUser._id);
    return res.json({ message: "User Deleted Successfully" });
  } catch (error) {
    console.log(error.message);
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { registerUser, loginUser, deleteUser };
