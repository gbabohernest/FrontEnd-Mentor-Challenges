const body = document.querySelector("body");
const hamburgerMenu = document.querySelector("#hambuger");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const hasFadeElements = document.querySelectorAll(".has-fade");

const toggleHambugerMenu = () => {
  if (header.classList.contains("openHamburgerMenu")) {
    //close hamburger
    body.classList.remove("no-scroll");
    header.classList.remove("openHamburgerMenu");

    hasFadeElements.forEach((element) => {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    //open hamburger
    body.classList.add("no-scroll");
    header.classList.add("openHamburgerMenu");
    hasFadeElements.forEach((element) => {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
};

hamburgerMenu.addEventListener("click", toggleHambugerMenu);
