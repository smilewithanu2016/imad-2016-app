console.log('Loaded!');

var submit=document.getElementById('submit');
submit.onclick =function(){

var request= new XMLHttpRequest();
request.onreadystatechange= function () {
if (request.readyState ===XMLHttpRequest.DONE){
if (request.status === 200) {
alert ("Logged in successfully");
} else if( request.status === 403) {
alert ("Username/password is incorrect");
} else if( request.status === 500) {
alert ("Something went wrong with the server");
}
}
};

var name = document.getElementById('name').value;
var password = document.getElementById('password').value;
request.open('POST','http://smilewithanu2016.imad.hasura-app.io/ui/blogsignup.html',true);
request.setRequestHeader('Content-Type','application/json');
request.send(JSON.strinify({name:name, password:password}));
};
