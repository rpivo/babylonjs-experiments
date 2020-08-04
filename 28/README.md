## Experiment 28: Implementing the UniversalCamera Class

#### New to Me
- The UniversalCamera class can be easily implemented in place of the FreeCamera class just by replacing the class name:
```tsc
// free camera
this._camera = new BABYLON.FreeCamera('camera1', new BABYLON.Vector3(0, 5, -10), this._scene);
// universal camera
this._camera = new BABYLON.UniversalCamera('camera1', new BABYLON.Vector3(0, 5, -10), this._scene);
```
- All the arguments can remain the same. They are:
  - `name: string` the name of the camera
  - `position: Vector3` the position of the camera using the Vector3 class
  - `scene: Scene` the Scene class instance that is being used for the scene