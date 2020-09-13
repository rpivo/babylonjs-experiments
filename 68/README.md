## Experiment 67: Running the Rollup Bundle Through Terser

#### New to Me
- For this build, I added Rollup's `replace` plugin to find instances of `process.env` in the code and stringify it.
- I also added Rollup's `terser` plugin to minify the code.
- The new Rollup config looks like this:
```js
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

```
- These are the new file sizes for the output:
  - `babylon-[hash].js` - 1 byte
  - `index.js` - 165 bytes
  - `react-[hash].js` - 7,334 bytes
  - `reactDOM-[hash].js` - 121,529 bytes
  - total file size: **129,029 bytes**
- The previous total file size was **1,092,756 bytes** (1.09mb). The new total file size is 129kb (12% of the original size).