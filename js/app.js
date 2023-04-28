window.addEventListener("scroll", function () {
    const navbar = document.querySelector("#navbar");
    navbar.classList.toggle("fixed-top", window.scrollY > 0);
    navbar.classList.toggle("shadow-lg", window.scrollY > 0);
  });