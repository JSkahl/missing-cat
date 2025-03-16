import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
      "icons": fileURLToPath(new URL("./node_modules/vue-material-design-icons", import.meta.url)),
      "data": fileURLToPath(new URL("./src/data", import.meta.url)),
      "utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
    },
  },
});
