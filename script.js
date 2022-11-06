"use strict";

// Assignment Code
const generateBtn = document.querySelector("#generate");
let charSet = ""; //Set of characters for password
let passLength; //Password lenght

// Write password to the #password input
function writePassword() {
  const password = generatePassword();
  let passwordText = document.querySelector("#password");
  passwordText.value = password;
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
  document.querySelector("#password").value = "";

  passLength = Number(
    prompt(
      "Search length of your password. \nNote: number of characters minimum: 8, maximum: 128"
    )
  );

  if (passLength < 8 || passLength > 128) {
    alert("Note: number of characters minimum: 8, maximum: 128");
    return;
  }

  const passLowerCase = confirm(
    "Do you want to iclude lowercase characters to your password?"
  );

  const passUpperCase = confirm(
    "Do you want to iclude uppercase characters to your password?"
  );

  const passNumeric = confirm(
    "Do you want to iclude numeric characters to your password?"
  );

  const passSpecial = confirm(
    "Do you want to iclude special characters to your password?"
  );

  if (!(passUpperCase || passLowerCase || passNumeric || passSpecial)) {
    alert("You have to choose at least one character type for your password");
    return;
  }

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

  generatePassword();
  writePassword();

  charSet = "";
});
