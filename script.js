const convertBtn = document.getElementById("convert-button");

let inputNumber = document.getElementById("input-number");

convertBtn.addEventListener("click", function () {
  lengthConversion();
  volumeConversion();
  massConversion();
});

function lengthConversion() {
  const length = document.getElementById("first-section");
  length.innerHTML = inputNumber.value;
}

function volumeConversion() {
  const volume = document.getElementById("second-section");
  volume.innerHTML = inputNumber.value;
}

function massConversion() {
  const mass = document.getElementById("third-section");
  mass.innerHTML = inputNumber.value;
}
