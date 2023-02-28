const express = require('express');
const app = express();
const port = 3000;
const path = require('path');

var apiWorking = {
  "message": "working"
}

app.get('/', function(req, res) {
  res.json(apiWorking)
});

function verifySgMobile(phoneNumber) { 
  var errorMsg = "";

  if (phoneNumber == "") {
    errorMsg = "Enter mobile number";
  }
  if (phoneNumber != "") {
    if (phoneNumber.toString().includes("+") == true) {
      errorMsg = "Invalid character";
    }

    if (phoneNumber.toString().startsWith("9", 0) == false
      || phoneNumber.toString().startsWith("8", 0) == false) {
      errorMsg = "Invalid mobile number";
    }
    if (phoneNumber.toString().startsWith("65", 0) == true) {
      errorMsg = "65 is not required";
    }
    if (phoneNumber.toString().startsWith("+65", 0) == true) {
      errorMsg = "+65 is not required";
    }
    if (phoneNumber.toString().startsWith("9", 0) == true
      || phoneNumber.toString().startsWith("8", 0) == true) {
        
      if (phoneNumber.toString().length < 8) {
        errorMsg = "Mobile number is incomplete";
      }
      if (phoneNumber.toString().length > 8) {
        errorMsg = "Mobile number is too long";
      }
      if (phoneNumber.toString().length == 8) {
        errorMsg = "Valid mobile number";
      }
      
    }
  }
  return (errorMsg)
}
app.get('/check', function(req, res) {
  res.json({"message": "Mobile number parameter is required"})
});

app.get('/check/:mobile', function(req, res) {
  res.send({
    "message": verifySgMobile(`${req.params.mobile}`)
  })
});

app.use((req, res) =>{
  res.sendFile("./views/404.html",{root: __dirname})
})
 
app.listen(port, () => {
})