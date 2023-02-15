import type { PageServerLoad } from './$types';
import { fail } from '@sveltejs/kit';
import { numberWithCommas } from '$lib/utils';
import { fetchAllCountryBordersByAlpha3Code, fetchCountryByAlpha3Code } from '../../api';

// @ts-ignore
export const load: PageServerLoad = async ({ params: { code }, setHeaders }) => {
	try {
		const country = await fetchCountryByAlpha3Code(code);
		country.population = numberWithCommas(country.population);
		const borders = await fetchAllCountryBordersByAlpha3Code(country.borders);
		setHeaders({ 'cache-control': 'max-age=360' });
		return { country, borders };
	} catch {
		throw fail(404);
	}
};
