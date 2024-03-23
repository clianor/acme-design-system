const esbuildPluginRemoveTestId = require('esbuild-plugin-removetestid');

/** @type {import('tsup').Options} */
const config = {
  format: ['esm', 'cjs'],
  external: ['react', 'react-dom'],
  outDir: 'dist',
  platform: 'browser',
  target: 'es2019',
  bundle: true,
  dts: true,
  splitting: true,
  sourcemap: true,
  shims: true,
  esbuildPlugins: [esbuildPluginRemoveTestId()],
  outExtension: ({ format }) => ({
    js: `.${format === 'esm' ? 'js' : format}`,
  }),
};

function getConfig({ watch, esbuildPlugins }) {
  return {
    ...config,
    minify: !watch,
    clean: !watch,
    sourcemap: !watch,
    esbuildPlugins: [...config.esbuildPlugins, ...esbuildPlugins],
  };
}

module.exports = getConfig;
