
// ROUTING

// const express=require('express');
// const app = express();

// const port=process.env.PORT || 8000;

// app.get('/',(req,res)=>{
//     res.send("Hello");
// });

// app.get('/about',(req,res)=>{
//     res.status(200).send("About");
// });


// app.listen(port,()=>{
//     console.log(`port at ${port} `);
// });


// GET,POST,PUT, DELETE

const express=require('express');
const app = express();

const port=process.env.PORT || 8000;

const emp=[{
    id:1,
    name:"shitish",
    mail:"shitish1999@gmail.com"
}]

app.use(express.json())

app.get('/',(req,res)=>{
    res.send(emp);
});

app.post('/',(req,res)=>{
    const newEmp={
        id:parseInt(req.body.id),
        name:req.body.name,
        mail:req.body.mail
    }

    emp.push(newEmp);
    res.send(emp);

})


app.put("/:id",(req,res)=>{
    const idx=emp.findIndex(emp=>emp.id == req.params.id)
    if(idx>=0){
        const updated={
            id:parseInt(req.params.id),
            name:req.params.name,
            mail:req.params.mail

        }
        emp.splice(idx,1,updated)
        res.send(emp)
    }else{
        res.status(400).send(`record not found in id : ${req.params.id}`)
    }
})

app.delete("/:id",(req,res)=>{
    const idx=emp.findIndex(emp=>emp.id == req.params.id)
    if(idx>=0){
        
        emp.splice(idx,1)
        res.send(emp)
    }else{
        res.status(400).send(`record not found in id : ${req.params.id}`)
    }
})

app.listen(port,()=>{
        console.log(`port at ${port} `);
    });
