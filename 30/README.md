## Experiment 30: UniversalCamera Class - setTarget()

#### New to Me
- The introductory example uses a UniversalCamera method called `setTarget()`.
- `setTarget()` defines the target the camera should look at.
- `setTarget()` takes in a Vector3 class instance as its only argument.
- In the intro example, our passed in Vector3 is uses the `Zero()` method:
```ts
this._camera.setTarget(BABYLON.Vector3.Zero());
```
- The `Zero()` method returns a new Vector3 set to (0.0, 0.0, 0.0).
- setting `setTarget()` as `this._camera.setTarget(BABYLON.Vector3.Zero();` is the same as `this._camera.setTarget(new BABYLON.Vector3(0,0,0));`.