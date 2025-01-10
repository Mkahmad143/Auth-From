import express from "express";
import { logOut } from "../Controllers/Auth-Controller/logOut.js";
import { signUp } from "../Controllers/Auth-Controller/signUp.js";
import { logIn } from "../Controllers/Auth-Controller/logIn.js";
import { verifyEmail } from "../Controllers/Auth-Controller/verifyEmail.js";
import { forgotPassword } from "../Controllers/Auth-Controller/forgotPassword.js";
import { resetPassword } from "../Controllers/Auth-Controller/resetPassword.js";
import { verifyToken } from "../Middlewares/verifyToken.js";
import { checkAuth } from "../Controllers/Auth-Controller/checkAuth.js";

const router = express.Router();

router.get("/check-auth", verifyToken, checkAuth);
router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/logout", logOut);
router.post("/verify-email", verifyEmail);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password/:token", resetPassword);

export default router;
