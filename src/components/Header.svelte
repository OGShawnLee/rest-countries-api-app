<script>
	import { SwitchGroup, Switch, SwitchDescription, SwitchLabel } from 'malachite-ui';
	import { theme } from '../stores';

	$: isDarkTheme = $theme === 'DARK';
	$: themeIcon = isDarkTheme ? 'bx-sun' : 'bx-moon';
	$: themeText = isDarkTheme ? 'Light' : 'Dark';
</script>

<header class="fixed top-0 left-0 right-0 z-90 | dark:bg-blue-700 bg-gray-98 shadow-md">
	<div class="h-18 w-11/12 max-w-8xl mx-auto | flex items-center justify-between">
		<a
			class="rounded-sm text-base font-semibold focus-ring focus:(dark:ring-offset-blue-700 ring-offset-8)"
			href="/"
		>
			Where in the world?
		</a>
		<SwitchGroup class="flex items-center gap-6">
			<SwitchLabel as="span" passive>{themeText} Theme</SwitchLabel>
			<SwitchLabel as="span" class="sr-only">Toggle Color Theme</SwitchLabel>
			<SwitchDescription class="sr-only">
				Switch from Light to Dark Theme and vice versa
			</SwitchDescription>
			<Switch
				class="rounded-sm focus-ring focus:(dark:ring-offset-blue-700 ring-offset-gray-98 ring-offset-6) cursor-pointer"
				checked={isDarkTheme}
				on:click={theme.toggle}
			>
				<i class="bx {themeIcon} text-lg" />
			</Switch>
		</SwitchGroup>
	</div>
</header>
