const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    nickname:{
        type: String,
        required: true,
    },
    place:{
        type: String,
       
    },
    rating:{
        type: Number,
        required: true
    },
    content:{
        type: String,
        required : true
    }
})

module.exports = mongoose.model("Review", ReviewSchema);