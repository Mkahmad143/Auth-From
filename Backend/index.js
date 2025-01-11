import dotenv from "dotenv";
import express from "express";
import { connectionToDatabase } from "./DB/connectDB.js";
dotenv.config();
import authRoutes from "./Routes/authRoute.js";
import cookieParser from "cookie-parser";
import cors from "cors";

const app = express();
//?Cors Config

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);
//?Middleware
app.use(express.json());
app.use(cookieParser());

//?Database Connection
connectionToDatabase();

//?Home Route
app.get("/", (req, res) => {
  res.send("Hello World!");
});

//?Auth Routes
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 8000;
//?Start Server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
