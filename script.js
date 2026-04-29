function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.classList.toggle("open");
}

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("menu").classList.remove("open");
  });
});

const sections = document.querySelectorAll("main[id], section[id]");
const menuLinks = document.querySelectorAll(".menu a[href^='#']");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop - 160;
    if (window.scrollY >= sectionTop) {
      current = section.getAttribute("id");
    }
  });

  menuLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
