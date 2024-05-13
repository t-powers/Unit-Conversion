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
  let feetToMeter = meterInput / 3.281
  length.innerHTML = `${meterInput} meters = ${meterToFeet.toFixed(3)} feet  |  ${meterInput} feet = ${feetToMeter.toFixed(3)} meters`;
}

// divide liter to gallon by 3.785
function volumeConversion() {
  const volume = document.getElementById("second-section");
  volume.innerHTML = inputNumber.value;
}

// multiply kilograms to pounds by 2.205
function massConversion() {
  const mass = document.getElementById("third-section");
  mass.innerHTML = inputNumber.value;
}
