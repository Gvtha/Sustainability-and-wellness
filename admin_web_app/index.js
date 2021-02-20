const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require("mongoose");
const app = express()
const port = 3000
const api = require("./api/router")
app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

const MONGO_URI = "mongodb+srv://jeevitha:jeevitha@sandbox.ezklo.mongodb.net/fitnessApi?retryWrites=true&w=majority";

mongoose
    .connect(MONGO_URI, { useNewUrlParser: true,useUnifiedTopology: true  })
    .then(console.log(`MongoDB connected ${MONGO_URI}`))
    .catch(err => console.log(err));
app.use('/api',api)
app.get('/', function (req, res) {
    res.sendFile( __dirname + "/" + "public/login.html" );
})
app.post('/', function (req, res) {
    if(req.body){
        console.log(req.body.email,req.body.password);
        if(req.body.email=='admin@gmail.com'&&req.body.password=='12345'){
            res.sendFile( __dirname + "/" + "public/table.html" );
        }
        else{
            res.redirect('/login')
        }
    }
    else{
        res.redirect('/login');
    }
})

app.get('/register', function (req, res) {
    res.sendFile( __dirname + "/" + "public/register.html" );
})

app.get('/login', function (req, res) {
    res.sendFile( __dirname + "/" + "public/login.html" );
})

app.get('/profile/:userId', function (req, res) {
    res.sendFile( __dirname + "/" + "public/profile.html" );
 })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})