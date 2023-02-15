import type { PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { fetchAllCountries } from '../api';
import { numberWithCommas } from '$lib/utils';

export const load: PageServerLoad = async ({ setHeaders }) => {
	try {
		const countries = await fetchAllCountries();

		for (let index = 0; index < countries.length; index++) {
			const country = countries[index];
			country.name = country.name.toLowerCase();
			country.population = numberWithCommas(country.population);
		}

		setHeaders({ 'cache-control': 'max-age=360' });
		return { countries };
	} catch {
		throw fail(502);
	}
};
