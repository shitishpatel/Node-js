// const { response } = require('express');
const express = require('express');

const app=express();
const port=8082;


app.get('/payment-list',(req,res)=>{
    const response={
        data:{
            item:[{
                id:1,name:'payment 1'
            },
            {
                id:2,name:'payment 2'
            }
        ]
        }
    }
    res.status(200).json(response)
})

app.get('/',(req,res)=>{
    res.status(200).json({message:"payment called"})
})

app.post('/add',(req,res)=>{
    res.status(200).json({message:" POST  payment called"})
})

app.listen(port,()=>{
    console.log(`payment service is listening at http://localhost:${port}`);
})
