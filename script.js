// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;

var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"];

function promptPassword() {
    var passwordPrompt = prompt("How many characters do you want your password to contain?");
    function validateLength(password){
        if(password > 7 && password < 128){
            passwordLength = password
        }
        else {
            alert("Password must be more than 8 characters and less than 128 characters.")
        }
    }
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  } 

  passwordText.value = password;

  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}

function copyToClipboard() {
  // BONUS 
}

// Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

document.addEventListener("click", event => {
    if(!event.target.matches('#generate')){
        return;
    }
    if(event.target.matches('#generate')){
        promptPassword()
    }
}


// BONUS EVENT LISTENER
