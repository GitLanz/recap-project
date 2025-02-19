// phew… not a lot going on here. Please add some code!
console.clear();

const toggleBookmark = document.querySelector('[data-js="bookmark"]');
toggleBookmark.addEventListener("click", () => {
  //   event.preventDefault(); // only valid for a form to prevent instant submission of the browser
  console.log("test");
  console.log(toggleBookmark);
  console.log(toggleBookmark.classList);
  toggleBookmark.classList.toggle("bookmark--active");
});
