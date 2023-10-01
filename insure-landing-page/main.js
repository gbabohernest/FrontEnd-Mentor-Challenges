const hamburger = document.querySelector(".hamburger-menu");
const mobileMenu = document.querySelector(".nav__mobile_links");

const toggleMenu = () => {
  const buttons = hamburger.querySelectorAll("img");

  if (mobileMenu.classList.contains("open-menu")) {
    buttons.forEach((btn) => {
      if (!btn.classList.contains("close-menu")) {
        btn.classList.add("close-menu");
      } else {
        btn.classList.remove("close-menu");
      }
    });
    mobileMenu.classList.remove("open-menu");
  } else {
    buttons.forEach((btn) => {
      if (btn.classList.contains("close-menu")) {
        btn.classList.remove("close-menu");
      } else {
        btn.classList.add("close-menu");
      }
    });
    mobileMenu.classList.add("open-menu");
  }
};

hamburger.addEventListener("click", toggleMenu);
