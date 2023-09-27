import { defineConfig } from 'astro/config';
import { ViteToml } from "vite-plugin-toml";
import tailwind from "@astrojs/tailwind";
import netlify from "@astrojs/netlify/functions";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind({
      // Example: Disable injecting a basic `base.css` import on every page.
      // Useful if you need to define and/or import your own custom `base.css`.
      applyBaseStyles: false,      
    }), 
    svelte()],
  vite: {
    plugins: [ViteToml()]
  },
  output: "server",
  adapter: netlify()
});