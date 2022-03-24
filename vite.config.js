import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import { remarkCodeHike } from "@code-hike/mdx"
import theme from "shiki/themes/github-dark.json"
const { resolve } = require('path')

export default defineConfig(async () => {
  const mdx = await import("@mdx-js/rollup")
  return {
    plugins: [
      react(),
      mdx.default({ remarkPlugins: [[remarkCodeHike, { theme }]] }),
    ],
    resolve: {
      alias: {
        "react/jsx-runtime": "react/jsx-runtime.js",
      },
    },
    // build: {
    //   rollupOptions: {
    //     input: {
    //       main: resolve(__dirname, 'index.html'),
    //       // hello: resolve(__dirname, 'posts/hello/index.mdx')
    //     }
    //   }
    // }
  }
})
