## Experiment 23: Environment Color

#### New to Me
- Read more about Environment here: https://doc.babylonjs.com/babylon101/environment
- The `Scene` class has two properties relating to color: `ambientColor` for ambient color, and `clearColor` for background color.
- The `clearColor` can be set like so:
```ts
scene.clearColor = new BABYLON.Color3(0.5, 0.8, 0.5);
```
- The `ambientColor` can be set like so:
```ts
scene.ambientColor = new BABYLON.Color3(0.3, 0.3, 0.3);
```
- Babylon also has default colors available to be used. Example:
```ts
scene.clearColor = BABYLON.Color3.Blue();
```
- By default, `scene.ambientColor` is set to `Color3(0, 0, 0)`, which means there is no `scene.ambientColor`.