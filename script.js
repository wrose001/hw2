// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;

var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"];

function promptPassword() {
    var isValidationPass = false;

    while(isValidationPass === false){
        var passwordPrompt = prompt("How many characters do you want your password to contain?");
        if(passwordPrompt > 7 && passwordPrompt < 128) {
            passwordLength = passwordPrompt; //using parseInt to convert string to integer
            isValidationPass = true; //this will force while loop to end
        }
        else{
            alert("Password must be more than 8 characters and less than 128 characters.")
        }
    }

//Write code below for generation//
//Weston once you gave your logic to randomize and generate a password you'll have to update the
//variable 'generatePassword' with your random password
//Right now this is just a placeholder and will always output 'MY_GENERATED_PASSWORD_HERE' as the random password    

var generatePassword = "MY_GENERATRED_PASSWORD_HERE";

//Insert code here

return generatePassword;//return results of generated password. Shouldn't have to modify this line
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
generateBtn.addEventListener("click", writePassword); 


// BONUS EVENT LISTENER
