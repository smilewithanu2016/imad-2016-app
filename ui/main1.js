console.log('Loaded!');




function loadsignupform () {
    var loginHtml = `
    <html>
    <body>
<form name="myForm" onsubmit="return validateForm()" method="post">
<script>
function myFunction() {
    var x = document.getElementById("name");
    x.value = x.value.toUpperCase();
}
</script>
<div class="form-group">
  <label for="username">Username:</label>
  <input type="text" class="form-control" id="username" autofocus required onChange="myFunction()"/>
</div>
<div class="form-group">
    <label for="userid">Userid:</label>
    <input type="userid" class="form-control" id="userid" required/>
  </div>
<div class="form-group">
  <label for="num">Contact Number:</label>
  <input type="number" class="form-control" id="number"/>
</div>
<div class="form-group">
  <label for="date">Date of Birth:</label>
  <input type="date" class="form-control" id="date" name="date"/>
</div>
 
<div class="form-group">
    <label for="email">Email address:</label>
    <input type="email" class="form-control" id="email" required/>
  </div>
<div class="form-group">
  <label for="pwd">Password:</label>
  <input type="password" class="form-control" id="pwd" required/>
</div> 
<div class="form-group">
  <label for="password">Confirm Password:</label>
  <input type="password" class="form-control" id="password"/>
   <label for="gender">Gender:</label>
  <input type="radio" name="gender" value="male"/>Male
  <input type="radio" name="gender" value="female"/>Female
   <input type="submit" name="register_btn" value="Submit"/>Submit
</div> 
       
<script>
function validateForm() {
    var x = document.forms["myForm"]["username"].value;
    if (x == null || x == "") {
        alert("Name must be filled out");
        return false;
    }
}
</script>

</form>
</div>
</body>
</html>
`;
    document.getElementById('login_area').innerHTML = loginHtml;
    
    // Submit username/password to login
    var submit = document.getElementById('login_btn');
    submit.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  submit.value = 'Sucess!';
              } else if (request.status === 403) {
                  submit.value = 'Invalid credentials. Try again?';
              } else if (request.status === 500) {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              } else {
                  alert('Something went wrong on the server');
                  submit.value = 'Login';
              }
              loadLogin();
          }  
          // Not done yet
        };
        
        // Make the request
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', '/login', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
        submit.value = 'Logging in...';
        
    };
    
    var register = document.getElementById('register_btn');
    register.onclick = function () {
        // Create a request object
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  alert('User created successfully');
                  register.value = 'Registered!';
              } else {
                  alert('Could not register the user');
                  register.value = 'Register';
              }
          }
        };
        
        // Make the request
        var name = document.getElementById('username').value;
        var number = document.getElementById('number').value;
        var email = document.getElementById('password').value;
        var dob = document.getElementById('password').value;
        var password = document.getElementById('password').value;
        var gender = document.getElementById('password').value;
       
        
           request.open('POST', '/createuser', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username,number: number,email: email,dob: dob,password: password,gender: gender}));  
        submit.value = 'Registering...';
    
    
    };
}

function loadLoggedInUser (username) {
    var loginArea = document.getElementById('login_area');
    loginArea.innerHTML = `
        <h3> Hi <i>${username}</i></h3>
        <a href="/logout">Logout</a>
    `;
}

function loadLogin () {
    // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            if (request.status === 200) {
                loadLoggedInUser(this.responseText);
            } else {
                loadLoginForm();
            }
        }
    };
    
    request.open('GET', '/check-login', true);
    request.send(null);
}

function loadArticles () {
        // Check if the user is already logged in
    var request = new XMLHttpRequest();
    request.onreadystatechange = function () {
        if (request.readyState === XMLHttpRequest.DONE) {
            var articles = document.getElementById('articles');
            if (request.status === 200) {
                var content = '<ul>';
                var articleData = JSON.parse(this.responseText);
                for (var i=0; i< articleData.length; i++) {
                    content += `<li>
                    <a href="/articles/${articleData[i].title}">${articleData[i].heading}</a>
                    (${articleData[i].date.split('T')[0]})</li>`;
                }
                content += "</ul>"
                articles.innerHTML = content;
            } else {
                articles.innerHTML('Oops! Could not load all articles!')
            }
        }
    };
    
    request.open('GET', '/get-articles', true);
    request.send(null);
}


// The first thing to do is to check if the user is logged in!
loadLogin();

// Now this is something that we could have directly done on the server-side using templating too!
loadArticles();
