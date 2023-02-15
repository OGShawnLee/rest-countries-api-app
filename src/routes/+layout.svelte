<script lang="ts">
	import 'virtual:windi.css';
	import { Header } from '../components';
</script>

<Header />

<slot />

<style>
	:global(.focus-ring) {
		@apply outline-none transform hover:scale-105 focus:(ring-2 ring-gray-52);
	}

	:global(.focus-within-ring) {
		@apply outline-none transform hover:scale-105 focus-within:(ring-2 ring-gray-52);
	}
</style>
