import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'esm',
    manualChunks(id) {
      if (id.includes('node_modules')) {
        return 'vendor';
      }
    },
  },
  plugins: [
    typescript(),
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
}
