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
