window.addEventListener("load", function () {
  let form = document.querySelector("form");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const ageFieldValue = document.getElementById("ageInput").value;
    const age = parseInt(ageFieldValue, 10);
    const heightFieldValue = document.getElementById("heightInput").value;
    const height = parseInt(heightFieldValue, 10);
    const hairFieldValue = document.getElementById("hairInput").value;
    const colorFieldValue = document.getElementById("colorInput").value;
    const mathFieldValue = document.getElementById("mathInput").value;

    if (
      age == "" ||
      height == "" ||
      hairFieldValue == "" ||
      colorFieldValue == "" ||
      mathFieldValue == ""
    ) {
      document.getElementById("result").setAttribute("class", "hidden");
      return;
    }

    if (age >= 25 && height >= 60) {
      console.log("js");
      document.getElementById("language").innerHTML = "JavaScript";
      document.getElementById("result").removeAttribute("class");
    } else if (
      (age <= 24 && height <= 59) ||
      colorFieldValue == "red" ||
      colorFieldValue == "pink" ||
      hairFieldValue == "blonde" ||
      mathFieldValue == "yes"
    ) {
      console.log("Python");
      document.getElementById("language").innerHTML = "Python";
      document.getElementById("result").removeAttribute("class");
    } else {
      console.log("Ruby");
      document.getElementById("language").innerHTML = "Ruby";
      document.getElementById("result").removeAttribute("class");
    }
  });

  // new event listener for form submit event to show reset button
  form.addEventListener("submit", function () {
    document.getElementById("ageInput").value = "";
    document.getElementById("heightInput").value = "";
    document.getElementById("colorInput").value = "";
    document.getElementById("hairInput").value = "";
    document.getElementById("mathInput").value = "";
  });
});
