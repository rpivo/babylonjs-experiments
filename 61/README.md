## Experiment 61: Babylon.js, React, & TypeScript - Installing Rollup

#### New to Me
- We will also need to bundle our code. I'll be using Rollup:
```sh
npm install rollup
```
- Rollup will also need to be able to process TypeScript:
```sh
npm install @rollup/plugin-typescript
```
- We'll need a Rollup config file. To start, we can add a default export that looks for a main file called `index.tsx` as its main input:
```js
export default {
  input: 'src/index.tsx'
}
```