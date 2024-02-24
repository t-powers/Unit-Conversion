let userInput = [];
const inputNumber = document.getElementById("input-number");
const convertButton = document.getElementById("convert-button");
const firstSection = document.getElementById("first-section");
const secondSection = document.getElementById("second-section");
const thirdSection = document.getElementById("third-section");
let meterFootConversion = `
      ${userInput} meters = ${userInput[i] * 3.28084} feet  |  
      ${userInput[i] * 3.28084} feet = ${userInput} meters
      `;
let literGallonConversion = `
      ${userInput} meters = ${userInput[i] * 3.28084} feet  |  
      ${userInput[i] * 3.28084} feet = ${userInput} meters
      `;
let KiloPoundConversion = `
      ${userInput} meters = ${userInput[i] * 3.28084} feet  |  
      ${userInput[i] * 3.28084} feet = ${userInput} meters
      `;

convertButton.addEventListener("click", function () {
  userInput.push(inputNumber.value);
  renderInput();
});

function renderInput() {
  let inputItem = "";
  for (let i = 0; i < userInput.length; i++) {
    inputItem += meterFootConversion;
    inputItem += literGallonConversion;
    inputItem += KiloPoundConversion;
    

  }
  firstSection.innerHTML = inputItem;
  second
}
