import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'
import path from 'path';
import { viteStaticCopy } from 'vite-plugin-static-copy'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/*',
          dest: 'assets'
        }
      ]
    }),
    // clearConsoleOnHMR() // Add the custom plugin here
  ],
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, './src/components'),
      '@nav': path.resolve(__dirname, './src/nav'),
      '@popups': path.resolve(__dirname, './src/popups'),
      '@routes': path.resolve(__dirname, './src/routes'),
      '@stores': path.resolve(__dirname, './src/stores'),
      '@utils': path.resolve(__dirname, './src/utils'),
      '@windows': path.resolve(__dirname, './src/windows'),
      '@config': path.resolve(__dirname, './src/config'),
      'main': path.resolve(__dirname, './src/main'),
      '@public': path.resolve(__dirname, './public'),
      '@assets': path.resolve(__dirname, './assets'),
    },
  },
  assetsInclude: ['**/*.glb', '**/*.gltf', '**/*.png', '**/*.jpg', '**/*.jpeg', '**/*.svg', '**/*.mp3', '**/*.wav', '**/*.ogg', '**/*.bin', '**/*.gltf', '**/*.glb', '**/*.hdr', '**/*.env', '**/*.csv'],
  // server: {
  //   hmr: false
  // }
}
)