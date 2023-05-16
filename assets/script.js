// Assignment Code
var generateBtn = document.querySelector("#generate");

var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]; 
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);





var characters = "";
numbers = "0123456789";

var numbers = confirm("Do you want numbers?");
  if (numbers) {
  characters += "0123456789";
}


var characters = "";
specialCharacters = "!@#$%^&*";

var specialCharacters = confirm("Would you like Special Characters?");
  if (specialCharacters) {
    characters += "!@#$%^&*";
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



// for-loop
// for (var i = 0; i < password.length; i++) {
//      password += characters[Math.floor(Math.random() * characters.length)];
//    }

// input = confirm("Choose your password criteria");