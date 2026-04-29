function toggleMenu() {
  const menu = document.getElementById("menu");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

document.querySelectorAll(".menu a").forEach(link => {
  link.addEventListener("click", () => {
    const menu = document.getElementById("menu");
    menu.style.display = "none";
  });
});
