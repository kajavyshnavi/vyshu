const mongoose = require('mongoose')
const StudentData = new mongoose.Schema({
StudentName :{
        type: String,
        required: true,
    },
CourseName :{
        type: String,   
        required: true,
    },
RollNumber :{
        type: Number,
        required: true,
    },
CollegeName :{
        type: String,
        required: true,
    },
})  

module.exports = mongoose.model('studentdata', StudentData)