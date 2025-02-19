console.clear();

const submitButton = document.querySelector('[data-js="submit"]');

submitButton.addEventListener("click", (event) => {
  event.preventDefault(); // valid for a form to prevent instant submission of the browser
  console.log("test");
});

// const outputElement = document.querySelector
// build a card by using DOM
// Generate all DOM element for a card with createElement()
// div erzeugen, klasse hinzufügen, div erzeugen, klasse hinzufügen ...

const newCard = document.createElement("div");
document.form.append(newCard);
