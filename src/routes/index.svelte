<script lang="ts">
	import { Country, Pagination } from '../components';
	import { paginate } from '$lib/paginate';

	export let countries: CountryShort[];

	let currentPage = 1;
	$: paginated = paginate({ items: countries, currentPage, pageSize: 16 });
</script>

<svelte:head>
	<title>Countries / All Countries</title>
</svelte:head>

<main class="flex flex-col items-center gap-12">
	<!-- TODO: ADD FILTERS -->
	<div class="max-w-xs sm:(w-11/12 max-w-8xl) mx-auto | flex flex-col gap-12">
		<section aria-labelledby="countries-section-label">
			<span class="sr-only" id="countries-section-label">Countries</span>
			<ul class="grid gap-8 sm:grid-cols-2 lg:(grid-cols-3 gap-12) xl:grid-cols-4">
				{#each paginated as country, index (index)}
					<li>
						<Country {country} />
					</li>
				{/each}
			</ul>
		</section>
		<Pagination bind:currentPage items={countries} pageSize={16} />
	</div>
</main>
