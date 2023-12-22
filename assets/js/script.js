// Assignment Code
const generateBtn = document.querySelector("#generate");

// Define the generatePassword function
function generatePassword(){


  // DETERMINING PASSWORD LENGTH

  // Prompt user for password length and parse it to an integer
  let passwordLength = parseInt(prompt("Enter the number of characters for your password (8-128):")); 

  //Validate password length
  while(isNaN(passwordLength) || passwordLength < 8 || passwordLength > 128) {
    passwordLength = parseInt(prompt("Password length must be an integer between 8 and 128 characters. How many characters should the password be?")) // Repeat prompt until a valid integer between 8 and 128 is entered
  } 


  // DETERMING POSSIBLE CHARACTERS FOR PASSWORD

  // Confirm inclusion of various character types
  let includeLowercase = confirm("Include lowercase letters?");
  let includeUppercase = confirm("Include uppercase letters?");
  let includeNumeric = confirm("Include numbers?");
  let includeSpecialCharacters = confirm("Include special characters?");

  // Validate that at least one character type is selected and, if not, repeat confirm functions until at least one character type is selected
  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecialCharacters) {
    alert("At least one character type must be selected.");
    includeLowercase = confirm("Include lowercase letters?");
    includeUppercase = confirm("Include uppercase letters?");
    includeNumeric = confirm("Include numbers?");
    includeSpecialCharacters = confirm("Include special characters?");
  }

  // Initialize arrays for each character type
  // Using `split('')` to convert each string of characters into an array of individual characters
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

  // Loop to create a password of the user-defined length
  for (let i=0; i < passwordLength; i++){
    // Generate a random index to select a character from possibleCharacters
    // Math.random() randomly generates a number between 0 (inclusive) and 1 (exclusive)
    // Multiplying by possibleCharacters.length scales the randomly generated number to the array length
    // Math.floor() rounds down to the nearest whole number, producing a valid array index
    const randomIndex = Math.floor(Math.random() * possibleCharacters.length);

    // Append the character at randomIndex from possibleCharacters to finalPassword
    finalPassword += possibleCharacters[randomIndex];
  }
  // Returning the final, randomly-generated password string after the loop completes (i.e., after `passwordLength` iterations)
  return finalPassword;
}

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
