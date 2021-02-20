const mongoose = require("mongoose");
mongoose.set('useCreateIndex', true);

// Create Schema
const recordSchema = new mongoose.Schema(
    {
        userId:{
            type:mongoose.Schema.Types.ObjectId,
            ref:"user"
        },
        recordData:[]
    },
    {
        timestamps:true
    }
);

module.exports = Record = mongoose.model("record", recordSchema);