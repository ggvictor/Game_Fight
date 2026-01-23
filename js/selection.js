const img = document.querySelectorAll(".img");

img.forEach((i) => {
  i.addEventListener("click", () => {
    i.style.border = "3px solid white";
  });
});