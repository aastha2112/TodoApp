import { baseUrl } from "./baseUrl.js";
let loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    let res = await fetch(baseUrl);
    let data = await res.json();

    let dataAlready = data.filter((el) => loginForm.email.value == el.email);
    if (dataAlready.length > 0) {
      let checkPswd = dataAlready[0].password === loginForm.password.value;
      if (checkPswd) {
        alert("Login successful");
        localStorage.setItem("loginData", JSON.stringify(dataAlready[0]));
        window.location.href = "Todo.html";
      } else {
        alert("Incorrect Password");
      }
    } else {
      alert("User not registered. Please Sign up.");
      window.location.href = "SignUp.html";
    }
  } catch (err) {
    alert("Something went wrong in logging in");
  }
});
