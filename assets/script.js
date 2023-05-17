// Assignment Code
var generateBtn = document.querySelector("#generate");

var password = "";
var characters = "";
var passwordLength = "";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*+?></";
var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 

 function generatePassword() {
 
 var passwordLength = prompt("How many characters would you like between 8 - 128?");
  if (passwordLength < 8 || passwordLength > 128) {
  return "Please select a length between 8 - 128.";
  }  else if (isNaN(passwordLength)) {
     passwordLength = prompt("Please enter a valid number of length.");
  }
     else {
     alert("Your password will be " + passwordLength + " characters long");
  }


 var includeNumbers = confirm("Would you like numbers?");
  if (includeNumbers) {
   characters += numbers;
  alert("Your password will have numbers.");  
  } 

 var includeSpecialCharacters = confirm("Would you like Special Characters?");
  if (includeSpecialCharacters) {
   characters += specialCharacters;
   alert("Your password will have Special Characters.");
  }

 var includeLowercase = confirm("Would you like Lowercases?");
  if (includeLowercase) {
    characters += lowercase;
    alert("Your password will have Lowercase.");
  }

 var includeUppercase = confirm("Would you like Uppercase?");
  if (includeUppercase) {
    characters += uppercase;
    alert("Your password will have Uppercase.");
  }

  if (characters.length === 0) {
    return "Please select at least one character type.";
  }


 var password = "";
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


