import type { RequestHandler } from '@sveltejs/kit';
import { numberWithCommas } from '$lib/utils';
import { fetchAllCountryBordersByAlpha3Code, fetchCountryByAlpha3Code } from '../../api';

// @ts-ignore
export const get: RequestHandler = async ({ params: { code } }) => {
	try {
		const country = await fetchCountryByAlpha3Code(code);
		country.population = numberWithCommas(country.population);
		const borders = await fetchAllCountryBordersByAlpha3Code(country.borders);
		return {
			status: 200,
			body: {
				country,
				borders
			}
		};
	} catch (error) {
		return {
			status: 404
		};
	}
};
