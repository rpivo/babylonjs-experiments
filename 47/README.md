## Experiment 47: Calculating Framerate With runRenderLoop

#### New to Me
- I attempted to clock how often `runRenderLoop()` runs by adding a `Date.now()` console log.
```ts
    this._engine.runRenderLoop(() => {
      console.log(Date.now());
      this._scene.render();
    });
```
- `runRenderLoop()` appears to run every 20ms on my computer.
- `runRenderLoop()`'s execution time may differ depending on the computer.
- Doing the math of `1000 / ~20`, this appears to be roughly **50 frames per second**.