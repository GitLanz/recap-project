// phew… not a lot going on here. Please add some code!
console.clear();

// bookmark toggle
const toggleBookmark = document.querySelector('[data-js="bookmark"]');
toggleBookmark.addEventListener("click", () => {
  //   event.preventDefault(); // only valid for a form to prevent instant submission of the browser
  console.log("test");
  console.log(toggleBookmark);
  console.log(toggleBookmark.classList);
  toggleBookmark.classList.toggle("bookmark--active");
});

// answer toggle
const toggleAnswer = document.querySelector('[data-js="answer"]');
const cardAnswer = document.querySelector('[data-js="cardanswer"]');
toggleAnswer.addEventListener("click", () => {
  //   console.log(toggleAnswer);
  //   console.log(cardAnswer);
  //   console.log(cardAnswer.classList);

  cardAnswer.classList.toggle("card__answer--active");

  //   console.log(toggleAnswer.innerText);

  if (toggleAnswer.innerText === "Show answer") {
    toggleAnswer.innerText = "Hide answer";
  } else {
    toggleAnswer.innerText = "Show answer";
  }
  // code does not switch back from 'Hide answer':
  //   const message = `Hide answer`;
  //   toggleAnswer.textContent = message;
  //   console.log(toggleAnswer);
});
