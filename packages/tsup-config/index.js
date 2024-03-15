/** @type {import('tsup').Options} */
const config = {
  format: ["esm", "cjs"],
  external: ["react", "react-dom"],
  outDir: "dist",
  platform: "browser",
  target: "es2019",
  bundle: true,
  dts: true,
  splitting: true,
  sourcemap: true,
  shims: true,
  outExtension: ({ format }) => ({
    js: `.${format === "esm" ? "js" : format}`,
  }),
};

function getConfig({ watch }) {
  return { ...config, minify: !watch, clean: !watch, sourcemap: !watch };
}

module.exports = getConfig;
