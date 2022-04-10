const BASE_PATH = 'https://restcountries.com/v2';

export async function fetchAllCountries() {
	const path = `${BASE_PATH}/all?fields=alpha3Code,flag,name,capital,population,region`;
	const response = await fetch(path);
	if (response.ok) return (await response.json()) as CountryShort[];
	throw new Error('Unable to Fetch All Countries');
}

export async function fetchCountryByAlpha3Code(alpha3Code: string) {
	const path = getAlpha3CodePath(alpha3Code);
	const response = await fetch(path);
	if (response.ok) return (await response.json()) as CountryDetails;
	throw new Error('Unable to Fetch Country by Alpha3Code');
}

export async function fetchAllCountryBordersByAlpha3Code(countriesAlpha3Code: string[]) {
	const raw = await Promise.all(
		countriesAlpha3Code.map(async (alpha3Code) => {
			try {
				return await fetchCountryBorderByAlpha3Code(alpha3Code);
			} catch {
				return null;
			}
		})
	);

	return raw.filter((country): country is CountryBorder => !!country);
}

export async function fetchCountryBorderByAlpha3Code(alpha3Code: string) {
	const path = `${BASE_PATH}/alpha/${alpha3Code}?fields=name`;
	const response = await fetch(path);
	if (response.ok) {
		const { name } = (await response.json()) as { name: string };
		return { alpha3Code, name };
	}
	throw new Error('Unable to Fetch Country Border');
}

function getAlpha3CodePath(alpha3Code: string) {
	return `${BASE_PATH}/alpha/${alpha3Code}?fields=borders,capital,currencies,flag,independent,languages,name,nativeName,population,region,subregion,topLevelDomain`;
}
