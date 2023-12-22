// Assignment Code
const generateBtn = document.querySelector("#generate");

// Write password to the #password input

// Create a function to handle the geneartion of the password when the button is clicked...

// Define generatePassword function:

  // Initialize varaibles to store:
    // User's choice for character types and length
    // Possible characters for password
    // Final password result

  // Prompt user for password lenght
    // Validate the input (must be a number between 8 and 128)
    // If invalid, alert the user and return out of the function
  
  // Confirm with user whether to include:
    // Lowercase characters
      // make array
    // Uppercase characters
      // make array
    // Numeric characters
      // make array
    //Special characters
      // make array 
    // Validate that at least one type of character is selected
    // If no types are selected, alert the user and return out of the function

  // Based on user confirmations, concatenate the relevant characters to the possible characters string

  //For each character in the final password:
    // Randomly select a character from the possible character string
      // CAN I ADD ARRAYS TOGETHER? like if i make arrays for each character type and then like an if statement thing where its like IF x, y, z were selected for character types, then possible character's array = array[x] + array[y] + array[z] ?????
    // Add this character to the final password result string

    //Retunr the final password result:


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






  
}



function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
