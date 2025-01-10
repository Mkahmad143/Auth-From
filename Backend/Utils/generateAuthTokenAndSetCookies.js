import env from "dotenv";
import jwt from "jsonwebtoken";
env.config();

export const generateAuthTokenAndSetCookies = (res, userId) => {
  const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
    expiresIn: "7d",
  });
  res.cookie("jwtAuthToken", token, {
    httpOnly: true,
    expires: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), //? 7 days
    secure: process.env.NODE_ENV === "production", //? Cookie only sent over HTTPS
    sameSite: "strict",
    maxAge: 7 * 24 * 60 * 60 * 1000, //? 7 days
  });
};
