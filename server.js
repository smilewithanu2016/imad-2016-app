var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

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

app.get('/ui/bg.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bg.jpg'));
});

app.get('/ui/Home.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'Home.html'));
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

var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
