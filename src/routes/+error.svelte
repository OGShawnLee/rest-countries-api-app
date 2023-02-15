<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/stores';

	onMount(() => {
		const header = document.getElementsByTagName('header')[0];
		if (header) {
			header.hidden = true;
			return () => (header.hidden = false);
		}
	});
</script>

<svelte:head>
	<title>Countries / {$page.status}</title>
</svelte:head>

<!-- ! Header is still in the page! Tried to use a named layout for this page but it seems like error pages don't support it yet -->

<div class="fixed inset-0 z-90 | flex items-center justify-center | bg-blue-900 text-white">
	<div class="max-w-xs grid | text-center | md:max-w-lg xl:(max-w-6xl grid-cols-3 text-left)">
		<div class="xl:col-span-2 py-8 space-y-6">
			<header>
				<h1 class="text-2xl font-semibold | md:text-3xl xl:text-5xl">
					<span class="font-extrabold text-red-400">Bad News! </span>
					Something went wrong with that thing!
				</h1>
			</header>
			<p class="text-white/80">
				Oh no! Anyways, why don't you try to
				<span class="font-semibold text-white underline">
					<a href="/">load the home page</a>?
				</span>
			</p>
		</div>
		<div class="xl:(col-span-1 justify-self-end)">
			<span class="text-white/40 text-10xl font-semibold | md:text-15xl xl:text-20xl">
				{$page.status}
			</span>
		</div>
	</div>
</div>
