<script lang="ts">
	import { getPages } from './';

	export let items: unknown[] = [];
	export let currentPage = 1;
	export let pageSize = 15;
	export let limit: number | undefined = undefined;

	$: totalPages = Math.ceil(items.length / pageSize);
	$: if (currentPage > totalPages && totalPages > 0) currentPage = totalPages;
	$: pages = getPages({ currentPage, totalPages, limit });

	const go = {
		first() {
			currentPage = 1;
		},
		last() {
			if (currentPage > 0) currentPage = totalPages;
		},
		next() {
			if (currentPage < totalPages) currentPage++;
		},
		previous() {
			if (currentPage > 1) currentPage--;
		},
		to(page: number) {
			if (page > totalPages || page < 0) return;
			currentPage = page;
		}
	};
</script>

{#if totalPages > 1}
	<slot {go} {pages} {totalPages} />
{/if}
