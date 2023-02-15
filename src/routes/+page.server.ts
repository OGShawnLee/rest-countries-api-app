import type { RequestHandler } from '@sveltejs/kit';
import { fetchAllCountries } from '../api';
import { numberWithCommas } from '$lib/utils';

// @ts-ignore
export const get: RequestHandler = async () => {
	try {
		const countries = await fetchAllCountries();

		for (let index = 0; index < countries.length; index++) {
			const country = countries[index];
			country.name = country.name.toLowerCase();
			country.population = numberWithCommas(country.population);
		}

		return {
			status: 200,
			body: {
				countries
			}
		};
	} catch {
		return {
			status: 502
		};
	}
};
