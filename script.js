const convertBtn = document.getElementById("convert-button");

let inputNumber = document.getElementById("input-number");

convertBtn.addEventListener("click", function () {
  lengthConversion();
  volumeConversion();
  massConversion();
});

// multiply meter to feet by 3.281, divide for feet to meter
function lengthConversion() {
  const length = document.getElementById("first-section");
  let meterInput = inputNumber.value;
  let meterToFeet = meterInput * 3.281;
  let feetToMeter = meterInput / 3.281;
  length.innerHTML = `${meterInput} meters = ${meterToFeet.toFixed(
    3
  )} feet  |  ${meterInput} feet = ${feetToMeter.toFixed(3)} meters`;
}

// divide liter to gallon by 3.785
function volumeConversion() {
  const volume = document.getElementById("second-section");
  let volumeInput = inputNumber.value;
  let literToGallon = volumeInput / 3.785;
  let gallonToLiter = volumeInput * 3.785;
  volume.innerHTML = `${volumeInput} liters = ${literToGallon.toFixed(
    3
  )} gallons  |  ${volumeInput} gallons = ${gallonToLiter.toFixed(3)} liters`;
}

// multiply kilograms to pounds by 2.205
function massConversion() {
  const mass = document.getElementById("third-section");
  let massInput = inputNumber.value;
  let kiloToPounds = massInput * 2.205;
  let poundsToKilo = massInput / 2.205;
  mass.innerHTML = `${massInput} kilograms = ${kiloToPounds.toFixed(
    3
  )}  |  ${massInput} pounds = ${poundsToKilo.toFixed(3)} kilograms`;
}
