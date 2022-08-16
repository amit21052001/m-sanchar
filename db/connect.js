const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://amit:1234@cluster0.xodlh1d.mongodb.net/M-SANCHAR?retryWrites=true&w=majority";

const connectDB = (url) => {
  return mongoose.connect(connectionString, {
    useNewUrlParser: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
