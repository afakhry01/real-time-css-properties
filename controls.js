// Start only when DOM is loaded
document.addEventListener("DOMContentLoaded", function() {
  // Range and color data attributes
  const inputs = document.querySelectorAll('input');
  // Modifies style variables
  function updateControls() {
    var suffix;
    (this.type == "range") ? suffix = "px" : suffix = "";
    document.documentElement.style.setProperty("--"+this.name,this.value+suffix);
      console.log(this.value+suffix);
  }
  // Run updateControls function when changes happen
  inputs.forEach(input => input.addEventListener('change', updateControls));
});
