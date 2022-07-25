import get from "./getElement.js";

const img = get(".user-img");
const title = get(".user-title");
const value = get(".user-value");

const btns = [...document.querySelectorAll(".icon")];

const displayUser = (person) => {
  // from person return in fetchUser.js
  img.src = person.image;
  value.textContent = person.name;
  // Add this, if forget add this in html code
  title.textContent = `My name is`;
  btns.forEach((btn) => btn.classList.remove("active"));
  btns[0].classList.add("active");
  btns.forEach((btn) => {
    // for each button, get the label
    const label = btn.dataset.label;
    btn.addEventListener("click", () => {
      // If click on button, get information in console
      title.textContent = `My ${label} is`;
      // changig the text content as well
      value.textContent = person[label];
      // removes active buttons, after we press it
      btns.forEach((btn) => btn.classList.remove("active"));
      // make active button, when press on it
      btn.classList.add("active");
    });
  });
};

export default displayUser;
