import { getElement } from "./utils.js";

// nav button toggle effect on low screen sizes
const links = getElement('.nav-links');
const navBtnDOM = getElement('.nav-btn');
navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
});
