const express = require("express");

const app = express();
const PORT = 3000;
const tasksRouter = require("./routes/tasks");
const connectDB = require("./db/connect");
require("dotenv").config();
const notFound = require("./middleware/not-found");
const errHandlingMiddleware = require("./middleware/error-handeler");

// middleware
app.use(express.static("./public"));
app.use(express.json());

// routes
app.use("/api/v1/tasks", tasksRouter);
app.use(notFound);
app.use(errHandlingMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`listening on port : ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
