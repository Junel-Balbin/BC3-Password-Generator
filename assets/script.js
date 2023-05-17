// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword(length) {

 var password = "";
 var characters = "";
 var passwordLength = "";
 var numbers = "0123456789";
 var specialCharacters = "!@#$%^&*+?></";
 var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
 var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
 var passwordLength = prompt("How many characters would you like between 8 - 128?");
   if (passwordLength < 8 || passwordLength > 128) {
      return "Please choose length between 8 - 128.";
   }  else if (isNaN(passwordLength)) {
      passwordLength = prompt("Please enter a valid number of length.");
   }
   else {
      alert("Your password will be " + passwordLength + " characters long");
   }

 var numbers = confirm("Would you like numbers?");
  if (numbers === true) {
    alert("Your password will have numbers.");  
 }

 var specialCharacters = confirm("Would you like Special Characters?");
   if (specialCharacters === true) {
    alert("Your password will have Special Characters.");
  }

 var lowercase = confirm("Would you like Lowercases?");
  if (lowercase === true) {
    alert("Your password will have Lowercases.");
  }

 var uppercase = confirm("Would you like Uppercases?");
  if (uppercase === true) {
    alert("Your password will have Uppercases");
  }
  
 for (var i = 0; i < passwordLength; i++) {
  password += characters[Math.floor(Math.random() * characters.length)];
 }


  return password;

}


  // Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


