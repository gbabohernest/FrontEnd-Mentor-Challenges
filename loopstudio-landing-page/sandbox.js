const header = document.querySelector("header");
const hamburgerBtn = header.querySelector(".nav__hamburger");

const toggleHamburgerMenu = () => {
  const mobileNav = header.querySelector(".mobile-nav");
  const headerHeroText = header.querySelector(".header-heading");
  const buttons = hamburgerBtn.querySelectorAll("img");

  if (!mobileNav.classList.contains("open")) {
    buttons.forEach((btn) => {
      if (!btn.classList.contains("nav__hamburger-close")) {
        btn.classList.add("nav__hamburger-close");
      } else {
        btn.classList.remove("nav__hamburger-close");
      }
    });
    header.classList.add("dark-bg-header");
    headerHeroText.classList.add("header-heading-close");
    mobileNav.classList.add("open");
  } else {
    buttons.forEach((btn) => {
      if (btn.classList.contains("nav__hamburger-close")) {
        btn.classList.remove("nav__hamburger-close");
      } else {
        btn.classList.add("nav__hamburger-close");
      }
    });

    header.classList.remove("dark-bg-header");
    headerHeroText.classList.remove("header-heading-close");
    mobileNav.classList.remove("open");
  }
};

hamburgerBtn.addEventListener("click", toggleHamburgerMenu);
