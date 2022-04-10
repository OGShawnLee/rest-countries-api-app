import { defineConfig } from 'vitest/config';
import { resolve } from 'path';

export default defineConfig({
	resolve: {
		alias: {
			$lib: resolve('src/lib'),
			'$lib/*': resolve('src/lib/*')
		}
	}
});
