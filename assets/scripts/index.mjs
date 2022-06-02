// import { fetchData } from "./api-service.mjs";
import { setAttributes, getElement } from "./utils.mjs";

// only used for development purposes
import data from "./data.json" assert {type: "json"};

const jsonData = data.data;

// nav button toggle effect on low screen sizes
const links = getElement('.nav-links');
const navBtnDOM = getElement('.nav-btn');
navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
});

const anchorAttributes = {
  href: "./assets/html/single-recipe.html", // todo change link value
  class: "recipe"
}

function buildRecipesList() {
  let recipesList = document.getElementById("recipes-list");

  for (let i = 0; i < jsonData.length; i++) {
    let anchor = setAttributes(document.createElement("a"), anchorAttributes);
    let img = document.createElement("img");
    let header = document.createElement("h5");
    let para = document.createElement("p");

    img.setAttribute("src", `${jsonData[i]["image"]}`);
    img.setAttribute("class", "img recipe-img");
    img.setAttribute("alt", jsonData[i]["name"]);

    header.innerText = jsonData[i]["name"];
    para.innerText = `Prep : ${jsonData[i]["time"]["prepration_time"]} | Cook : ${jsonData[i]["time"]["cooking_time"]}`;

    anchor.appendChild(img);
    anchor.appendChild(header);
    anchor.appendChild(para);
    recipesList.appendChild(anchor);
  }
}

buildRecipesList();
