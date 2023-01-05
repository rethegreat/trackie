require("dotenv").config()

const express = require("express")
const mongoose = require("mongoose")
const spendingRoutes = require("./routes/spendingRoutes")
const sharedSpendingRoutes = require("./routes/sharedSpendingRoutes")

// Creates react app
const app = express();

// Middleware
app.use(express.json());

app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/spending", spendingRoutes)
app.use("/api/sharedSpending", sharedSpendingRoutes)

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
