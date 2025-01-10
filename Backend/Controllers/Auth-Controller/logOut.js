export const logOut = async (req, res) => {
  res.clearCookie("jwtAuthToken");
  res.status(200).json({ success: true, message: "Logged out successfully" });
};
