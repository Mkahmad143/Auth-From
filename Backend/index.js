import dotenv from "dotenv";
import express from "express";
import { connectionToDatabase } from "./DB/connectDB.js";
dotenv.config();
import authRoutes from "./Routes/authRoute.js";

const app = express();

app.use(express.json());

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
