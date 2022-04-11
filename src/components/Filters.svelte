<script lang="ts" context="module">
	export function filterByName<T extends { name: string }>(countries: T[], name: string) {
		return countries.filter((country) => country.name.includes(name));
	}

	export function filterByNameAndRegion<T extends { name: string; region: string }>(
		countries: T[],
		name: string,
		region: string
	) {
		return countries.filter((country) => country.region === region && country.name.includes(name));
	}

	export function filterByRegion<T extends { region: string }>(countries: T[], region: string) {
		return countries.filter((country) => country.region === region);
	}

	const regions = [
		'Africa',
		'Americas',
		'Antarctic',
		'Antarctic Ocean',
		'Asia',
		'Europe',
		'Oceania',
		'Polar'
	];
</script>

<script lang="ts">
	export let name: string | null;
	export let region: string | null;
</script>

<section
	class="w-11/12 max-w-8xl mx-auto | flex flex-col md:flex-row gap-8 justify-between"
	aria-labelledby="filters-label"
>
	<span class="sr-only" id="filters-label">Countries Filters</span>
	<div
		class="relative w-full md:max-w-lg | dark:bg-blue-700 bg-gray-98 rounded-lg transform hover:scale-105"
	>
		<i
			class="bx bx-search left-6 absolute transform bottom-1/2 translate-y-1/2 | text-lg pointer-events-none"
		/>
		<label class="sr-only" for="country-name">Country Name</label>
		<input
			class="w-full h-full py-4 pl-18 pr-8 | bg-transparent rounded-lg shadow-md text-[13px] light:placeholder-gray-52 tranform outline-none focus:(ring-2 ring-gray-52)"
			type="text"
			bind:value={name}
			id="country-name"
			placeholder="Search for a country..."
		/>
	</div>
	<div
		class="w-[fit-content] px-8 py-4 | dark:bg-blue-700 bg-gray-98 rounded-lg shadow-md focus-within-ring"
	>
		<label class="sr-only" for="country-region">Filter by Region</label>
		<select
			class="dark:bg-blue-700 bg-gray-98 outline-none border-none"
			bind:value={region}
			id="country-region"
		>
			<option value={null}>All Regions</option>
			{#each regions as region}
				<option value={region}>{region}</option>
			{/each}
		</select>
	</div>
</section>
