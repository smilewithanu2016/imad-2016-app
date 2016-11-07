var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');
var bodyParser = require('body-parser');
var session = require('express-session');



var config = {
    user: 'smilewithanu2016',
    database: 'smilewithanu2016',
    host: 'db.imad.hasura-app.io',
    port: '5432',
    password: db-smilewithanu2016-62200
};

var app = express();
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(session({
    secret: 'someRandomSecretValue',
    cookie: { maxAge: 1000 * 60 * 60 * 24 * 30}
}));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});






app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/pic.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pic.jpg'));
});

app.get('/ui/Anuradha_Balasubramaniam_IITResume.doc', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Anuradha_Balasubramaniam_IITResume.doc'));
});

app.get('/ui/Logo.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Logo.jpg'));
});
app.get('/ui/bloglogo.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bloglogo.jpg'));
});
app.get('/ui/bg.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bg.jpg'));
});

app.get('/ui/Home.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Home.html'));
});
app.get('/ui/bloghome.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bloghome.html'));
});

app.get('/ui/hd1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hd1.jpg'));
});

app.get('/ui/hd2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hd1.jpg'));
});


app.get('/ui/hd3.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'hd1.jpg'));
});

app.get('/ui/B1.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'B1.JPG'));
});

app.get('/ui/B2.JPG', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'B2.JPG'));
});

app.get('/ui/M1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'M1.jpg'));
});

app.get('/ui/M2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'M2.jpg'));
});

app.get('/ui/w1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'w1.jpg'));
});

app.get('/ui/w2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'w2.jpg'));
});

app.get('/ui/e1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'e1.jpg'));
});


app.get('/ui/e2.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'e2.jpg'));
});

app.get('/ui/bo1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bo1.jpg'));
});

app.get('/ui/misc.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'misc.jpg'));
});


app.get('/ui/About.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'About.html'));
});

app.get('/ui/Contact.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Contact.html'));
});

app.get('/ui/Signup.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Signup.html'));
});

app.get('/ui/Login.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Login.html'));
});

app.get('/ui/HomeDecor.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'HomeDecor.html'));
});

app.get('/ui/Baby.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Baby.html'));
});

app.get('/ui/Men.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Men.html'));
});

app.get('/ui/Woman.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Woman.html'));
});

app.get('/ui/Electronics.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Electronics.html'));
});

app.get('/ui/Books.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Books.html'));
});

app.get('/ui/Misc.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Misc.html'));
});


app.get('/ui/bloghome.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bloghome.html'));
});

app.get('/ui/blogcontact.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blogcontact.html'));
});

app.get('/ui/blogsignup.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blogsignup.html'));
});

app.get('/ui/bloglogin.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bloglogin.html'));
});

app.get('/ui/bloghomeimprovement.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bloghomeimprovement.html'));
});
app.get('/ui/blogjobs.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blogjobs.html'));
});
app.get('/ui/blogkids.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blogkids.html'));
});
app.get('/ui/blogkitchen.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'blogkitchen.html'));
});
app.get('/ui/bloggeneral.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bloggeneral.html'));
});



var pool = new Pool(config);

function hash (input,salt)
{
var hashed = crypto.pbkdf2Sync(input,salt,10000,512,'anu');
return ["pbkdf2","10000",salt.hashed.toString('hex')].join('$');
}

app.get('/hash/:input',function(req,res){
var hashedString = hash(req.params.input,'this is a random string');
res.send(hashedString);
});

app.post('/ui/blogsignup.html', function (req, res) {
var name = req.body.name;
var number = req.body.number;
var email = req.body.email;
var dob = req.body.dob;
var password = req.body.password;
var gender = req.body.gender;
var userid = req.body.userid;
var salt =  crypto.randomBytes(128).toString('hex');
var dbString= hash(password,salt);

pool.query("INSERT INTO 'signup' (name,number,email,dob,password,gender,userid) VALUES ($1,$2,$3,$4,$5,$6,$7)",[name,number,email,dob,dbString,gender,userid],function(err,result){
if(err){
res.status(500),send(err.toString());
}else {
res.send('User created successfully :' +name);
}
});
});



var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
