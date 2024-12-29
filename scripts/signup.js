import { baseUrl } from "./baseUrl.js";
let signUpForm = document.getElementById("signUpForm");

signUpForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  try {
    let res = await fetch(baseUrl);
    let data = await res.json();

    let dataAlready = data.filter((el) => signUpForm.email.value == el.email);
    if (dataAlready.length > 0) {
      alert("Account Already exists. Please Login.");
      window.location.href = "Login.html";
    } else {
      console.log("user not present");
      fetch(baseUrl, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: signUpForm.name.value,
          email: signUpForm.email.value,
          password: signUpForm.password.value,
        }),
      });

      alert("Signup successful. Please log in.");
      window.location.href = "Login.html";
    }
  } catch (err) {
    alert("Something went wrong in signing");
  }
});
