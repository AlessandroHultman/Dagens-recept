// fetch API
export async function fetchData(url) {
	const options = {
		method: 'GET',
		headers: {
			'X-RapidAPI-Host': 'recipesapi2.p.rapidapi.com',
			'X-RapidAPI-Key': '27214aaddfmshdb962cd9998f2f9p1fc959jsn9a8fd10cdbd3'
		}
	};

	return fetch(url, options)
		.then(res => {
			return res.json()
		})
		.then(data => {
			return data;
		})
		.catch(err => console.error('error:' + err));
}

// node-fetch is only used for development purposes
// import fetch from 'node-fetch';
// import { saveData } from './utils.mjs';

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
// 			console.log(json);
// 			saveData(json, FILE);
// 		})
// 		.catch(err => console.error('error:' + err));
// }

// fetchData();
