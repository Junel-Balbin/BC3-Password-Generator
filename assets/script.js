// Assignment Code.
var generateBtn = document.querySelector("#generate");

// Character Arrays.
var password = "";
var characters = "";
var passwordLength = "";
var numbers = "0123456789";
var specialCharacters = "!@#$%^&*=[]{}/><;:";
var lowercase = "abcdefghijklmnopqrstuvwxyz"; 
var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 
// Main Functions and conditional statements.
function generatePassword() {
  // Prompt for Password Length. With "if, else if statements" and alerts.
  var passwordLength = prompt("How many characters would you like between 8 - 128?");
  if (passwordLength < 8 || passwordLength > 128 || isNaN(passwordLength)) {
    return "IMPORTANT. PLEASE SELECT A LENGTH BETWEEN 8 - 128.";
  } else if (isNaN(passwordLength)) {
    passwordLength = prompt("Please enter a valid number of length between 8 - 128.");
  } else {
    alert("Your password will be " + passwordLength + " characters long.");
  }

  // Confirm for Numbers. With "if, else if statements" and alerts.
  var includeNumbers = confirm("Would you like numbers?");
  if (includeNumbers) {
    characters += numbers;
    alert("Your password will have numbers.");  
  } else {
    alert("Your password will NOT have numbers.");
  }

  // Confirm for Special Characters. With "if, else if statements" and alerts.
  var includeSpecialCharacters = confirm("Would you like Special Characters?");
  if (includeSpecialCharacters) {
    characters += specialCharacters;
    alert("Your password will have Special Characters.");
  } else {
    alert("Your password will NOT have Special Characters.");
  }
  
  // Confirm for Lowercase. With "if, else if statements" and alerts.
  var includeLowercase = confirm("Would you like Lowercases?");
  if (includeLowercase) {
    characters += lowercase;
    alert("Your password will have Lowercase.");
  } else {
    alert("Your password will NOT have Lowercase.");
  }

  // Confirm for Uppercase. With "if, else if statements" and alerts.
  var includeUppercase = confirm("Would you like Uppercase?");
  if (includeUppercase) {
    characters += uppercase;
    alert("Your password will have Uppercase.");
  } else {
    alert("Your password will NOT have Uppercase.");
  }
  
  if (characters.length === 0) {
    return "IMPORTANT. PLEASE SELECT AT LEAST ONE CHARACTER TYPE.";
  }

  // For-Loop with Math.floor & Math.random.
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