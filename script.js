// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var passwordLength = prompt("How many characters would you like your password to be?")
  var lowercase = prompt("Would you like lowercase letters in your password?")
  var uppercase = prompt("Would you like uppercase letters in your password?")
  var numbers = prompt("Would you like numbers in your password?")
  var special = prompt("Would you like special characters in your password?")
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
