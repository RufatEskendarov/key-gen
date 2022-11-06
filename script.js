"use strict";

// Assignment Code
const generateBtn = document.querySelector("#generate");
let charSet = ""; //Set of characters for password
let passLength; //Password lenght
let passLowerCase; // Confirmation for Lower case characters from USER (true/false)
let passUpperCase; // Confirmation for Upper case characters from USER (true/false)
let passNumeric; // Confirmation for Numeric characters from USER (true/false)
let passSpecial; // Confirmation for special characters from USER (true/false)

// writes password to the #password input
function writePassword() {
  const password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
}

//Selection criteria for the password (character type)

function characterTypeSelection() {
  passLowerCase = confirm(
    "Do you want to iclude lowercase characters to your password?"
  );

  passUpperCase = confirm(
    "Do you want to iclude uppercase characters to your password?"
  );

  passNumeric = confirm(
    "Do you want to iclude numeric characters to your password?"
  );

  passSpecial = confirm(
    "Do you want to iclude special characters to your password?"
  );
}

//Function for adding characters to the charSet
function charSetUpdate() {
  if (passLowerCase) {
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }
  if (passUpperCase) {
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  if (passNumeric) {
    charSet += "0123456789";
  }
  if (passSpecial) {
    charSet += "!'#$%&'()*+,-./:;<=>?@[]^_`{|}~";
  }
}

//Password generation function
function generatePassword() {
  let password = "";
  for (let i = 0, n = charSet.length; i < passLength; ++i) {
    password += charSet.charAt(Math.floor(Math.random() * n));
  }
  return password;
}
// Add event listener to generate button

generateBtn.addEventListener("click", function () {
  //Cleaning password outpet window for next generation
  document.querySelector("#password").value = "";

  //Password length selection (by User)
  passLength = Number(
    prompt(
      "Search length of your password. \nNote: number of characters minimum: 8, maximum: 128"
    )
  );

  //Password length validation
  if (passLength < 8 || passLength > 128) {
    alert("Note: number of characters minimum: 8, maximum: 128");
    return;
  }

  //Selection prifered Character types
  characterTypeSelection();

  //Character types validation
  if (!(passUpperCase || passLowerCase || passNumeric || passSpecial)) {
    alert("You have to choose at least one character type for your password");
    return;
  }

  //Adding characters to a charSet String
  charSetUpdate();

  //Password generation
  generatePassword();

  //Displaying the password in the output window
  writePassword();

  //Reset charSet to empty String for next generation
  charSet = "";
});
