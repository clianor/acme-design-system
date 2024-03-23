import { vanillaExtractPlugin } from '@vanilla-extract/esbuild-plugin';
import { defineConfig } from 'tsup';

import getConfig from '@acme/tsup-config';

export default defineConfig((options) => ({
  entryPoints: ['src/index.ts'],
  ...getConfig({
    watch: options.watch ?? false,
    esbuildPlugins: [vanillaExtractPlugin()],
  }),
  ...options,
}));
