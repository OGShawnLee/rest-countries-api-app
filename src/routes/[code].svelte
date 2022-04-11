<script lang="ts">
	export let country: CountryDetails;
	export let borders: CountryBorder[];
</script>

<svelte:head>
	<title>Countries / {country.name}</title>
</svelte:head>

<main class="max-w-xs sm:(w-11/12 max-w-8xl) mx-auto | flex flex-col gap-12">
	<div>
		<a
			class="block w-[fit-content] px-8 py-2 | flex items-center justify-center gap-2 | dark:bg-blue-700 bg-gray-98 rounded-lg shadow-md rounded-lg shadow-md focus-ring"
			href="/"
			aria-describedby="go-back-label"
		>
			<i class="bx bx-left-arrow-alt text-xl" />
			<span>Back</span>
			<span class="sr-only" id="go-back-label">Go to home page</span>
		</a>
	</div>

	<div class="grid gap-12 lg:grid-cols-2 xl:gap-30">
		<img src={country.flag} alt="{country.name} flag" />
		<div class="flex flex-col justify-center">
			<header class="mb-6">
				<h1 class="text-xl md:text-2xl font-extrabold capitalize">
					{country.name}
				</h1>
			</header>
			<section class="flex flex-col gap-12">
				<h2 class="sr-only">Country Details</h2>
				<div class="flex flex-col sm:(flex-row justify-between) gap-6">
					<dl class="flex flex-col gap-2">
						<div class="flex gap-1">
							<dt class="font-semibold">Native Name:</dt>
							<dd class="dark:text-white/80">
								{country.nativeName}
							</dd>
						</div>
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
							<dt class="font-semibold">Sub Region:</dt>
							<dd class="dark:text-white/80">
								{country.subregion}
							</dd>
						</div>
						<div class="flex gap-1">
							<dt class="font-semibold">Capital:</dt>
							<dd class="dark:text-white/80">
								{country.capital || 'N/A'}
							</dd>
						</div>
					</dl>
					<dl class="flex flex-col gap-2">
						<div class="flex gap-1">
							<dt class="font-semibold">Top Level Domain:</dt>
							<dd class="dark:text-white/80">
								{country.topLevelDomain}
							</dd>
						</div>
						<div class="flex gap-1">
							<dt class="font-semibold">Currencies:</dt>
							<dd class="dark:text-white/80">
								{#each country.currencies as currency}
									<span>{currency.name}</span>
								{/each}
							</dd>
						</div>
						<div class="flex gap-1">
							<dt class="font-semibold">Languages:</dt>
							<dd class="dark:text-white/80">
								{#each country.languages as language}
									<span> {language.name} </span>
								{/each}
							</dd>
						</div>
					</dl>
				</div>
				{#if borders.length}
					<section class="space-y-3">
						<h2 class="text-lg font-semibold">Border Countries</h2>
						<ul class="flex flex-wrap item-center gap-3">
							{#each borders as { alpha3Code, name }}
								<li>
									<a
										class="block h-[fit-content] px-8 py-2 | dark:bg-blue-700 bg-gray-98 rounded-lg shadow-md focus-ring"
										sveltekit:prefetch
										href="/{alpha3Code}"
									>
										{name}
									</a>
								</li>
							{/each}
						</ul>
					</section>
				{/if}
			</section>
		</div>
	</div>
</main>
