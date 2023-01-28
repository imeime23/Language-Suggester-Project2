window.addEventListener("load", function () {
  let form = document.querySelector("form");
  let resetBtn = document.getElementById("reset");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const ageFieldValue = document.getElementById("ageInput").value;
    const age = parseInt(ageFieldValue, 10);
    const heightFieldValue = document.getElementById("heightInput").value;
    const height = parseInt(heightFieldValue, 10);
    const hairFieldValue = document.getElementById("hairInput").value;
    const colorFieldValue = document.getElementById("colorInput").value;
    const mathFieldValue = document.getElementById("mathInput").value;

    if (age >= 25 && height >= 60) {
      document.getElementById("java").removeAttribute("class");
    } else if (age <= 24 && height <= 59) {
      document.getElementById("python").removeAttribute("class");
      //if the age is less than or equal to 15 or the user likes blue/black/red/pink then learn ruby
    } else if (
      age <= 15 ||
      colorFieldValue == "blue" ||
      colorFieldValue == "black" ||
      colorFieldValue == "red" ||
      colorFieldValue == "pink" ||
      hairFieldValue == "blonde" ||
      mathFieldValue == "yes"
    ) {
      document.getElementById("ruby").removeAttribute("class");
    }
  });

  // new event listener for form submit event to show reset button
  form.addEventListener("submit", function () {
    resetBtn.removeAttribute("class");
  });

  // new event listener for click event on reset button to
  // reset form values
  resetBtn.addEventListener("click", function () {
    document.getElementById("ageInput").value = "";
    document.getElementById("heightInput").value = "";
    document.getElementById("colorInput").value = "";
    document.getElementById("hairInput").value = "";
    document.getElementById("mathInput").value = "";
  });
});
