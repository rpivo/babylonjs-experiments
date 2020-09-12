## Experiment 67: Rollup - Using manualChunks' Object Form

#### New to Me
- Maybe using `manualChunks`' object form will help reduce the size of the bundle (not sure why that would be, but if it does, it could be investigated).
- Here is what the current `manualChunks` function form looks like:
```js
    manualChunks(id) {
      if (id.includes('node_modules')) {
        return 'vendor';
      }
    },
```
- Instead, I'll try this:
```js
    manualChunks: {
      babylon: ['@babylonjs/core'],
      react: ['react'],
      reactDOM: ['react-dom'],
    },
```
- I'm not using `@babylonjs/core` yet, so maybe that module will be stripped from the bundle.
- While creating the bundle using this config, Rollup provided some useful feedback:
```sh
(!) Generated an empty chunk
babylon
```
- Unlike the function form, this form explicitly creates a chunk for each of the named modules: babylon, react, and reactDOM.
- This means that, unlike the previous output which had a main index.js output file and a vendor bundle file (two files total), this config outputs one file for each of the named chunks, and the index.js file (four files total).
- These are the files that are output:
  - babylon-[hash].js: a 1-byte file that's empty.
  - index.js: a 208-byte file.
  - react-[hash].js: a 74,271-byte file.
  - reactDOM-[hash].js: a 1,018,276-byte file.
  - total file size: **1,092,756 bytes**.
- Compare this to the previous output files:
  - index.js: a 168-byte file.
  - vendor-[hash].js: a 1,093,575-byte file.
  - total file size: **1,093,743 bytes**.
- Naming the output chunks seems to save about 1kb.
- Both of these outputs are still pretty big, each of which is over a megabyte of output.
