let nav = document.querySelector(".nav-bar");


window.addEventListener("scroll", () => {
  if (window.scrollY >= 60) {
    nav.classList.add("sticky");
  } if (window.scrollY >= 1100) {
    nav.classList.remove("sticky");
    nav.classList.add("fixed");
  }
  else {
    nav.classList.remove("fixed");
  }
})

let profile = document.querySelector(".list-btn");

let list = document.querySelector(".list");

profile.addEventListener("click", () => {
  list.style.cssText = "display:block;";
})

document.body.addEventListener("click", (e) => {
  if (!e.target.classList.contains("a1")) {
    list.style.cssText = "display:none;";
  }
})
