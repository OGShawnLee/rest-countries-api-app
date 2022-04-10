// TODO: ADD "STABLE MODE?" -> ALWAYS RETURN AN ARRAY OF THE SAME LENGTH WHEN POSSIBLE
export function getPages(configuration: {
	currentPage: number;
	totalPages: number;
	limit?: number;
}) {
	let { currentPage, totalPages, limit } = configuration;

	if (Math.ceil(totalPages) <= 0 || currentPage <= 0) return [1];

	let start = 1;
	let lastPage = Math.ceil(totalPages) + 1; // + 1 -> range max is exclusive

	currentPage = currentPage > totalPages ? Math.ceil(totalPages) : currentPage;

	if (limit === 0) return [currentPage];
	if (typeof limit === 'number' && limit > 0) {
		let limitLastPage = currentPage + limit + 1;
		lastPage = limitLastPage > lastPage ? lastPage : limitLastPage;
		let limitStart = currentPage - limit;
		start = limitStart > 0 ? limitStart : 1;
	}

	if (currentPage === lastPage - 1) {
		if (currentPage === 1) return range(start, lastPage);
		return [...range(start, currentPage), currentPage];
	}

	if (currentPage === 1) {
		return [currentPage, ...range(currentPage + 1, lastPage)];
	}

	return [...range(start, currentPage), currentPage, ...range(currentPage + 1, lastPage)];
}

export function paginate<T>(configuration: { items: T[]; currentPage: number; pageSize: number }) {
	const { items, currentPage, pageSize } = configuration;
	const totalPages = Math.ceil(items.length / pageSize);
	if (currentPage >= totalPages) return items.slice((totalPages - 1) * pageSize);
	return items.slice((currentPage - 1) * pageSize, (currentPage - 1) * pageSize + pageSize);
}

export function range(min: number, max: number) {
	if (min === max) return [min];
	return [...Array(Math.floor(max - min)).keys()].map((i) => i + min);
}
