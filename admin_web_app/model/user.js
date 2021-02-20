const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

// Create Schema
const userSchema = new mongoose.Schema(
    {
        firstName:{
            type:String
        },
        lastName:{
            type:String
        },
        id:{
            type:String,
            unique:true
        },
        password: {
            type: String,
            required:true
        },
        emailId:{
            type:String,
            required:true,
            unique:true
        },
        age:{
            type:String
        },
        gender:{
            type:String
        },
        weight:{
            type:String
        },
        height:{
            type:String
        },
        recordData:[]
    },
    {
        timestamps:true
    }
);


module.exports = User = mongoose.model("user", userSchema);