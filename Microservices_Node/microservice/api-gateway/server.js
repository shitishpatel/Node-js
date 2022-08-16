const gateway = require('fast-gateway');
const port =9001;

const checkAuth= (req,res,next)=>{
    if(req.headers.token && req.headers.token !=''){
        next()
    }else{
        res.setHeader('Content-type','application/json');
        res.statusCode =401;
        res.end(JSON.stringify({status:401,message:'Authentication failed'}))
    }
}

const server=gateway({
    // middlewares:[checkAuth],    // for all services
    routes:[
        {
            prefix:'/order',
            target:'http://localhost:8081/',
            hooks:{

            }
        },
        {
            prefix:'/payment',
            target:'http://localhost:8082/',
            // middlewares:[checkAuth],
            // methods:['GET','POST'],
            hooks:{

            }
        }
    ]
})

server.get('/mytesting',(req,res)=> res.send("yes called gateway"));

server.start(port).then(server=>{
    console.log(`Api gateway is running in port no. ${port}`);
})
