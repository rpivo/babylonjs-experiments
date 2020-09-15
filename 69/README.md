## Experiment 69: Compressing the Rollup Bundle

#### New to Me
- I added a compression plugin to the Rollup config:
```js
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
```
- This outputs the bundle both as .js files as well as .br files (a duplicated bundle).
- The .js files can be removed after the fact, if desired.
- These are the new file sizes for the output:
  - `babylon-[hash].js.br` - 5 bytes
  - `index.js.br` - 109 bytes
  - `react-[hash].js.br` - 2632 bytes
  - `reactDOM-[hash].js.br` - 33,573 bytes
  - total file size: **36,319 bytes**
- The previous total file size was **129,029 bytes** (129kb). The new total file size is 36kb (26% of the previous size, and about 3% of the original size).
- I wonder if there is a good way to skip empty modules from the brotli compression, since that caused the empty Babylon chunk to increase in size (pretty tiny increase, but still).