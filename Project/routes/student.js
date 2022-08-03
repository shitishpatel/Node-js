const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');
const router =express.Router();
const knex=require('../db/db');

const {initializingPassport} = require("../passportConfig.js");
const expressSession = require('express-session');
initializingPassport(passport);

router.use(expressSession({secret:"secret",resave:false,saveUninitialized:false}))
router.use(passport.initialize());
router.use(passport.session());


router.post('/create',async(req,res)=>{
    try{
        const hashedPassword=await bcrypt.hash(req.body.password,10);
        knex('student').insert({
            // id:req.body.id,
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            address:req.body.address,
            password:hashedPassword,
        }).then(()=>{
            knex.select().from('student').then((student)=>{
                res.send(student);
            });
        });

    }catch(error){
        res.status(500).json({error:error.message});
    }

});


router.post('/register',async(req,res)=>{
    try{
        const hashedPassword=await bcrypt.hash(req.body.password,10);
        knex('student').insert({
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            address:req.body.address,
            password:hashedPassword,
        }).then(()=>{
            knex.select().from('student').then((student)=>{
                res.send(student);
            });
        });

    }catch(error){
        res.status(500).json({error:error.message});
    }

});


router.post('/login', passport.authenticate("local",{failureRedirect:"/student/register" ,successRedirect:"/"})

);



router.put('/update/:id',(req,res) =>{
    const id=req.params.id;
    knex('student').where('id',req.params.id).update({first_name:req.body.first_name,last_name:req.body.last_name,email:req.body.email,address:req.body.address,password:req.body.password,}).then(()=>{
        
        knex.select().from('student').then((student)=>{
            res.send(student);
        });
    });
});


router.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    knex('student').where('id',req.params.id).del().then(()=>{
        knex.select().from('student').then((student)=>{
            res.send(student);
        });
    });
});

router.get('/all',(req,res)=>{
    knex.select().from('student').then((student)=>{
        res.send(student);
    });

});



module.exports=router;
