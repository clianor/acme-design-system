import getConfig from "@acme/tsup-config";
import { vanillaExtractPlugin } from "@vanilla-extract/esbuild-plugin";
import { defineConfig } from "tsup";

export default defineConfig((options) => {
  return {
    entryPoints: ["src/index.ts"],
    esbuildPlugins: [vanillaExtractPlugin()],
    ...getConfig({
      watch: options.watch ?? false,
    }),
    ...options,
  };
});
