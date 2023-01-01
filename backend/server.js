require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const workoutRoutes = require("./routes/workoutRoutes");
const spendingRoutes = require("./routes/spendingRoutes")

// Creates react app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/workouts", workoutRoutes)
app.use("/api/spending", spendingRoutes)

// Conect to mongoose
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => {
    // Listen for request
    app.listen(process.env.PORT, () => {
      console.log("Listening on port 8080!");
    });
    
  })
  .catch((error) => {
    console.log(error);
  });
