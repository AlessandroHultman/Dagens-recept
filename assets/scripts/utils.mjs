// import { writeFile } from 'fs';

// export function saveData(data, file) {
//   const serializedData = JSON.stringify(data);

//   writeFile(file, serializedData, 'utf8', function (err) {
//     if (err) {
//       console.log("An error occured while writing JSON Object to File.");
//       return console.log(err);
//     }
//     console.log("\ndata.json file has been saved.");
//   });
// }

export function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(attr => {
    element.setAttribute(attr, attributes[attr]);
  });
  return element;
}

export const getElement = (selector) => {
  const element = document.querySelector(selector)

  if (element) return element
  throw Error(
    `Error: there is no ${selector} class`
  )
}
