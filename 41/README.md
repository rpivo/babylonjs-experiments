## Experiment 41: Local Axes & World Axes

#### New to Me
- Babylon uses two frames of reference: the local axes and the world axes.
- The origin of the world axes never changes.
- When displayed, the X axis is always red, the Y axis is always green, and the Z axis is always blue.
- When meshes are created, their center is placed at the origin of the world axes, and their position is always placed relative to the world axes.
- The local axes move with the mesh.
- The origin of the local axes is always at the created center of the mesh, whatever its position.
- The centers of rotation and enlargement for a mesh are at the origin of the local axes.
- All positions, rotations, and scaling are given as 3-dimensional vectors using `new BABYLON.Vector3(x, y, z)`, and can be set separately.
- When a mesh is first created, its position is at the world origin with rotation zero for all axis, and its scaling is one.
- Both the world axes and the mesh's local axes coincide.