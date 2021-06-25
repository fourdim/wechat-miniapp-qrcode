/* eslint-disable no-undef */
import path from 'path'
import { defineConfig } from 'vite'
import { babel } from '@rollup/plugin-babel'

const babelOptions = {
  "presets": ['@babel/preset-env'],
}

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'src/main.js'),
      name: 'wechat-miniapp-qrcode',
      formats: ["umd"]
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
        }
      },
      plugins: [
        babel(babelOptions)
      ]
    }
  }
})