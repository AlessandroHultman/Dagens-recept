// only used for development purposes
import data from "./data.json" assert {type: "json"};
import { getElement } from "./utils.mjs";

let jsonData = data.data;

// nav button toggle effect on low screen sizes
const links = getElement('.nav-links');
const navBtnDOM = getElement('.nav-btn');
navBtnDOM.addEventListener('click', () => {
  links.classList.toggle('show-links')
});

function buildArticle(classAttr, type, value) {
  let article = document.createElement("article");
  let header = document.createElement("h5");
  let para = document.createElement("p");
  header.innerText = type;
  para.innerText = value;

  let i = document.createElement("i");
  i.setAttribute("class", classAttr);

  article.appendChild(i);
  article.appendChild(header);
  article.appendChild(para);
  return article;
}

// Builds a single recipe page out of the first recipe from the api call
function buildSingleRecipe() {
  let recipeSection = document.getElementById("recipe-section");
  let img = document.createElement("img");
  img.setAttribute("src", jsonData[0]["image"]);
  img.setAttribute("class", "img recipe-hero-img");

  let recipeInfo = document.createElement("article");
  recipeInfo.setAttribute("class", "recipe-info");
  let header2 = document.createElement("h2");
  header2.innerText = jsonData[0]["name"];
  recipeInfo.appendChild(header2);
  recipeInfo.appendChild(document.createElement("p"));

  let recipeIcons = document.createElement("div");
  recipeIcons.setAttribute("class", "recipe-icons");
  let prep = buildArticle("fas fa-clock", "prep time", jsonData[0]["time"]["prepration_time"]);
  let cook = buildArticle("far fa-clock", "cook time", jsonData[0]["time"]["cooking_time"]);
  let serv = buildArticle("fas fa-user-friends", "serving", jsonData[0]["servings"]);
  recipeIcons.appendChild(prep);
  recipeIcons.appendChild(cook);
  recipeIcons.appendChild(serv);

  let tags = document.createElement("p");
  tags.setAttribute("class", "recipe-tags");
  tags.innerText = "Tags : ";
  
  recipeInfo.appendChild(recipeIcons);
  recipeInfo.appendChild(tags);
  recipeSection.appendChild(img);
  recipeSection.appendChild(recipeInfo);
}

function buildInstructionsContainer() {
  let instructionSection = document.getElementById("instructions");
  let header = document.createElement("h4");
  header.innerText = "instructions";
  instructionSection.appendChild(header);
  let instructions = jsonData[0]["instructions"];
  for (let i = 0; i < instructions.length; i++) {
    let div = document.createElement("div");
    div.setAttribute("class", "single-instruction");
    let header1 = document.createElement("header");
    let step = document.createElement("p");
    step.innerText = `step ${i+1}`;
    header1.appendChild(step);
    header1.appendChild(document.createElement("div"));
    div.appendChild(header1);
    let para = document.createElement("p");
    para.innerText = instructions[i];
    div.appendChild(para);
    instructionSection.appendChild(div);
  }
}

function buildSecondColumn() {
  let secondColumn = document.getElementById("ingredients");

  let div = document.createElement("div");
  let header = document.createElement("h4");
  header.innerText = "ingredients";
  div.appendChild(header);
  for (let i = 0; i < jsonData[0]["ingredients"].length; i++) {
    let p = document.createElement("p");
    p.setAttribute("class", "single-ingredient");
    p.innerText = jsonData[0]["ingredients"][i];
    div.appendChild(p);
  }
  secondColumn.appendChild(div);
}

buildSingleRecipe();
buildInstructionsContainer();
buildSecondColumn();

