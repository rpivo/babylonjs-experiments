## Experiment 15: Babylon.js' Nullable Type

#### New to Me
- The Babylon.js source code has a Nullable Type:
```ts
export type Nullable<T> = T | null;
```
- This type seems to come up in the docs. For example
> canvasOrContext: Nullable<HTMLCanvasElement | WebGLRenderingContext>
- Here, it is saying that a property called `canvasOrContext` is of type `Nullable` which takes its type variable either an `HTMLCanvasElement` or a `WebGLRenderingContext`. All in all, the type of `canvasOrContext` is then `HTMLCanvasElement || WebGLRenderingContext || null`.