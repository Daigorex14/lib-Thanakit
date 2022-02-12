const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
const bcrypt = require ('bcrypt');
const jwt = require("jsonwebtoken");
const Schema = mongoose.Schema;

const bookSchema = new Schema({

    bookId:{
        type:String,
        required:true,
        unique:true
    },
    bookName:{
        type:String,
        required:true
    },
    author:{
        type:String,
        required:true
    },
    publisher:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }
},{
    timestamps:true
});

module.exports = mongoose.model("Book", bookSchema);
bookSchema.plugin(uniqueValidator, {
    message: '{PATH} Already in use'
});