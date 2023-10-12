const mongoose  = require("../config/db");
const tblSchema = mongoose.Schema({
    name : String,
    email : String,
    password : String
});
const tbl = mongoose.model("tables",tblSchema,"table");

module.exports = tbl;