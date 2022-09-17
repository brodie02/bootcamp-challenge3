// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var chars = {
    all: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!#$%&*+/:;<=>?@\^_`{|}~",
    notUpper: "abcdefghijklmnopqrstuvwxyz1234567890!#$%&*+/:;<=>?@\^_`{|}~",
    notLower: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#$%&*+/:;<=>?@\^_`{|}~",
    notNumber: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!#$%&*+/:;<=>?@\^_`{|}~",
    notSpecial: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890",
    upperLower: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    upperNumber: "ABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890",
    upperSpecial: "ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$%&*+/:;<=>?@\^_`{|}~",
    lowerNumber: "abcdefghijklmnopqrstuvwxyz1234567890",
    lowerSpecial: "abcdefghijklmnopqrstuvwxyz!#$%&*+/:;<=>?@\^_`{|}~",
    numberSpecial: "1234567890!#$%&*+/:;<=>?@\^_`{|}~",
    upper: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
    lower: "abcdefghijklmnopqrstuvwxyz",
    numbers: "1234567890",
    special: "!#$%&*+/:;<=>?@\^_`{|}~"
  }

  var pwdLength = prompt("How many characters would you like your password to be?")

  while ((pwdLength <8)||
  (pwdLength >128)) {
    if ((pwdLength <8)||
    (pwdLength >128)) {
      pwdLength = prompt("Please choose between 8-128")
    }
  }

  var pwdLowercase = confirm("Would you like lowercase letters in your password?")
  var pwdUppercase = confirm("Would you like uppercase letters in your password?")
  var pwdNumbers = confirm("Would you like numbers in your password?")
  var pwdSpecial = confirm("Would you like special characters in your password?")

  if (pwdLowercase && pwdUppercase && pwdNumbers && pwdSpecial) {
      for (let i = 1; i <= pwdLength; i++) {
        var char = Math.floor(Math.random() * chars.all.length + 1);
        password += chars.all.charAt(char)
    }
  } else if (pwdLowercase && pwdUppercase && pwdNumbers) {
      for (let i = 1; i <= pwdLength; i++) {
        var char = Math.floor(Math.random() * chars.notSpecial.length + 1);
        password += chars.notSpecial.charAt(char)
      }
  } else if (pwdLowercase && pwdUppercase && pwdSpecial) {
    for (let i = 1; i <= pwdLength; i++) {
      var char = Math.floor(Math.random() * chars.notNumber.length + 1);
      password += chars.notNumber.charAt(char)
    }
  } else if (pwdNumbers && pwdUppercase && pwdSpecial) {
    for (let i = 1; i <= pwdLength; i++) {
      var char = Math.floor(Math.random() * chars.notLower.length + 1);
      password += chars.notLower.charAt(char)
    }
  } else if (pwdNumbers && pwdLowercase && pwdSpecial) {
    for (let i = 1; i <= pwdLength; i++) {
      var char = Math.floor(Math.random() * chars.notUpper.length + 1);
      password += chars.notUpper.charAt(char)
    }
  } else if (pwdLowercase && pwdUppercase) {
    for (let i = 1; i <= pwdLength; i++) {
      var char = Math.floor(Math.random() * chars.upperLower.length + 1);
      password += chars.upperLower.charAt(char)
    }
  } else if (pwdNumbers && pwdUppercase) {
    for (let i = 1; i <= pwdLength; i++) {
      var char = Math.floor(Math.random() * chars.upperNumber.length + 1);
      password += chars.upperNumber.charAt(char)
    }
  } else if (pwdUppercase && pwdSpecial) {
    for (let i = 1; i <= pwdLength; i++) {
      var char = Math.floor(Math.random() * chars.upperSpecial.length + 1);
      password += chars.upperSpecial.charAt(char)
    }
  } else if (pwdNumbers && pwdLowercase) {
    for (let i = 1; i <= pwdLength; i++) {
      var char = Math.floor(Math.random() * chars.lowerNumber.length + 1);
      password += chars.lowerNumber.charAt(char)
    }
  } else if (pwdLowercase && pwdSpecial) {
    for (let i = 1; i <= pwdLength; i++) {
      var char = Math.floor(Math.random() * chars.lowerSpecial.length + 1);
      password += chars.lowerSpecial.charAt(char)
    }
  } else if (pwdNumbers && pwdSpecial) {
    for (let i = 1; i <= pwdLength; i++) {
      var char = Math.floor(Math.random() * chars.numberSpecial.length + 1);
      password += chars.numberSpecial.charAt(char)
    }
  } else if (pwdUppercase) {
    for (let i = 1; i <= pwdLength; i++) {
      var char = Math.floor(Math.random() * chars.upper.length + 1);
      password += chars.upper.charAt(char)
    }
  } else if (pwdLowercase) {
    for (let i = 1; i <= pwdLength; i++) {
      var char = Math.floor(Math.random() * chars.lower.length + 1);
      password += chars.lower.charAt(char)
    }
  } else if (pwdNumbers) {
    for (let i = 1; i <= pwdLength; i++) {
      var char = Math.floor(Math.random() * chars.numbers.length + 1);
      password += chars.numbers.charAt(char)
    }
  } else if (pwdSpecial) {
    for (let i = 1; i <= pwdLength; i++) {
      var char = Math.floor(Math.random() * chars.special.length + 1);
      password += chars.special.charAt(char)
    }
  }
  return password

}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
