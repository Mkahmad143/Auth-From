import express from "express";
import { logOut } from "../Controllers/Auth-Controller/logOut.js";
import { signUp } from "../Controllers/Auth-Controller/signUp.js";
import { logIn } from "../Controllers/Auth-Controller/logIn.js";
import { verifyEmail } from "../Controllers/Auth-Controller/verifyEmail.js";

const router = express.Router();

router.post("/signup", signUp);
router.post("/login", logIn);
router.post("/logout", logOut);
router.post("/verify-email", verifyEmail);

export default router;
