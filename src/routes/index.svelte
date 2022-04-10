<script lang="ts">
	import { Country } from '../components';

	export let countries: CountryShort[];
</script>

<svelte:head>
	<title>Countries / All Countries</title>
</svelte:head>

<main class="flex flex-col items-center gap-12">
	<!-- TODO: ADD FILTERS -->
	<div class="max-w-xs sm:(w-11/12 max-w-8xl) mx-auto">
		<section aria-labelledby="countries-section-label">
			<span class="sr-only" id="countries-section-label">Countries</span>
			<ul class="grid gap-8 sm:grid-cols-2 lg:(grid-cols-3 gap-12) xl:grid-cols-4">
				{#each countries as country, index (index)}
					<li>
						<Country {country} />
					</li>
				{/each}
			</ul>
		</section>
		<!-- TODO: ADD PAGINATION -->
	</div>
</main>
