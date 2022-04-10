<script lang="ts">
	export let country: CountryShort;
</script>

<article class="bg-blue-700 rounded-lg rounded-b-lg shadow-lg outline-none">
	<a sveltekit:prefetch href="/{country.alpha3Code}" aria-label="View {country.name} details">
		<img
			class="h-40 w-full object-cover object-center rounded-t-lg"
			src={country.flag}
			alt="{country.name} flag"
			loading="lazy"
			height="160"
		/>
		<div class="pt-8 px-8 pb-14">
			<h2 class="mb-4 | text-lg font-bold capitalize">{country.name}</h2>
			<dl class="space-y-2" aria-labelledby="country-stats-label">
				<span class="sr-only" id="country-stats-label">{country.name} Stats</span>
				<div class="flex gap-1">
					<dt class="font-semibold">Population:</dt>
					<dd class="text-white/80">
						{country.population}
					</dd>
				</div>
				<div class="flex gap-1">
					<dt class="font-semibold">Region:</dt>
					<dd class="text-white/80">
						{country.region}
					</dd>
				</div>
				<div class="flex gap-1">
					<dt class="font-semibold">Capital:</dt>
					<dd class="text-white/80">
						{country.capital || 'N/A'}
					</dd>
				</div>
			</dl>
		</div>
	</a>
</article>
