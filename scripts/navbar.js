function navbar() {
  let navbar = document.getElementById("navbar");
  let navigations = ` <h1 class="navLogo"><a href="./index.html">To Do Today</a></h1>
      <div class="navLinks">
        <a href="./SignUp.html">Sign up</a>
        <a href="./Login.html">Log in</a>
        <a href="./Todo.html">Your todos</a>
      </div>`;

  navbar.innerHTML = navigations;
}

navbar();
