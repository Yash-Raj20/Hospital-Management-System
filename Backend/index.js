import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { errorMiddleware } from "./middlewares/errorMiddleware.js";

import userRoute from "./route/user.route.js";
import appointmentRoute from "./route/appointment.route.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 4000;
const URI = process.env.mongoConnectionURL;

const connectDB = async () => {
  try {
    await mongoose.connect(URI);
    console.log(`Connected to MongoDB: ${mongoose.connection.host}`);
  } catch (error) {
    console.error("Error connecting to MongoDB:", error.message);
    process.exit(1);
  }
};

async function startServer() {
  await connectDB();
  app.use("/users", userRoute);
  app.use("/appointments", appointmentRoute);

  app.use(errorMiddleware);

  app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
  });
}

startServer();
