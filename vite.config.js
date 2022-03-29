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
      alias: [
        { find: /^@src/, replacement: resolve(__dirname, './src') },
        { find: /^@posts/, replacement: resolve(__dirname, './src/posts') },
        
        { find: 'react/jsx-runtime', replacement: 'react/jsx-runtime.js' },
      ]
      // {
      //   "react/jsx-runtime": "react/jsx-runtime.js",
      //   "@src": resolve(__dirname, './src')
      // },
    },

    build: {
      rollupOptions: {
        input: {
          main: resolve(__dirname, 'index.html'),
          // hello: resolve(__dirname, 'posts/hello/index.mdx')
        }
      }
    }
  }
})
