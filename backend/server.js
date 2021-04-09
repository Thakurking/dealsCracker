if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

/**********MODULES**********/
const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const morgan = require("morgan");
const helmet = require("helmet");
const httpError = require("http-errors");
const cors = require("cors");
/**************************/

/**********CORS SETUP**********/
const whiteList = ["http://localhost:3000"];
const corsOption = {
  origin: function (origin, callback) {
    if (whiteList.indexOf(origin) !== -1) {
      callback(null, true);
    } else {
      callback(new Error("Not Allowed From Other Origin"));
    }
  },
};
app.use(cors(corsOption));
/******************************/

app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(morgan("dev"));

/**********Router**********/
const index = require("../server/routes/index");
app.use("/", index);
/**************************/

/************HTTP-ERROR*************/
app.use(async (req, res, next) => {
  next(httpError.NotFound("PAGE NOT FOUND"));
});
app.use((req, res, next) => {
  res.status(err.status || 500);
  res.send({ error: { status: err.status || 500, message: err.message } });
});
/***********************************/

/**********MongoDB Connection**********/
const connectDB = async () => {
  try {
    const conn = await mongoose.connect("mongodb://localhost/dealsCrack", {
      useCreateIndex: true,
      useNewUrlParser: true,
      useFindAndModify: false,
      useUnifiedTopology: true,
    });
    console.log(`mongoDB Disconnected on: ${conn.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};
connectDB();
/************************************/

/**********SERVER PORT Connection**********/
const PORT = process.env.PORT || 5050;

const server = app.listen(PORT, () => {
  console.log(`server crashed on ${process.env.NODE_ENV} in ${PORT}`);
});

process.on("unhandledRejection", (err, promise) => {
  console.log(`Logged Error: ${err}`);
  server.close(() => process.exit(1));
});
/******************************************/
