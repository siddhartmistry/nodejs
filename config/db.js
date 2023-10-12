const mongoose = require("mongoose");
mongoose.connect("mongodb://0.0.0.0:27017/db1");
const db = mongoose.connection;
db.on("error",console.error.bind(console,"connection error"));

module.exports=mongoose;