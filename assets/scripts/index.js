import { fetchData } from "./api-service.js";
import { setAttributes, getElement } from "./utils.js";

// search listener
const searchBtn = getElement('.searchButton');
searchBtn.addEventListener('click', async () => {
  let searchTerm = document.getElementById("search");
  let url = `https://recipesapi2.p.rapidapi.com/recipes/${searchTerm.value}?maxRecipes=6`;
  let data = await fetchData(url);
  let jsonData = data.data;
  displayTags();
  buildRecipesList(jsonData);
  searchTerm.value = "";
});

const anchorAttributes = {
  href: "./assets/html/single-recipe.html", // todo change link value
  class: "recipe"
}

function buildRecipesList(jsonData) {
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

function displayTags() {
  let div = document.getElementById("tags-container");
  let header = document.createElement("h4");
  header.innerText = "Tags";
  div.appendChild(header);
  let placeHolderTags = ["Pasta", "Bacon", "Italian"];
  for (let i = 0; i < placeHolderTags.length; i++) {
    let a = document.createElement("a");
    a.innerText = placeHolderTags[i];
    div.appendChild(a);
  }
}
