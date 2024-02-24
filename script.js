let userInput = [];
const inputNumber = document.getElementById("input-number");
const convertButton = document.getElementById("convert-button");
const firstSection = document.getElementById("first-section");

convertButton.addEventListener("click", function () {
  userInput.push(inputNumber.value);
  renderInput();
});

function renderInput() {
  let inputItem = "";
  for (let i = 0; i < userInput.length; i++) {
    inputItem += `
      ${userInput} meters = ${userInput[i] * 3.28084} feet  |  
      ${userInput[i] * 3.28084} feet = ${userInput} meters
      `;
  }
  firstSection.innerHTML = inputItem;
}
