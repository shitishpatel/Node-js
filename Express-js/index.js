const express = require('express');
const path = require('path');

const app =express();

const PORT=8000;

// relative path=> "../../.."
// absolute path=> "src/about/index.js"

// console.log();
staticPath=path.join(__dirname,'public');

// Builtin middleware
app.use(express.static(staticPath));

app.get('/',(req,res)=>{
    res.send("Home....");
    // for Html tags
    // res.write('<h1>shitish</h1>');
    // res.write('<h1>patel</h1>');
    // res.send();
});
app.get('/about',(req,res)=>{
    res.status(200).send("about....");
});
app.get('/contact',(req,res)=>{
    res.status(200).send("contact....");

    // for json 
//     res.send([
        // {
        // id:1,
        // name:"shitish"
        // },
        // {
        //     id:2,
        //     name:"aman"
        // },
// ])

    // res.json([
    //     {
    //         id:1,
    //         name:"shitish"
    //         },
    //         {
    //             id:2,
    //             name:"aman"
    //         },
        
    // ])
});

app.listen(PORT,()=>{
    console.log(`listening to the port no ${PORT}`);
});
