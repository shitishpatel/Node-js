const express = require('express');
// import express from 'express';

const router =express.Router();



router.get('/all',(req,res)=>{
    res.send("all students");
});


router.post('/create',(req,res)=>{
    res.send("new students");
});


router.put('/update',(req,res)=>{
    res.send("student updated");
});


router.delete('/delete',(req,res)=>{
    res.send("student deleted");
});


module.exports=router;
// export default router
