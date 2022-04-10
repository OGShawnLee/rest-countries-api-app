const BASE_PATH = 'https://restcountries.com/v2';

export async function fetchAllCountries() {
	const path = `${BASE_PATH}/all?fields=alpha3Code,flag,name,capital,population,region`;
	const response = await fetch(path);
	if (response.ok) return (await response.json()) as CountryShort[];
	throw new Error('Unable to Fetch All Countries');
}
