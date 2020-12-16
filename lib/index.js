import { fetchClearbit } from './clearbit';

// Step 1: Select elements: input, button, 4 tds
const input = document.querySelector("#clearbitEmail");
const button = document.querySelector("#clearbitSubmit");

// Step 2: Listen to an event: listen a a "submit" on the button (don't forget .preventDefault())
button.addEventListener("click", (event) => {
  event.preventDefault();
  fetchClearbit(input.value);
});
