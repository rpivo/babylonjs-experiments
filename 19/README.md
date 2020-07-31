## Experiment 19: WebGLRenderingContext

#### New to Me
- The `<canvas>` element provides a hook to access the WebGLRenderingContext API.
- WebGLRenderingContext is one of those APIs that is attached to the window, as mentioned in experiement 17.
- To access the WebGLRenderingContext for a rendered `<canvas>` element:
  - go into the console and create a variable that points to the canvas: `var canvas = document.querySelector('#renderCanvas');`
  - create another variable that represents the WebGLRenderingContext: `var gl = canvas.getContext('webgl');`
  - when you print out `gl` to the console, it will show that this variable is an instance of WebGLRenderingContext, and it will have a few properties on it that are specific to the canvas.
  - You'll be able to see a full list of properties on the WeblGLRenderingContext prototype under `__proto__`.
- MDN has a really great repo with WebGL examples that show how to use WebGLRenderingContext here: https://github.com/mdn/webgl-examples.