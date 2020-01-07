// Assignment Code
var generateBtn = document.querySelector("#generate");
var clipboardBtn = document.querySelector("#password");
var passwordLength = 0;
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", '9'];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"];
var availableCharacter = [];

// var passwordPrompt = prompt("How many characters do you want your password to contain?");
//     if(passwordPrompt > 7 && passwordPrompt < 128) {
//         passwordLength = passwordPrompt;
//         isValidationPass = true;
//     } 
//     else {
//         alert("Password must be more than 8 characters and less than 128 characters")
//     }
// var password = generatePassword();
// var passwordText = document.querySelector("#password");
// passwordText.value = password;

function generatePassword() {
    // Validate length of password. Use a while loop to repeat validation unil user types in correct input
    var newPassword = "";
    availableCharacter = [];
    var isValidationPass = false;
    while (isValidationPass == false) {
        var passwordPrompt = parseInt(prompt("How many characters do you want your password to contain?"));
        console.log(typeof passwordPrompt);
        if (passwordPrompt > 7 && passwordPrompt < 129) {
            passwordLength = passwordPrompt; // using parseInt to convert string to integer
            // alert("Yay password validation worked. Length is set to " + passwordLength); // Weston feel free to remove this alert
            isValidationPass = true; // this will force while loop to end
        } else {
            alert("Password must be more than 8 characters and less than 128 characters.")
        }
    }
    wantUppercase()
    wantLowercase()
    wantNumbers()
    wantSpecialCharacters()
    if (availableCharacter.length === 0) {
        alert("You must choose at least one type of character!")
        generatePassword()
    } //may needs an else statement here
    for (alpha = 0; alpha < passwordPrompt; alpha++) {
        var characterGroupSelector = availableCharacter[Math.floor(Math.random() * availableCharacter.length)];
        var characterSelector = characterGroupSelector[Math.floor(Math.random() * characterGroupSelector.length)];
        newPassword = newPassword.concat(characterSelector);
    }
    /////// Write code below for password generation ///////////
    // Weston once you have your logic to randomize and generate a password you'll have to update the
    // variable 'genratedPassword' with your random password
    // Right now this is just a placeholder and will always output 'MY_GENERATED_PASSWORD_HERE' as the random password
    // var genratedPassword = "MY_GENERATED_PASSWORD_HERE";
    // Insert Code Here
    return newPassword; // return results of generated password. Shouldn't have to modify this line.
}

function wantUppercase() {
    var isUppercase = confirm("Do you want uppercase letters?");
    if (isUppercase) {
        availableCharacter = availableCharacter.concat(uppercaseLetters);
        console.log(availableCharacter);
    }

}


function wantLowercase() {
    var isLowercase = confirm("Do you want lowercase letters?");
    if (isLowercase) {
        availableCharacter = availableCharacter.concat(lowercaseLetters);
        console.log(availableCharacter);
    }

}


function wantNumbers() {
    var isNumbers = confirm("Do you want numbers?");
    if (isNumbers) {
        availableCharacter = availableCharacter.concat(numbers);
        console.log(availableCharacter);
    }

}


function wantSpecialCharacters() {
    var isSpecialCharacters = confirm("Do you want special characters?");
    if (isSpecialCharacters) {
        availableCharacter = availableCharacter.concat(specialCharacters);
        console.log(availableCharacter);
    }

}

function copyToClipboard() {
    var copyPassword = document.getElementById("password");
    copyPassword.select();
    copyPassword.addEventListener(0, 99999);
    document.execCommand("copy");
    alert("Copy your password: " + copyPassword.value);
}

// Write password to the #password input
// function writePassword() {
//   var clickPassword = prompt("How many characters do you want your password to contain?");
//     if(clickPassword <= 7) {
//         alert("Must be at least 8 characters.");
//     } else {
//         (clickPassword >= 129) 
//         alert("Must be less than 128 characters.");
//     }
// }
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = password;

    // copyBtn.removeAttribute("disabled");
    // copyBtn.focus();
}

clipboardBtn.addEventListener("click", copy);




// function copyToClipboard() {
//     // BONUS 
// }
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
// Calvin note: you dont need (so I commented out) however there was a syntax issue with this function and I resolved
// Will provide a screenshot of where I fixed
// document.addEventListener("click", event => {
//     console.log(event.target);
//     if(!event.target.matches('#generate')){
//         return;
//     }
//     if(event.target.matches('#generate')){
//         promptPassword();
//     }
// });
// BONUS EVENT LISTENER