const convertButton = document.getElementById("convert-button")
const lengthEl = document.getElementById("length-el")
const volumeEl = document.getElementById("volume-el")
const massEl = document.getElementById("mass-el")

convertButton.addEventListener("click", function() {
    const inputNumber = document.getElementById("input-number").value
    
    // Conversion for the length
    let lengthMeter = inputNumber * 3.281
    let lengthFeet = inputNumber / 3.281
    lengthEl.innerText = `${inputNumber} meters = ${lengthMeter.toFixed(3)} feet | ${inputNumber} feet = ${lengthFeet.toFixed(3)} meters`
    
    // Conversion for the volume    
    let volumeGallons = inputNumber * 0.264 
    let volumeLiters = inputNumber / 0.264
    volumeEl.innerText = `${inputNumber} liters = ${volumeGallons.toFixed(3)} gallons | ${inputNumber} gallons = ${volumeLiters.toFixed(3)} liters`
    
    // Conversion for the mass
    let massKg = inputNumber * 2.204
    let massPound = inputNumber / 2.204
    massEl.innerText = `${inputNumber} kilos = ${massKg.toFixed(3)} pounds | ${inputNumber} pounds = ${massPound.toFixed(3)} kilos`
}
)