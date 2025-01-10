import env from "dotenv";
import jwt from "jsonwebtoken";
env.config();

export const verifyToken = async (req, res, next) => {
  const token = req.cookies.jwtAuthToken;
  if (!token)
    return res
      .status(401)
      .json({ success: false, message: "unauthorized - no token provided" });
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    if (!decoded) {
      return res
        .status(401)
        .json({ success: false, message: "unauthorized - invalid token" });
    }
    req.userId = decoded.userId;
    next();
  } catch (error) {
    console.error("error in verifyToken", error);
    return res.status(500).json({ success: false, message: error.message });
  }
};
