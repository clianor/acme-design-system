import getConfig from "@acme/config-tsup";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/button.tsx"],
  ...getConfig({
    watch: options.watch ?? false,
  }),
  ...options,
}));
