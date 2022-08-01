const express = require('express');
// import express from 'express';
const bcrypt = require('bcrypt');
const router =express.Router();
const knex=require('../db/db');
const passport = require('passport');




router.post('/create',async(req,res)=>{
    try{
        const hashedPassword=await bcrypt.hash(req.body.password,10);
        knex('teacher').insert({
            // id:req.body.id,
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            address:req.body.address,
            password:hashedPassword,
        }).then(()=>{
            knex.select().from('teacher').then((teacher)=>{
                res.send(teacher);
            });
        });

    }catch(error){
        res.status(500).json({error:error.message});
    }

    // knex.raw('insert into teacher (first_name,last_name) values(?,?)',['first','last'] ).then(()=>{
    //     knex.select().from('teacher').then((teacher)=>{
    //                 res.send(teacher);
    //             });
    // });
});

// router.post('/api/teachers' ,(req,res)=>{
//     console.log(req);
//     res.send("post request");
// })


router.post('/register',async(req,res)=>{
    try{
        const hashedPassword=await bcrypt.hash(req.body.password,10);
        knex('teacher').insert({
            // id:req.body.id,
            first_name:req.body.first_name,
            last_name:req.body.last_name,
            email:req.body.email,
            address:req.body.address,
            password:hashedPassword,
        }).then(()=>{
            knex.select().from('teacher').then((teacher)=>{
                res.send(teacher);
            });
        });

    }catch(error){
        res.status(500).json({error:error.message});
    }

    // knex.raw('insert into teacher (first_name,last_name) values(?,?)',['first','last'] ).then(()=>{
    //     knex.select().from('teacher').then((teacher)=>{
    //                 res.send(teacher);
    //             });
    // });
});


router.post('/login', passport.authenticate("local",{failureRedirect:"/register"}),async(req,res)=>{
    res.send(' teacher register');
});

router.put('/update/:id',(req,res) =>{
    const id=req.params.id;
    knex('teacher').where('id',req.params.id).update({first_name:req.body.first_name,last_name:req.body.last_name,email:req.body.email,address:req.body.address,password:req.body.password,}).then(()=>{
        
        knex.select().from('teacher').then((teacher)=>{
            res.send(teacher);
        });
    });
});


router.delete('/delete/:id',(req,res)=>{
    const id=req.params.id;
    knex('teacher').where('id',req.params.id).del().then(()=>{
        knex.select().from('teacher').then((teacher)=>{
            res.send(teacher);
        });
    });
});

router.get('/all',(req,res)=>{
    knex.select().from('teacher').then((teacher)=>{
        res.send(teacher);
    });
    // knex.raw('select * from teacher').then((teacher)=>{
    //     res.send(teacher.rows);
    // });
});



module.exports=router;
// export default router
