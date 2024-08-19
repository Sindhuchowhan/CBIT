const mongoose = require('mongoose')


const alienSchema = new mongoose.Schema
({
    rollno:{
        type:Number,
        required:true
    },

    name: 
    {
        type: String,
        required: true
    },
    section: 
    {
        type: String,
        required: true
    },
    pass: 
   {
        type: Boolean,
        required: true,
        default: false
    },

    credits:{
        type:Number,
    }
})

module.exports = mongoose.model('Alien',alienSchema)
