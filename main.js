// JavaScript to dynamically update the displayed value
const rangeSlider = document.getElementById("rangeSlider");
const valueDisplay = document.getElementById("valueDisplay");

// Update display as the range slider value changes
rangeSlider.addEventListener("input", () => {
  valueDisplay.textContent = rangeSlider.value;
});
