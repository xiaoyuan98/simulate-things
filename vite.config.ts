import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'lib/src/main.tsx'),
      name: 'Simulate-things',
      // the proper extensions will be added
      fileName: 'simulate-things'
    },
    rollupOptions: {
      // 确保外部化处理那些你不想打包进库的依赖
      external: ['react','react-dom','three'],
      output: {
        // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
        globals: {
          react: 'React'
        }
      }
    },
    outDir: 'lib/dist'
  },
  plugins: [react()]
})
