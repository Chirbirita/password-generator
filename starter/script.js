// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
function getPasswordOptions() {
  // variable to store length of passworkd from user input
  let length = parseInt(
    prompt("How many characters should the passwork have?")
  )

  if (isNaN(lenght) === true) {
    alert(`Password lenght must be provided as a number`);
    return;
  }

  if (length < 10) {
    alert(`Password lenght must be at least 10 characters`);
    return;
  }

  if (length > 64) {
    alert(`Password must be less than 65 characters`);
    return;
  }

  let hasSpecialCharacters = confirm(
    "Click OK to confirm including special characters"
  )

  let hasNumericCharacters = confirm(
    "Click OK to confirm including numeric characters"
  )

  let hasLowerCased = confirm(
    "Click OK to confirm including lowercase characters"
  )

  let hasUpperCased = confirm(
    "Click OK to confirm including uppercase characters"
  )

  if (hasLowerCased === false &&
    hasUpperCased === false &&
    hasSpecialCharacters === false &&
    hasNumericCharacters === false) {
    alert(`Must select at least one character type`);
    return
  }

  let PasswordOptions = {
    length: length,
    hasSpecialCharacters: hasSpecialCharacters,
    hasNumericCharacters: hasNumericCharacters,
    hasLowerCased: hasLowerCased,
    hasUpperCased: hasUpperCased
  }

  console.log(PasswordOptions);

  return PasswordOptions;
}


// Function for getting a random element from an array
function getRandom(arr) {
  let randomIndex = Math.floor(Math.random() * arr.length);
  let randomElement = arr[randomIndex];

  return randomElement;
}

// Function to generate password with user input
function generatePassword() {
  let options = getPasswordOptions();
  console.log(options);
  let result = []

  let possibleCharacter = []

  let guaranteedCharacter = []

  if(options.hasSpecialCharacters){
    possibleCharacter = possibleCharacter.concat(specialCharacters);
    guaranteedCharacter.push(getRandom(specialCharacters))
  }

  console.log

}



// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);

