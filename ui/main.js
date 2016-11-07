console.log('Loaded!');

function loadsignupform () {
    var loginHtml = `
<form name="myForm" onsubmit="return validateForm()" method="post">
<script>
function myFunction() {
    var x = document.getElementById("name");
    x.value = x.value.toUpperCase();
}
</script>
<div class="form-group">
  <label for="name">Name:</label>
  <input type="text" class="form-control" id="name" autofocus required onChange="myFunction()">
</div>
<div class="form-group">
    <label for="userid">Userid:</label>
    <input type="userid" class="form-control" id="userid" required>
  </div>
<div class="form-group">
  <label for="num">Contact Number:</label>
  <input type="number" class="form-control" id="num">
</div>
<div class="form-group">
  <label for="date">Date of Birth:</label>
  <input type="date" class="form-control" id="date" name="date">
</div>
 
<div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email" required>
  </div>
<div class="form-group">
  <label for="pwd">Password:</label>
  <input type="password" class="form-control" id="pwd" required>
</div> 
<div class="form-group">
  <label for="pwd">Confirm Password:</label>
  <input type="password" class="form-control" id="pwd" >
   <label for="gender">Gender:</label>
  <input type="radio" name="gender" value="male">Male
  <input type="radio" name="gender" value="female">Female
   <input type="submit" class="btn btn-primary" name="submit" formaction="main.js">Submit</button>
</div> 
       
<script>
function validateForm() {
    var x = document.forms["myForm"]["name"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}
</script>

</form>
</div>
`
return loginHtml
};
document.getElementById('blogsignup').innerHTML = loginHtml;

 var submit = document.getElementById('submit');
    submit.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User signedup successfully');
                  submit.value = 'Registered!';
              } else {
                  alert('Could not register the user');
                  submit.value = 'Register';
              }
          }
        };
        
        var name = document.getElementById('name').value;
        var number = document.getElementById('number').value;
        var email = document.getElementById('password').value;
        var dob = document.getElementById('password').value;
        var password = document.getElementById('password').value;
        var gender = document.getElementById('password').value;
        var userid = document.getElementById('userid').value;
        
           request.open('POST', '/server.js', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({name: name,userid: userid,number: number,email: email,dob: dob,password: password,gender: gender}));  
        submit.value = 'Registering...';
    
    };
}