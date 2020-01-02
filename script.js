// Assignment Code
var generateBtn = document.querySelector("#generate");
var passwordLength = 0;
var uppercaseLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "?", "~"];
function generatePassword() {
    // Validate length of password. Use a while loop to repeat validation unil user types in correct input
    var isValidationPass = false;
    while(isValidationPass == false) {
        var passwordPrompt = prompt("How many characters do you want your password to contain?");
        if(passwordPrompt > 7 && passwordPrompt < 128) {
            passwordLength = passwordPrompt; // using parseInt to convert string to integer
            alert("Yay password validation worked. Length is set to " + passwordLength); // Weston feel free to remove this alert
            isValidationPass = true; // this will force while loop to end
        }
        else {
            alert("Password must be more than 8 characters and less than 128 characters.")
        }
    ///////// Write code below for password generation ///////////
    // Weston once you have your logic to randomize and generate a password you'll have to update the
    // variable 'genratedPassword' with your random password
    // Right now this is just a placeholder and will always output 'MY_GENERATED_PASSWORD_HERE' as the random password
    var genratedPassword = "MY_GENERATED_PASSWORD_HERE";
    // Insert Code Here
    return genratedPassword; // return results of generated password. Shouldn't have to modify this line.
}
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
  copyBtn.removeAttribute("disabled");
  copyBtn.focus();
}
function copyToClipboard() {
  // BONUS 
}
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