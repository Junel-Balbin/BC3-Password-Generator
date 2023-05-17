// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = "";
var passwordLength = "";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*+?></";
var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function generatePassword(length) {
  password = "";
  passwordLength = "";
 
  var passwordLength = prompt("How many characters would you like between 8 - 128?");
   if (passwordLength >= 8 && passwordLength <= 128) {
       password.length = passwordLength;
   }
   else {
    alert("Please choose length between 8 - 128 characters");
   }


 var characters = "";
 numbers = "0123456789";

 var numbers = confirm("Would you like numbers?");
  if (numbers) {
  characters += "0123456789";
 }


 var characters = "";
 specialCharacters = "!@#$%^&*+?></";

 var specialCharacters = confirm("Would you like Special Characters?");
   if (specialCharacters) {
    characters += "!@#$%^&*+?></";
  }


 var characters = "";
 lowercase = "abcdefghijklmnopqrstuvwxyz";

 var lowercase = confirm("Would you like Lowercases?");
  if (lowercase) {
    characters += "abcdefghijklmnopqrstuvwxyz";
  }


 var characters = "";
 uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

 var uppercase = confirm("Would you like Uppercases?");
  if (uppercase) {
    characters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }


 for (var i = 0; i < password.length; i++) {
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


