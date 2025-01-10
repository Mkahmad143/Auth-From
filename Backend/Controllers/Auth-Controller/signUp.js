import User from "../../Models/userModel.js";
import bcrypt from "bcryptjs";
import { generateVerificationCode } from "../../Utils/generateVerficationCode.js";
import { generateAuthTokenAndSetCookies } from "../../Utils/generateAuthTokenAndSetCookies.js";
import { sendVerficationEmail } from "../../MailTrap/emails.js";

export const signUp = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    if (!email || !password || !name) {
      return res.status(400).json({ message: "All fields are required" });
    }
    //! Check if user already exists
    const isUserExist = await User.findOne({ email });
    if (isUserExist)
      return res
        .status(400)
        .json({ success: false, message: "User already exists" });

    //! Hash the password
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);
    const verificationToken = generateVerificationCode();

    const user = new User({
      email,
      name,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, //? 24 hours
    });

    await user.save();
    //! jwt token
    generateAuthTokenAndSetCookies(res, user._id);

    //!verfication Mail
    await sendVerficationEmail(user.email, verificationToken);

    res.status(201).json({
      success: true,
      message: "User Created successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({ success: false, message: error.message });
  }
};
