const submit = document.querySelector(".button");               // the button
const form = document.querySelector(".form");                   // the form

const error = document.getElementById("error-message");         // span message
const input = document.getElementById("input-form");            // input
const iconError = document.getElementById("error-image");       // => ! image

/*
function Init() {
    submit.addEventListener("click", function () {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  
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
        error.innerHTML = "Please provide a valid email";
        iconError.style.visibility="visible";
        return false;
    }

    error.innerHTML = "";
    error.style.visibility = "hidden";
    iconError.style.visibility="hidden";
    return true;
}
