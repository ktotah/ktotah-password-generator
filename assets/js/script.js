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

  
function writePassword() {
  const password = generatePassword();
  const passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
