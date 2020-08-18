## Experiment 41: The Mesh Class - Position

#### New to Me
- Just like with rotation, position can be set on a mesh using a `Vector3` class instance.
- We can set position x, y, and z all at once, or set them individually.
- The default value for position is `0.0, 0.0, 0.0`.
- Example of setting the position for x, y, and z all at once: `mesh.position = new BABYLON.Vector3(2, 3, 4`.
- Example of setting the positions for x, y, and z individually:
```ts
mesh.position.x = 2;
mesh.position.y = 3;
mesh.position.z = 4;
```