const express = require('express');
// import express from 'express';
// import stu from './routes/student.js';
// import tea from './routes/teacher.js';
const stu = require('./routes/student.js');
const tea = require('./routes/teacher.js');
const app =express();
const port = process.env.PORT || '1234';

// Load Router Module
app.use('/student',stu);
app.use('/teacher',tea);


app.listen(port,()=>{
    console.log(`server listening at port no. ${port}`);
})
