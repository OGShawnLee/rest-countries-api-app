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
	import {
		Listbox,
		ListboxButton,
		ListboxLabel,
		ListboxOption,
		ListboxOptions
	} from 'malachite-ui';
	import { useClassNameResolver } from 'malachite-ui/hooks';
	import { slide } from 'svelte/transition';

	export let name: string | null;
	export let region: string | null;

	const className = useClassNameResolver<'ACTIVE' | 'SELECTED'>({
		base: 'px-8 py-2 first:pt-4 last:pb-4 | flex items-center justify-between | cursor-pointer',
		active: { off: 'dark:text-white/80', on: 'bg-gray-92 dark:(bg-blue-600 text-white)' },
		selected: 'font-bold dark:text-white'
	});
</script>

<section class="w-11/12 max-w-8xl mx-auto | flex flex-col md:flex-row gap-8 justify-between">
	<h2 class="sr-only" id="filters-label">Countries Filters</h2>
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
	<Listbox class="relative" bind:value={region} infinite>
		<ListboxLabel class="sr-only">Filter by Region</ListboxLabel>
		<ListboxButton
			class="w-[fit-content] px-8 py-4 | bg-gray-98 rounded-lg shadow-md focus-within-ring | dark:bg-blue-700 "
		>
			{region || 'All Regions'}
		</ListboxButton>
		<div class="absolute top-18 right-0 z-80 | rounded-lg" slot="options" transition:slide|local>
			<ListboxOptions
				class="w-60 | bg-gray-98 shadow-xl rounded-lg overflow-hidden outline-none | dark:bg-blue-700"
				static
			>
				<ListboxOption class={className} value={null} let:isSelected>
					<span> All Regions </span>
					{#if isSelected}
						<i class="bx bxs-badge-check text-lg dark:text-white" />
					{/if}
				</ListboxOption>
				{#each regions as region}
					<ListboxOption class={className} value={region} let:isSelected>
						<span> {region} </span>
						{#if isSelected}
							<i class="bx bxs-badge-check text-lg dark:text-white" />
						{/if}
					</ListboxOption>
				{/each}
			</ListboxOptions>
		</div>
	</Listbox>
</section>
