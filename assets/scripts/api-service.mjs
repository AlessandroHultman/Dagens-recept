import { saveData } from './utils.mjs';
import fetch from 'node-fetch';

const FILE = 'data.json';
const URL = 'https://recipesapi2.p.rapidapi.com/recipes/Carbonara?maxRecipes=4';

// fetch API
// export function fetchData() {
// 	const options = {
// 		method: 'GET',
// 		headers: {
// 			'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com',
// 			'X-RapidAPI-Key': '27214aaddfmshdb962cd9998f2f9p1fc959jsn9a8fd10cdbd3'
// 		}
// 	};
	
// 	fetch(URL, options)
// 		.then(res => res.json())
// 		.then(json => {
// 			return json;
// 		})
// 		.catch(err => console.error('error:' + err));
// }

// node-fetch is only used for development purposes
export function fetchData() {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com',
			'X-RapidAPI-Key': '27214aaddfmshdb962cd9998f2f9p1fc959jsn9a8fd10cdbd3'
		}
	};
	
	fetch(URL, options)
		.then(res => res.json())
		.then(json => saveData(json, FILE))
		.catch(err => console.error('error:' + err));
}

fetchData();
