  window.addEventListener("load", function() {
    let form = document.querySelector("form");
    // we've accessed our button and story elements at the top level
    // of the window load event listener to reuse these elements
    // in multiple locations
    let resetBtn = document.getElementById("reset");
    let story = document.getElementById("story");
  
    // the original form submission event listener
    form.addEventListener ("submit", function(event) {
        event.preventDefault();
        
        // in this section we get the value for each form input
        const ageInput = parseInt(document.getElementById("ageInput").value;
        const heightInput = parseInt(document.getElementById("heightInput").value;
        const colorInput= document.getElementById("colorInput").value;
        const hairInput = document.getElementById("hairInput").value;
        const mathInput = document.getElementById("verbInput").value;
    });
    
        // then we set the story variables to the values we got from the form
    if (age && height) {
      if (age >= 25 && height >= 60) {
        document.getElementById("java").removeAttribute("class");

      } else if (age >= 15|| height >= 48) {
        document.getElementById("python").removeAttribute("class");
      
      } else if (age >= 6) {
        document.getElementById("ruby").removeAttribute("class");
    }
  });
};



    // new event listener for form submit event to show reset button
    form.addEventListener("submit", function() {
      resetBtn.removeAttribute("class");
    }); 
  
    // new event listener for click event on reset button to 
    // reset form values
    resetBtn.addEventListener("click", function() {
      resetBtn.setAttribute("class", "hidden");
      document.getElementById("ageInput").value = null;
      document.getElementById("heightInput").value = null;
      document.getElementById("colorInput").value = null;
      document.getElementById("hairInput").value = null;
      document.getElementById("mathInput").value = null;
    });
  });