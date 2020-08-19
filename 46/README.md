## Experiment 46: Engine - runRenderLoop Property

#### New to Me
- The `Engine` class has a property called `runRenderLoop()` that's used in the intro example.
- `runRenderLoop` registers and executes a render loop.
- The enging can have more than one render function.
- This property accepts one parameter:
  - **renderFunction**: this defines the function to continuously execute.
- `runRenderLoop` repeatedly calls the function argument it is passed.