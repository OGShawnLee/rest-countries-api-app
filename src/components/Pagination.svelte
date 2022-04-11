<script lang="ts">
	import Pagination from '$lib/paginate';

	export let items: unknown[];
	export let currentPage: number;
	export let pageSize = 15;
	export let limit: number = 1;
</script>

<Pagination {items} bind:currentPage {pageSize} {limit} let:pages let:go>
	<div
		class="fixed bottom-0 h-12 left-0 right-0 | dark:bg-blue-700 bg-white md:(static dark:bg-transparent)"
	>
		<div class="h-full w-11/12 max-w-md mx-auto | flex items-center justify-between gap-3">
			<button
				class="focus-ring focus:dark:ring-offset-blue-800"
				on:click={go.first}
				aria-label="View first page"
			>
				<i class="bx bx-chevrons-left text-2xl" />
			</button>
			<button
				class="focus-ring focus:dark:ring-offset-blue-800"
				on:click={go.previous}
				aria-label="View previous page"
			>
				<i class="bx bx-chevron-left text-2xl" />
			</button>
			{#each pages as page}
				<button
					class:font-extrabold={page === currentPage}
					class="focus-ring focus:dark:ring-offset-blue-800"
					on:click={() => go.to(page)}
					aria-label="View page {page}"
				>
					{page}
				</button>
			{/each}
			<button
				class="focus-ring focus:dark:ring-offset-blue-800"
				on:click={go.next}
				aria-label="View next page"
			>
				<i class="bx bx-chevron-right text-2xl" />
			</button>
			<button
				class="focus-ring focus:dark:ring-offset-blue-800"
				on:click={go.last}
				aria-label="View last page"
			>
				<i class="bx bx-chevrons-right text-2xl" />
			</button>
		</div>
	</div>
</Pagination>

<style>
	button {
		@apply outline-none rounded-[2px] focus:ring-offset-6;
	}
</style>
