const length = document.getElementById("first-section");

const volume = document.getElementById("second-section");

const mass = document.getElementById("third-section");

const convertBtn = document.getElementById("convert-button");

let inputNumber = document.getElementById("input-number");

convertBtn.addEventListener("click", function () {
    length.innerHTML = inputNumber.value;
    volume.innerHTML = inputNumber.value;   
    mass.innerHTML = inputNumber.value;
});
