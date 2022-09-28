const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
var DATABASE_URL=process.env.DATABASE_URL;

var db=mongoose.connect(DATABASE_URL).then((data)=>{
    // console.log(data);
    console.log("success");
}).catch((error)=>{
    console.log("error");
})



module.exports = db;

