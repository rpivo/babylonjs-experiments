import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import { terser } from 'rollup-plugin-terser';

const env = process.env.NODE_ENV;

export default {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'esm',
    manualChunks: {
      babylon: ['@babylonjs/core'],
      react: ['react'],
      reactDOM: ['react-dom'],
    },
    plugins: env === 'production' && [terser()],
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify(env),
    }),
    typescript(),
    resolve(),
    commonjs({
      include: 'node_modules/**',
    }),
  ],
}
