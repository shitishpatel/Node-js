const {merge,convert}=require('./function');
const express = require('express');
const app =express();
const PORT=8000;

app.post('/merge',(req,res)=>{
    convert();
    setTimeout(() => {
        merge().catch(err=>console.log(err));
    res.send("merge");
    }, 5000);
     
})

app.listen(PORT,()=>{
    console.log(`listening to the port no ${PORT}`);
});



