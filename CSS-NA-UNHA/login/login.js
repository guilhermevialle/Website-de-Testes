const rmCheck = document.getElementById("rememberMe"),
    emailInput = document.getElementById("username")
    password = document.getElementById("password");

if (localStorage.checkbox && localStorage.checkbox !== "") {
  rmCheck.setAttribute("checked", "checked");
  emailInput.value = localStorage.username;
} else {
  rmCheck.removeAttribute("checked");
  emailInput.value = "";
}

function lsRememberMe() {
  if (rmCheck.checked && emailInput.value !== "") {
    localStorage.username = emailInput.value;
    localStorage.checkbox = rmCheck.value;
  } else {
    localStorage.username = "";
    localStorage.checkbox = "";
  }
}

var database = {}

function logar(){
    
    const emailInput = document.getElementById("username"),
    password = document.getElementById("password");

    database.user = emailInput
    database.pass = password 
    console.log(database)
}

