<script>
	import { theme } from '../stores';

	$: themeIcon = $theme === 'DARK' ? 'bx-sun' : 'bx-moon';
	$: themeText = $theme === 'DARK' ? 'Light' : 'Dark';
</script>

<header class="fixed top-0 left-0 right-0 z-90 | dark:bg-blue-700 bg-gray-98 shadow-md">
	<div class="h-18 w-11/12 max-w-8xl mx-auto | flex items-center justify-between">
		<a
			class="rounded-sm text-base font-semibold focus-ring focus:(dark:ring-offset-blue-700 ring-offset-8)"
			href="/"
		>
			Where in the world?
		</a>
		<button
			class="flex items-center gap-3 | rounded-sm focus-ring focus:(dark:ring-offset-blue-700 ring-offset-gray-98 ring-offset-6)"
			aria-label="toggle color theme"
			aria-describedby="theme-toggler-label"
			on:click={theme.toggle}
		>
			<span class="sr-only" id="theme-toggler-label">
				Change color theme from dark to light or light to dark
			</span>
			<i class="bx {themeIcon} text-lg" />
			<span>
				{themeText} Theme
			</span>
		</button>
	</div>
</header>
