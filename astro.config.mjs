import { defineConfig } from 'astro/config'
import tailwind from "@astrojs/tailwind"

import robotsTxt from "astro-robots-txt"
import sitemap from "@astrojs/sitemap"

const siteUrl = process.env.SITE_URL ?? "https://gabrielolivieri.dev"

// https://astro.build/config
export default defineConfig({
  integrations: [
    tailwind(),
    sitemap({
      filter: (page) => !page.includes("/components"),
    }),
    robotsTxt(),
  ],
  site: siteUrl,
})
