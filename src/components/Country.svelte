<script lang="ts">
	import { shortenString } from '$lib/utils';

	export let country: CountryShort;
</script>

<article
	class="relative h-96 | dark:bg-blue-700 bg-gray-98 rounded-lg rounded-b-lg shadow-lg outline-none"
>
	<img
		class="h-40 w-full object-cover object-center rounded-t-lg hover:w-120 z-20"
		src={country.flag}
		alt="{country.name} flag"
		loading="lazy"
		height="160"
	/>
	<div class="pt-8 px-8 pb-14">
		<h2 class="mb-4 | text-lg font-bold capitalize">
			{shortenString(country.name, 35)}
		</h2>
		<dl class="space-y-2">
			<div class="flex gap-1">
				<dt class="font-semibold">Population:</dt>
				<dd class="dark:text-white/80">
					{country.population}
				</dd>
			</div>
			<div class="flex gap-1">
				<dt class="font-semibold">Region:</dt>
				<dd class="dark:text-white/80">
					{country.region}
				</dd>
			</div>
			<div class="flex gap-1">
				<dt class="font-semibold">Capital:</dt>
				<dd class="dark:text-white/80">
					{country.capital || 'N/A'}
				</dd>
			</div>
		</dl>
		<a href="/{country.alpha3Code}">
			<span class="sr-only">
				View {country.name} details
			</span>
		</a>
	</div>
</article>

<style>
	a::after {
		content: '';
		@apply absolute inset-0 pointer-events-auto;
	}

	article {
		@apply transform hover:scale-105 focus-within:scale-110;
	}
</style>
