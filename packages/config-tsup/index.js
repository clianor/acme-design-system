/** @type {import('tsup').Options} */
module.exports = {
  format: ["esm", "cjs"],
  external: ["react", "react-dom"],
  outDir: "dist",
  platform: "browser",
  target: "es2019",
  bundle: true,
  dts: true,
  splitting: true,
  sourcemap: true,
  clean: true,
  shims: true,
  outExtension: ({ format }) => ({
    js: `.${format === "esm" ? "js" : format}`,
  }),
};
