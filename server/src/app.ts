import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import projectRouter from "./router/project.route";

dotenv.config();

const app = express();
app.use(express.json());
app.use(express.static('public'));
app.use("/project", projectRouter);
// DB 연결
mongoose
  .connect(process.env.MONGO_URI!)
  .then(() => console.log("✅ MongoDB connected"))
  .catch((err) => console.error("❌ MongoDB error:", err));

export default app;
