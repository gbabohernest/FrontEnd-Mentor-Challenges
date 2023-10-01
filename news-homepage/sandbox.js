const mobileNav = document.querySelector(".flex-nav__mobile");
const hamburgerMenu = document.querySelector(".flex-nav__hamburger");

const menu = () => {
  const btns = hamburgerMenu.querySelectorAll("img");

  if (mobileNav.classList.contains("open")) {
    btns.forEach((btn) => {
      if (!btn.classList.contains("close")) {
        btn.classList.add("close");
      } else {
        btn.classList.remove("close");
      }
    });
    mobileNav.classList.remove("open");
  } else {
    btns.forEach((btn) => {
      if (btn.classList.contains("close")) {
        btn.classList.remove("close");
      } else {
        btn.classList.add("close");
      }
    });
    mobileNav.classList.add("open");
  }
};

hamburgerMenu.addEventListener("click", menu);
