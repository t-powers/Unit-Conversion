let userInput = [];
const inputNumber = document.getElementById("input-number");
const convertButton = document.getElementById("convert-button");
const firstSection = document.getElementById("first-section");

convertButton.addEventListener("click", function () {});

function renderInput() {
  for (let i = 0; i < userInput.length; i++) {
    firstSection += userInput[i];
  }
}
