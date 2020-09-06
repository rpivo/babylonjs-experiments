## Experiment 64: Rollup's Manual Chunks

#### New to Me
- For code splitting, there are cases where Rollup splits code into chunks automatically:
  - when dynamic loading
  - when there are multiple entry points
- You can explicitly tell Rollup which modules to split into separate chunks via the `output.manualChunks` option.
- `output.manualChunks` allows the creation of custom shared common chunks.
- You can read more about manual chunks here: https://rollupjs.org/guide/en/#outputmanualchunks
- I've been using this in my Rollup configs with the 'object form'.
- When using the object form, each property represents a chunk that contains the listed modules and all their dependencies if they are part of the module graph unless they are already in another manual chunk.
- The name of the chunk will be determined by the property key.
- I've been doing this with `react` and `react-dom`, but it would be very possible to also do this with `@babylonjs/core`.
- Note that it is not necessary for the listed modules themselves to be part of the module graph, which is useful if you are working with `@rollup/plugin-node-resolve` and use deep imports for packages.
- For instance:
```js
manualChunks: {
  lodash: ['lodash']
}
```
- The above will put all lodash modules into a manual chunk even if you are only using imports of the form `import get from 'lodash/get'`.
- There is also a function form:
```js
manualChunks(id) {
  if (id.includes('node_modules')) {
    return 'vendor';
  }
}
```
- With the function form, each resolved module id will be passed to the function.
- If a string is returned, the module and all its dependency will be added to the manual chunk with the given name.
- The example above will create a `vendor` chunk containing all dependencies inside `node_modules`.
- Be aware that manual chunks can change the behavior of the application if side-effects are triggered before the corresponding modules are actually used.
- When using the function form, `manualChunks` will be passed an object as second parameter containing the functions `getModuleInfo` and `getModuleIds` that work the same way as `this.getModuleInfo` and `this.getModuleIds` on the plugin context (methods used in plugin creation).
- This can be used to dynamically determine into which manual chunk a module should be placed depending on its position in the module graph.