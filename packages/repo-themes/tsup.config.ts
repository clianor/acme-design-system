import config from "@acme/config-tsup";
import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entryPoints: ["src/button.tsx"],
  ...config,
  ...options,
}));
