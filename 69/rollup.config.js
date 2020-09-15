import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';
import gzipPlugin from 'rollup-plugin-gzip';
import { terser } from 'rollup-plugin-terser';
import { brotliCompressSync } from 'zlib';

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
    gzipPlugin({
      customCompression: (content) => brotliCompressSync(Buffer.from(content)),
      fileName: '.br',
    }),
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
