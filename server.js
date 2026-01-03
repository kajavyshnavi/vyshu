const express = require('express');
const mongoose = require('mongoose');
const StudentData = require('./model');

const app = (express());
app.use(express.json());

mongoose.connect('mongodb+srv://kajavyshnavi324_db_user:JDaJJuXfdVFB8ay1@cluster0.jpu8v9x.mongodb.net/').then(()=> console.log('connected to database')
).catch (err =>console.log(err));

app.post('/add_Student', async(req,res)=>{
    const{StudentName} = req.body;
    const{CourseName} = req.body;
    const{RollNumber} = req.body;
    const{CollegeName} = req.body;
try{
    const newData = new StudentData({StudentName, CourseName, RollNumber, CollegeName});
    await newData.save();
    return res.json({message: 'Student data added successfully'});
}
catch(err){
    console.log(err);
}

});

app.get('/get-all_StudentData', async(req,res)=>{
    try{
        const allData = await StudentData.find();
        return res.json(allData);
    }
    catch(err){
        console.log(err);
    }
})

app.listen(5000,()=>console.log(' server running on http://localhost:5000'));
