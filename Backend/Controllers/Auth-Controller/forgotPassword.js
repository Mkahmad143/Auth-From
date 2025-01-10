import User from "../../Models/userModel.js";
import env from "dotenv";
import crypto from "crypto";
import { sendPasswordResetEmail } from "../../MailTrap/emails.js";
env.config();

export const forgotPassword = async (req, res) => {
  const { email } = req.body;
  try {
    const user = await User.findOne({ email });
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found" });
    }
    const resetToken = crypto.randomBytes(20).toString("hex");
    const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000; //?1000

    user.resetPasswordToken = resetToken;
    user.resetPasswordExpiresAt = resetTokenExpiresAt;

    //!send reset email
    const client_url = process.env.CLIENT_URL;
    await sendPasswordResetEmail(
      user.email,
      `${client_url}/reset-Password/${resetToken}`
    );
    res.json({
      success: true,
      message: "Reset password email sent to your email",
    });
    await user.save();
  } catch (error) {
    console.log("error in forgotPassword", error);
    res.status(500).json({ success: false, message: error.message });
  }
};
