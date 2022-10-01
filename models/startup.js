const mongoose = require('mongoose');

const startupSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email : {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    productDescription: {
        type: String,
        required: true
    },
    visitingSite:{
        type:String,
        required:false,
    },
    companyAddress:{
        type:String,
        required:false,
    },
    companyRegistrationNo:{// optonal if the startup is already registered or not
        type:String,
        requried:false,
    },
    

});

const Startup = mongoose.model('Startup',startupSchema);

module.exports = Startup;