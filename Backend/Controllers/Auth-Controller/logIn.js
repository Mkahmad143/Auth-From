import User from "../../Models/userModel.js";
import bcrypt from "bcryptjs";
import { generateAuthTokenAndSetCookies } from "../../Utils/generateAuthTokenAndSetCookies.js";

export const logIn = async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Email Address" });
    }
    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
      return res
        .status(404)
        .json({ success: false, message: "Invalid Password" });
    }
    generateAuthTokenAndSetCookies(res, user._id);
    user.lasLogin = Date.now();
    await user.save();
    res.status(200).json({
      success: true,
      message: "login successful",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(500).send("Server Error", error);
  }
};
