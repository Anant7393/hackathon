const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config();
var userName=process.env.DB_USERNAME;
var password=process.env.DB_PASSWORD;
mongoose.connect(`mongodb+srv://username:password@learning.rosxd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`);

db=mongoose.connection;

db.on('error', console.error.bind(console, "Error connecting to MongoDB"));

db.once('open', function(){
    console.log('Connected to Database :: MongoDB');
});


module.exports = db;

