import colours from 'windicss/colors';
import { defineConfig } from 'windicss/helpers';

export default defineConfig({
	darkMode: 'class',
	theme: {
		colors: {
			blue: {
				600: 'hsl(207, 20%, 28%)',
				700: 'hsl(209, 23%, 22%)',
				800: 'hsl(207, 26%, 17%)',
				900: 'hsl(200, 15%, 8%)'
			},
			gray: {
				52: 'hsl(0, 0%, 52%)',
				92: 'hsl(0, 0%, 92%)',
				98: 'hsl(0, 0%, 98%)'
			},
			red: colours.red,
			transparent: 'transparent',
			white: 'hsl(0, 0%, 100%)'
		},
		fontFamily: {
			nunito: ['Nunito Sans', 'sans-serif']
		}
	}
});
