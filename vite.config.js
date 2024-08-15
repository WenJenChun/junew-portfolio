import { defineConfig } from 'vite'
import liveReload from 'vite-plugin-live-reload';
import { glob } from 'glob';
import { fileURLToPath } from 'node:url';
import path from 'node:path';


export default defineConfig({
  base: '/junew-portfolio/',
  plugins: [
    liveReload(['./pages/**/*.html']),
  ],
  build: {
    rollupOptions: {
      input: Object.fromEntries(
        glob
          .sync('pages/**/*.html') // 匹配 pages 資料夾中的所有 .html 文件
          .map((file) => [
            path.relative('pages', file.slice(0, file.length - path.extname(file).length)),
            fileURLToPath(new URL(file, import.meta.url)),
          ])
      ),
    },
    outDir: 'dist',
  },
});


