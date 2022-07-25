import get from "./utils/getElement.js";
import getUser from "./utils/fetchUser.js";
import displayUser from "./utils/displayUser.js";

const btn = get(".btn");

// getuser from api
const showUser = async () => {
  const person = await getUser();
  displayUser(person);
};
// const showUser = () => {
// getUser().then((data) => console.log(data));
// display user (setting up buttons)

// ShowUser shows when refresh window or click on the button
window.addEventListener("DOMContentLoaded", showUser);
btn.addEventListener("click", showUser);
