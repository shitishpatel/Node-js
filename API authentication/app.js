const express = require('express');
const app = express();

const mongoose = require('mongoose');
const User = require('./models/users')

var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();

var crypto = require('crypto');
// var key="password";
// var algo='aes256';
const algorithm = 'aes-192-cbc';

// Defining password
const password = 'bncaskdbvasbvlaslslasfhj';

// Defining key
const key = crypto.scryptSync(password, 'GfG', 24);

// Defininf iv
const iv = Buffer.alloc(16, 0);

// Creating cipher

const jwt = require('jsonwebtoken');
jwtKey = "jwt";


mongoose.connect('mongodb+srv://avenger:1sT5tgsFcgVOIGsY@cluster0.bwyzp.mongodb.net/tutorial?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
).then(() => {
    console.log("db connected");
})

app.post('/register', jsonParser, (req, res) => {
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    var encrypted = cipher.update(req.body.password, 'utf-8', 'hex')
        + cipher.final('hex');
    console.log(encrypted);
    const data = new User({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        email: req.body.email,
        address: req.body.address,
        password: encrypted,
    })
    data.save().then((result) => {
        jwt.sign({ result }, jwtKey, { expiresIn: '300s' }, (err, token) => {
            res.status(201).json(token);
        })
        // res.status(201).json(result);
    }).catch((err) => console.log(err))
    // res.end("hello")

})


app.post('/login', jsonParser, (req, res) => {
    User.findOne({ email: req.body.email }).then((data) => {
        var decipher = crypto.createDecipheriv(algorithm, key, iv);
        var decrypted = decipher.update(data.password, 'hex', 'utf8') +
            decipher.final('utf8');
        if (decrypted == req.body.password) {
            jwt.sign({ data }, jwtKey, { expiresIn: '300s' }, (err, token) => {
                res.status(200).json(token);
            })
        }
    })
})

app.get('/users', verifyToken, (req, res) => {
    User.find().then((result) => {
        res.status(200).json(result)
    })
})


function verifyToken(req, res, next) {
    const bearerHeader = req.headers['authorization'];

    if (typeof bearerHeader !== 'undefined') {
        const bearer = bearerHeader.split(' ');
        console.log(bearer[1]);
        req.token = bearer[1];
        jwt.verify(req.token, jwtKey, (err, authData) => {
            if (err) {
                res.json({ result: err })
            } else {
                next();
            }
        })
    } else {
        res.send({ "result": "Token not provide" })
    }
}

app.listen(4000);
