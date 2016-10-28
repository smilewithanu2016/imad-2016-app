var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;

var app = express();
app.use(morgan('combined'));

var config = {
  host: 'PostgreSQL 9.6',
  user: 'smilewithanu2016',
  password: 'sa',
  database: 'smilewithanu2016',
  port: '5432'
};

var pool = new Pool(config);


app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/pic.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'pic.jpg'));
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


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
