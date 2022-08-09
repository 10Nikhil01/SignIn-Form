


function validate() {
  let firstNameInput = document.getElementById("first-name").value;
  let lastNameInput = document.getElementById("last-name").value;
  let emailInput = document.getElementById("email").value;
  let cityInput = document.getElementById("city").value;
  let stateInput = document.getElementById("state").value;
  let zipInput = document.getElementById("zip").value;
  let tnCInput = document.getElementById("tnC").checked;
  

  let error = false;

  if (firstNameInput && firstNameInput.match(/^[A-Za-z]+$/)) {
    document.getElementById("first-name-valid").style.display = "block";
    document.getElementById("first-name-invalid").style.display = "none";
  } else {
    document.getElementById("first-name-invalid").style.display = "block";
    document.getElementById("first-name-valid").style.display = "none";
    error = true;
  }

  if (lastNameInput && lastNameInput.match(/^[A-Za-z]+$/)) {
    document.getElementById("last-name-valid").style.display = "block";
    document.getElementById("last-name-invalid").style.display = "none";
  } else {
    document.getElementById("last-name-invalid").style.display = "block";
    document.getElementById("last-name-valid").style.display = "none";
    error = true;
  }

  if (
    emailInput &&
    emailInput.includes("@") &&
    emailInput.includes(".") &&
    emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
    emailInput.indexOf("@") !== 0 &&
    !emailInput.match(/\ /)
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
    error = true;
  }

  if (cityInput && cityInput.length >= 3 && cityInput.match(/^[A-Za-z]+$/)) {
    document.getElementById("city-valid").style.display = "block";
    document.getElementById("city-invalid").style.display = "none";
  } else {
    document.getElementById("city-invalid").style.display = "block";
    document.getElementById("city-valid").style.display = "none";
    error = true;
  }
  if (
    zipInput &&
    zipInput.length === 6 &&
    zipInput.match(/^[0-9]+$/)
  ) {
    document.getElementById("zip-valid").style.display = "block";
    document.getElementById("zip-invalid").style.display = "none";
  } else {
    document.getElementById("zip-invalid").style.display = "block";
    document.getElementById("zip-valid").style.display = "none";
    error = true;
  }

  let check = $("#states").find("option[value='" + stateInput + "']");
  if (
    stateInput &&
    check != null &&
    check.length > 0 &&
    stateInput.match(/^[a-zA-z\s]+$/)
  ) {
    document.getElementById("state-valid").style.display = "block";
    document.getElementById("state-invalid").style.display = "none";
  } else {
    document.getElementById("state-invalid").style.display = "block";
    document.getElementById("state-valid").style.display = "none";
    error = true;
  }

  if (tnCInput) {
    document.getElementById("tnC-invalid").style.display = "none";
  } else {
    document.getElementById("tnC-invalid").style.display = "block";
    error = true;
  }

  if (!error) {
    alert("Your details have been saved successfully!");
    document.getElementById("first-name").value = "";
    document.getElementById("last-name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("city").value = "";
    document.getElementById("state").value = "None";
    document.getElementById("zip").value = "";
    document.getElementById("tnC").checked = false;

    document.getElementById("first-name-valid").style.display = "none";
    document.getElementById("last-name-valid").style.display = "none";
    document.getElementById("email-valid").style.display = "none";
    document.getElementById("city-valid").style.display = "none";
    document.getElementById("zip-valid").style.display = "none";
    document.getElementById("state-valid").style.display = "none";
  }
}

function firstNameValidation() {
  let firstNameInput = document.getElementById("first-name").value;

  if (firstNameInput && firstNameInput.match(/^[A-Za-z]+$/)) {
    document.getElementById("first-name-valid").style.display = "block";
    document.getElementById("first-name-invalid").style.display = "none";
  } else {
    document.getElementById("first-name-invalid").style.display = "block";
    document.getElementById("first-name-valid").style.display = "none";
  }
}
function lastNameValidation() {
  let lastNameInput = document.getElementById("last-name").value;

  if (lastNameInput && lastNameInput.match(/^[A-Za-z]+$/)) {
    document.getElementById("last-name-valid").style.display = "block";
    document.getElementById("last-name-invalid").style.display = "none";
  } else {
    document.getElementById("last-name-invalid").style.display = "block";
    document.getElementById("last-name-valid").style.display = "none";
  }
}
function emailValidation() {
  let emailInput = document.getElementById("email").value;

  // var temp = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z-]+(?:\.[a-zA-Z-]+)*$/;

  // if(emailInput.match(temp)){
  //     document.getElementById("email-valid").style.display = "block";
  //     document.getElementById("email-invalid").style.display = "none";
  //   } else {
  //     document.getElementById("email-invalid").style.display = "block";
  //     document.getElementById("email-valid").style.display = "none";
  //   }
  if (
    emailInput &&
    emailInput.includes("@") &&
    emailInput.includes(".") &&
    emailInput.lastIndexOf(".") <= emailInput.length - 3 &&
    emailInput.indexOf("@") !== 0 &&
    !emailInput.match(/\ /)
  ) {
    document.getElementById("email-valid").style.display = "block";
    document.getElementById("email-invalid").style.display = "none";
  } else {
    document.getElementById("email-invalid").style.display = "block";
    document.getElementById("email-valid").style.display = "none";
  }
}

function cityValidation() {
  let cityInput = document.getElementById("city").value;
  if (cityInput && cityInput.length >= 3 && cityInput.match(/^[A-Za-z]+$/)) {
    document.getElementById("city-valid").style.display = "block";
    document.getElementById("city-invalid").style.display = "none";
  } else {
    document.getElementById("city-invalid").style.display = "block";
    document.getElementById("city-valid").style.display = "none";
  }
}
function stateValidation() {
  let stateInput = document.getElementById("state").value;

  let check = $("#states").find("option[value='" + stateInput + "']");

  if (stateInput &&
    check != null &&
    check.length > 0 &&
    stateInput.match(/^[a-zA-z\s]+$/)
    ){
    document.getElementById("state-valid").style.display = "block";
    document.getElementById("state-invalid").style.display = "none";
  } else {
    document.getElementById("state-invalid").style.display = "block";
    document.getElementById("state-valid").style.display = "none";
  }
}
function zipValidation() {
  let zipInput = document.getElementById("zip").value;

  if (zipInput &&
    zipInput.length === 6 &&
    zipInput.match(/^[0-9]+$/)) {
    document.getElementById("zip-valid").style.display = "block";
    document.getElementById("zip-invalid").style.display = "none";
  } else {
    document.getElementById("zip-invalid").style.display = "block";
    document.getElementById("zip-valid").style.display = "none";
  }
}

function tnCValidation() {
  let tnCInput = document.getElementById("tnC").checked;
  if (!tnCInput) {
    document.getElementById("tnC-invalid").style.display = "block";
  } else {
    document.getElementById("tnC-invalid").style.display = "none";
  }
}
