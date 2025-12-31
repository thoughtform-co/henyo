import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { visualizer } from 'rollup-plugin-visualizer';

export default defineConfig(({ mode }) => ({
  plugins: [
    react(),
    mode === 'analyze' &&
      visualizer({
        open: true,
        filename: 'build/bundle-stats.html',
        gzipSize: true,
        brotliSize: true,
      }),
  ].filter(Boolean),
  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx', '.json'],
    alias: {
      // Figma asset aliases (from Figma export)
      'figma:asset/88167c2f00ce9faddf88a45b5e3da835c418cc8f.png': path.resolve(
        __dirname,
        './src/assets/88167c2f00ce9faddf88a45b5e3da835c418cc8f.png'
      ),
      'figma:asset/708a9c032aa41cd6546dbbdae0bc4008447ae7dd.png': path.resolve(
        __dirname,
        './src/assets/708a9c032aa41cd6546dbbdae0bc4008447ae7dd.png'
      ),
      'figma:asset/652bef7403c6e4883494a2b9da0da2358b8a0e66.png': path.resolve(
        __dirname,
        './src/assets/652bef7403c6e4883494a2b9da0da2358b8a0e66.png'
      ),
      'figma:asset/6449ec60f0764057301689f0997242f0d168676f.png': path.resolve(
        __dirname,
        './src/assets/6449ec60f0764057301689f0997242f0d168676f.png'
      ),
      'figma:asset/2a8d20e3f1d39e1267a9f4e1bb3e684c627d1686.png': path.resolve(
        __dirname,
        './src/assets/2a8d20e3f1d39e1267a9f4e1bb3e684c627d1686.png'
      ),
      'figma:asset/1d09dde76892af022de27b92d7a2106c9a372801.png': path.resolve(
        __dirname,
        './src/assets/1d09dde76892af022de27b92d7a2106c9a372801.png'
      ),
      // Path alias for imports
      '@': path.resolve(__dirname, './src'),
    },
  },
  build: {
    target: 'esnext',
    outDir: 'build',
  },
  server: {
    port: 3000,
    open: true,
  },
}));
