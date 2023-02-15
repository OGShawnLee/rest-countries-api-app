<script lang="ts">
	import type { PageData } from "./$types";
	import { Country, Pagination, Filters } from '../components';
	import {
		filterByName,
		filterByNameAndRegion,
		filterByRegion
	} from '../components/Filters.svelte';
	import { paginate } from '$lib/paginate';

	export let data: PageData;

	let name: string | null = null;
	let region: string | null = null;
	let filteredCountries = data.countries;

	$: lowerName = name?.toLowerCase();
	$: {
		if (lowerName || region) {
			if (lowerName && region)
				filteredCountries = filterByNameAndRegion(data.countries, lowerName, region);
			else if (lowerName) filteredCountries = filterByName(data.countries, lowerName);
			else if (region) filteredCountries = filterByRegion(data.countries, region);
		} else filteredCountries = data.countries;
	}

	let currentPage = 1;
	$: paginated = paginate({ items: filteredCountries, currentPage, pageSize: 16 });
</script>

<svelte:head>
	<title>Countries / All Countries</title>
</svelte:head>

<main class="flex flex-col items-center gap-12">
	<h1 class="sr-only">All Countries</h1>
	<Filters bind:name bind:region />
	<div class="max-w-xs sm:(w-11/12 max-w-8xl) mx-auto | flex flex-col gap-12">
		<div>
			<ul class="grid gap-8 sm:grid-cols-2 lg:(grid-cols-3 gap-12) xl:grid-cols-4">
				{#each paginated as country, index (index)}
					<li>
						<Country {country} />
					</li>
				{/each}
			</ul>
		</div>
		<Pagination bind:currentPage items={filteredCountries} pageSize={16} />
	</div>
</main>
