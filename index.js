// Import necessary modules
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import potentialRoute from "./routes/potentialStudentRoute.js";
import questionRoute from "./routes/potentialStudentRoute.js";
import subscriptionRoutes from "./routes/subscriptionRoute.js";

const PORT = 3001;
const app = express();

app.use(
  cors()
);
app.use(express.json());

// Routes

app.use("/potentialStudent", potentialRoute);
app.use("/question", questionRoute);
app.use("/subscription", subscriptionRoutes);

// Database connection

mongoose
  .connect(
    // "mongodb://localhost:27017/your_database_name",
    "mongodb+srv://alekochokheli01:12345@cluster0.tezroah.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
    {}
  )
  .then(() => {
    console.log("Successfully connected to MongoDB");

    app.listen(PORT, () => {
      console.log(`App is listening on ${PORT} port`);
    });
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB:", error);
  });
