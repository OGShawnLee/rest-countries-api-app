import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	theme: {
		colors: {
			blue: {
				700: 'hsl(209, 23%, 22%)',
				800: 'hsl(207, 26%, 17%)',
				900: 'hsl(200, 15%, 8%)'
			},
			gray: {
				52: 'hsl(0, 0%, 52%)',
				98: 'hsl(0, 0%, 98%)'
			},
			transparent: 'transparent',
			white: 'hsl(0, 0%, 100%)'
		},
		fontFamily: {
			nunito: ['Nunito Sans', 'sans-serif']
		}
	}
});
