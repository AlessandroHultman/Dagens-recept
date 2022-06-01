// import { saveData } from "./utils.mjs";
// import { fetchData } from "./api-service.mjs";
// only used for development purposes
import data from "./data.json" assert {type: "json"};

let jsonData = data.data;

for (let i = 0; i < jsonData.length; i++) {
  console.log(jsonData[i]["name"]);
}
