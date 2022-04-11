/// <reference types="@sveltejs/kit" />

// See https://kit.svelte.dev/docs/types#the-app-namespace
// for information about these interfaces
declare namespace App {
	// interface Locals {}
	// interface Platform {}
	// interface Session {}
	// interface Stuff {}
}

type ColorTheme = 'DARK' | 'LIGHT';

interface Country {
	name: string;
	topLevelDomain: string[];
	alpha2Code: string;
	alpha3Code: string;
	callingCodes: string[];
	capital: string | undefined;
	altSpellings: string[];
	region: string;
	subregion: string;
	continent: string;
	population: number;
	latlng: number[];
	demonym: string;
	area: number;
	gini: number;
	timezones: string[];
	borders: string[];
	nativeName: string;
	numericCode: string;
	currencies: {
		code: string;
		name: string;
		symbol: string;
	}[];
	languages: {
		iso639_1: string;
		iso639_2: string;
		name: string;
		nativeName: string;
	}[];
	translations: {
		[key: string]: string;
	};
	flag: string;
	flags: string[];
	regionalBlocs: {
		acronym: string;
		name: string;
		otherAcronyms: string[];
		otherNames: string[];
	}[];
	cioc: string;
	independent: boolean;
}

interface CountryDetails
	extends Pick<
		Country,
		| 'borders'
		| 'capital'
		| 'currencies'
		| 'flag'
		| 'independent'
		| 'languages'
		| 'name'
		| 'nativeName'
		| 'region'
		| 'subregion'
		| 'topLevelDomain'
	> {
	population: string;
}

interface CountryShort
	extends Pick<Country, 'alpha3Code' | 'capital' | 'flag' | 'independent' | 'name' | 'region'> {
	population: string;
}

type CountryBorder = Pick<Country, 'alpha3Code' | 'name'>;
