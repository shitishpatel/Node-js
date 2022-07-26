const client= require('./database');

const bodyParser = require("body-parser");



const express = require('express');
const app = express();

app.use(bodyParser.json());
app.listen(4000, ()=>{
    console.log("Sever is now listening at port 4000");
})


client.connect();

app.get('/users', (req, res)=>{
    client.query(`Select * from demo_table`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.get('/users/:id', (req, res)=>{
    client.query(`Select * from demo_table where id=${req.params.id}`, (err, result)=>{
        if(!err){
            res.send(result.rows);
        }
    });
    client.end;
})

app.post('/users', (req, res)=> {
    const user = req.body;
    let insertQuery = `insert into demo_table(id,name,address) 
                       values( '${user.id}','${user.name}', '${user.address}')`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Insertion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


app.put('/users/:id', (req, res)=> {
    let user = req.body;
    let updateQuery = `update demo_table
                       set name = '${user.name}',
                    
                       address = '${user.address}'
                       where id = ${user.id}`

    client.query(updateQuery, (err, result)=>{
        if(!err){
            res.send('Update was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})


app.delete('/users/:id', (req, res)=> {
    let insertQuery = `delete from demo_table where id=${req.params.id}`

    client.query(insertQuery, (err, result)=>{
        if(!err){
            res.send('Deletion was successful')
        }
        else{ console.log(err.message) }
    })
    client.end;
})
