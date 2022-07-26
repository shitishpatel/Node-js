const {Client} = require('pg');

const client = new Client({
    host:"localhost",
    port:5432,
    user:"postgres",
    password:"Shitish",
    database:"demo"
})

client.on("connect",()=>{
    console.log("Database Connect");

})

client.on("end",()=>{
    console.log("Connection end");
})


module.exports=client;
