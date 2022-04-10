import { describe, expect, it } from 'vitest';
import { range, getPages } from '$lib/paginate/utils';

describe('range', () => {
	it('Should start the range with the given min', () => {
		expect(range(1, 5)).toEqual([1, 2, 3, 4]);
	});

	it('Should not include the given max', () => {
		expect(range(4, 7)).toEqual([4, 5, 6]);
	});

	it('Should work with negative numbers', () => {
		expect(range(-20, -16)).toEqual([-20, -19, -18, -17]);
	});

	it('Should throw if the min is bigger than the max', () => {
		expect(() => range(10, -4)).toThrow();
	});

	it('Should use the limit as the max if given', () => {
		expect(range(1, 4)).toEqual([1, 2, 3]);
	});

	it('Should work with floats', () => {
		expect(range(1, 5.5)).toEqual([1, 2, 3, 4]);
	});

	it('Should return the min if max is equal', () => {
		expect(range(10, 10)).toEqual([10]);
	});
});

describe('getPages', () => {
	it('Should always start at one', () => {
		const foo = getPages({ currentPage: 3, totalPages: 6 });
		expect(foo).toEqual([1, 2, 3, 4, 5, 6]);

		const bar = getPages({ currentPage: 1, totalPages: 6 });
		expect(bar).toEqual([1, 2, 3, 4, 5, 6]);

		const sap = getPages({ currentPage: 6, totalPages: 6 });
		expect(sap).toEqual([1, 2, 3, 4, 5, 6]);
	});

	it('Should work if the current page is the last page', () => {
		const bar = getPages({ currentPage: 1, totalPages: 1 });
		expect(bar).toEqual([1]);

		const foo = getPages({ currentPage: 4, totalPages: 4 });
		expect(foo).toEqual([1, 2, 3, 4]);
	});

	it('Should use the last page if the currentPage is excesive', () => {
		const foo = getPages({ currentPage: 20, totalPages: 10 });
		expect(foo).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
	});

	it('Should work with floats', () => {
		const foo = getPages({ currentPage: 1, totalPages: 2.3 });
		expect(foo).toEqual([1, 2, 3]);

		const bar = getPages({ currentPage: 13, totalPages: 12.8 });
		expect(bar).toEqual(range(1, 14));
	});

	it('Should return 1 if the totalPages is cero', () => {
		const foo = getPages({ currentPage: 1, totalPages: 0 });
		const bar = getPages({ currentPage: -10, totalPages: 1 });
		expect(foo).toEqual([1]);
		expect(bar).toEqual([1]);
	});

	describe('limit', () => {
		it('Should cut the range if given a limit', () => {
			const foo = getPages({ currentPage: 5, totalPages: 12, limit: 2 });
			expect(foo).toEqual([3, 4, 5, 6, 7]);

			const bar = getPages({ currentPage: 2, totalPages: 3.1, limit: 2 });
			expect(bar).toEqual([1, 2, 3, 4]);

			const sap = getPages({ currentPage: 1, totalPages: 1, limit: 3 });
			expect(sap).toEqual([1]);

			const yoo = getPages({ currentPage: 10, totalPages: 20, limit: 5 });
			expect(yoo).toEqual(range(5, 16));
		});

		it('Should not overflow', () => {
			const foo = getPages({ currentPage: 1, totalPages: 1, limit: 3 });
			expect(foo).toEqual([1]);

			const bar = getPages({ currentPage: 2, totalPages: 6, limit: 4 });
			expect(bar).toEqual([1, 2, 3, 4, 5, 6]);

			const sap = getPages({ currentPage: 1, totalPages: 3, limit: 10 });
			expect(sap).toEqual([1, 2, 3]);

			const yoo = getPages({ currentPage: 3, totalPages: 3.9, limit: 10 });
			expect(yoo).toEqual([1, 2, 3, 4]);
		});

		it('Should work if the currentPage is excesive', () => {
			const foo = getPages({ currentPage: 4, totalPages: 3, limit: 2 });
			expect(foo).toEqual([1, 2, 3]);

			const bar = getPages({ currentPage: 20, totalPages: 3, limit: 5 });
			expect(bar).toEqual([1, 2, 3]);

			const sap = getPages({ currentPage: 15, totalPages: 10, limit: 3 });
			expect(sap).toEqual([7, 8, 9, 10]);
		});

		it('Should return the entire range if limit is excesive', () => {
			const foo = getPages({ currentPage: 3, totalPages: 10, limit: 90 });
			expect(foo).toEqual(range(1, 11));
		});

		it('Should ignore the limit and return the entire range if it is negative', () => {
			const foo = getPages({ currentPage: 5, totalPages: 7, limit: -10 });
			expect(foo).toEqual(range(1, 8));
		});

		describe('0 limit value', () => {
			it('Should only return the currentPage', () => {
				const foo = getPages({ currentPage: 5, totalPages: 7, limit: 0 });
				expect(foo).toEqual([5]);
			});

			it('Should work if the currentPage is excesive', () => {
				const foo = getPages({ currentPage: 90, totalPages: 7, limit: 0 });
				expect(foo).toEqual([7]);
			});
		});
	});
});
