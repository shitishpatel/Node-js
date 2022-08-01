const express = require('express');
const knex = require('./db/db');
const jwt = require('jsonwebtoken');
const ejs = require('ejs');
const bcrypt = require('bcrypt');
// const students = require('./student');
// const getData= require('./server/get');
const app =express();
const student= require('./routes/student.js');
const teacher= require('./routes/teacher.js');
const passport = require('passport');
// const app =express();
const {initializingPassport} = require("./passportConfig.js");
const expressSession = require('express-session');


initializingPassport(passport);

app.use(express.urlencoded({extended:true}));
app.use(express.json());
// app.use('./server/get',getData);
app.set("view engine","ejs");
app.use('/student',student);
app.use('/teacher',teacher);
app.use(expressSession({secret:"secret",resave:false,saveUninitialized:false}))
app.use(passport.initialize());
app.use(passport.session());


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
