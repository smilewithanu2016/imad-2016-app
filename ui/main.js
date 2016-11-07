console.log('Loaded!');


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
                  register.value = 'Registered!';
              } else {
                  alert('Could not register the user');
                  register.value = 'Register';
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
        
           request.open('POST', '/blogsignup', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({name: name,userid: userid,number: number,email: email,dob: dob,password: password,gender: gender}));  
        register.value = 'Registering...';
    
    };
}