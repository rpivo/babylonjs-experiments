## Experiment 63: Babylon.js, React, & TypeScript - Setting up the Entry File

#### New to Me
- We can set up a very basic React entry file like so:
```tsx
import React from 'react';
import { render } from 'react-dom';

render(<div>Hello, World!</div>, document.getElementById('root'));
```
- Let's also add an `output` field to our Rollup config:
```js
export default {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
  }
}
```
- Let's output our bundle as an ES module:
```js
export default {
  input: 'src/index.tsx',
  output: {
    dir: 'dist',
    format: 'esm',
  }
}
```