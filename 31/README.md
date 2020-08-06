## Experiment 31: UniversalCamera Class - Setting setTarget() in Different Directions

#### New to Me
- I can update the camera's starting target by changing the number arguments for Vector3 when calling `setTarget()`: `this._camera.setTarget(new BABYLON.Vector3(0.5,0.6,0.7));`.
- Larger integers seem to be acceptable here: `this._camera.setTarget(new BABYLON.Vector3(3,6,9));`