import { sendPasswordSuccessEmail } from "../../MailTrap/emails.js";
import User from "../../Models/userModel.js";
import bcrypt from "bcryptjs";

export const resetPassword = async (req, res) => {
  try {
    const { token } = req.params;
    const { password } = req.body;
    const user = await User.findOne({
      resetPasswordToken: token,
      resetPasswordExpiresAt: { $gt: Date.now() },
    });
    if (!user) {
      return res
        .status(400)
        .json({ success: false, message: "Token is invalid or expired" });
    }
    //?update user in database
    const saltRound = 10;
    const hashedPassword = await bcrypt.hash(password, saltRound);
    user.password = hashedPassword;
    user.resetPasswordToken = undefined;
    user.resetPasswordExpiresAt = undefined;
    await user.save();
    await sendPasswordSuccessEmail(user.email);

    res.json({
      success: true,
      message: "Password has been updated successfully",
      user: {
        ...user._doc,
        password: undefined,
      },
    });
  } catch (error) {
    console.log(" error in resetPassword: ", error);
    res.status(400).json({ success: false, message: error.message });
  }
};
