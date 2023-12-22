// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Define the generatePassword function
function generatePassword(){

  // DETERMINING PASSWORD LENGTH
  // prompt user for password length and parse it to an integer
  let passwordLength = parseInt(prompt("Enter the number of characters for your password (8-128):")); 

  //Validate password length
  while(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Password length must be an integer between 8 and 128 characters. How many characters should the password be?")) //paswordLength won't be officially set until the user inputs a valid integer 
  } 

  // DETERMING POSSIBLE CHARACTERS FOR PASSWORD
  // Confirm character types to include
  let includeLowercase = confirm("Include lowercase letters?");
  let includeUppercase = confirm("Include uppercase letters?");
  let includeNumeric = confirm("Include numbers?");
  let includeSpecialCharacters = confirm("Include special characters?");

  // Validate character type selection (at least one must be selected)
  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialCharacters) {
    alert("At least one character type must be selected.");
    includeLowercase = confirm("Include lowercase letter?");
    includeUppercase = confirm("Include uppercase letters?");
    includeNumeric = confirm("Include numbers?");
    includeSpecialCharacters = confirm("Include special characters?");
  }

  // Initialize arrays for each character type
  // using `split('')` to convert each string of characters into an array of individual characters
  const lowercaseArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
  const uppercaseArray = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
  const numbersArray = '0123456789'.split('');
  const specialArray = ' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~'.split('');
  

  // Initialize an array to store possible characters for password
  let possibleCharacters = [];

  // Concatenating arrays based on user choice for character types
  if (includeLowercase) {
    possibleCharacters = possibleCharacters.concat(lowercaseArray);
  }
  if (includeUppercase) {
    possibleCharacters = possibleCharacters.concat(uppercaseArray);
  }
  if (includeNumeric) {
    possibleCharacters = possibleCharacters.concat(numbersArray);
  }
  if (includeSpecialCharacters) {
    possibleCharacters = possibleCharacters.concat(specialArray);
  }
  
  // GENERATING FINAL PASSWORD
  // Initializing a variable to store the final password result
  let finalPassword = "";

  // creating a for loop that runs as many times as the length of the password set by the user (starting at 0 and incrementing after each iteration until it reaches `passwordLength`) 
  for (let i=0; i < passwordLength; i++){
    // using Math.floor(Math.random() * possibleCharacters.length) to set a value for the randomIndex for placement i in the password based on rounding down the value of the random number generated between 0 (inclusive) & 1 (exclusive)multiplied by the length of our possibleCharacters array in order to get a random number to correspond to a value in the array
    // i.e., say the array has a length of 10 (as if the user only selected numeric characters) and the random number generated is 0.99. Math.floor(0.99 * 10) === Math.floor(9.9) --> which rounds down to the nearest whole number which, in this case, is 9. Thus, randomIndex = 9.
    const randomIndex = Math.floor(Math.random() * possibleCharacters.length);

    // Adding the character at `randomIndex` in the `possibleCharacters` array to the right-hand side of the final password
    // i.e., continuing the above example, where the password only contains numeric characters from our array ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'] (and keeping in mind that arrays are zero-indexed), possibleCharacter[9] = 9, so 9 is the value that will be added to the right-hand side of the final passwod
    finalPassword += possibleCharacters[randomIndex];
  }
  // after the loop completes (i.e., after `passwordLength` iterations), this line returns the final, randomly-generated password string. 
  return finalPassword;
}

function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
