const submitButton = document.querySelector(".button");               // the button
const formField = document.querySelector(".form");                   // the form

const alertMessage = document.getElementById("error-message");         // span message
const input = document.getElementById("input-form");            // input
const iconError = document.getElementById("error-image");       // => ! image

/*
function Init() {
    form.addEventListener("click", function () {
      const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  
      if (!re.test(input.value.toLowerCase())) {
        error.style.visibility = "visible";
        iconError.style.visibility = "visible";
      } 
        else {
        error.style.visibility = "hidden";
        iconError.style.visibility = "hidden";
      }
      input.value = "";
    });
}
  
Init();
*/

/////////////////////////////////////////////////////////////////////////////////////////////////////                                                                


function validateEmail() {
    if (!input.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
      alertMessage.innerHTML = "Please provide a valid email";
        iconError.style.visibility="visible";
        return false;
    }

    alertMessage.innerHTML = "";
    alertMessage.style.visibility = "hidden";
    iconError.style.visibility= "hidden";
    return true;
}
