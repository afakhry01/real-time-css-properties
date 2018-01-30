document.addEventListener("DOMContentLoaded", function() {
  const inputs = document.querySelectorAll('input');

function updateControls() {
  var suffix;
  (this.type == "range") ? suffix = "px" : suffix = "";
  document.documentElement.style.setProperty("--"+this.name,this.value+suffix);
    console.log(this.value+suffix);
}

  inputs.forEach(input => input.addEventListener('change', updateControls));
});

// const inputs = document.querySelectorAll('input');
// console.log(inputs);
// // function adjustPicture() {
// //   console.log("inputs");
// // }
//
// inputs.forEach(function(evt) {
//   this.addEventListener('mouseover', function () {
//     console.log("this");
//   });
// });
//
//
// // addEventListener('change', function adjustPicture() {
// //   console.log("inputs");
// // }));
