## Experiment 65: Getting Output With Rollup

#### New to Me
- Here is a working Rollup config for a bare-bones Babylon/React/ TypeScript project:
```js
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
```
- We are using the `manualChunks` function signature here to check for `node_modules`. I believe this will create a single `vendor` chunk based on all vendor modules that get used in the project.
- After bundling this project with the above config, we get two output files: `index.js` and `vendor-[hash].js`.
- `index.js` is 4kb, which is fairly reasonable, but the vendor bundle is a whopping 1.1mb.