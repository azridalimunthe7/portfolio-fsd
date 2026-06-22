function scrollToSelection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
}

link1.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSelection("home");
});
link2.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSelection("about");
});
link3.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSelection("skills");
});
link4.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSelection("project");
});
link5.addEventListener("click", (e) => {
  e.preventDefault();
  scrollToSelection("certificate");
});
