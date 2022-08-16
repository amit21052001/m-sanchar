const express = require("express");
const app = express();
const connectDB = require("./db/connect");
const finance = require("./routes/finance");
const register = require("./routes/register");
const login = require("./routes/login");
const changePassword = require("./routes/changePssword");
require("dotenv").config();

//middle-ware
app.use(express.static("./public"));
app.use(express.json());

//registration-API
app.use("/api/v1/register", register);

//login-API
app.use("/api/v1/login", login);

//change-password API
app.use("/api/v1/change-password", changePassword);

//finance-API
app.use("/api/v1/finance", finance);

const port = 5000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`server is listening on ${port}.....`));
  } catch (error) {
    console.log(error);
  }
};

start();
