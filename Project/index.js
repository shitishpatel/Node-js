const express = require('express');
const knex = require('./db/db');
const ejs = require('ejs');
// const students = require('./student');
// const getData= require('./server/get');
const app =express();
const student= require('./routes/student.js');
const teacher= require('./routes/teacher.js');
// const app =express();
app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use('./server/get',getData);
app.set("view engine","ejs");
app.use('/student',student);
app.use('/teacher',teacher);

app.get('/',(req,res)=>{
    res.render('index');
});

app.get('/login',(req,res)=>{
    res.render('login');
});
app.get('/register',(req,res)=>{
    res.render('register');
});


app.listen('5000', ()=>{
    console.log('server started at port 5000');
});
