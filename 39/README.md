## Experiment 39: The Mesh Class

#### New to Me
- The Mesh class is used to represent renderable models.
- This class instance is returned when one of the MeshBuilder class's `create` instances is used to create a mesh.
- The Mash class has a constructor that takes in a number of parameters:
  - `name`: a string that is the value used by `scene.getMeshByName()` to do a lookup.
  - `scene`: a `Nullable<Scene>` that is the Scene to add this new Mesh to.
  - `parent`: a `Nullable<Node>` that is the parent of this Mesh, if it has one (represented as a Node class).
  - `source`: a `Nullable<Mesh>` optional Mesh from which the geometry of this new Mesh is shared or cloned.
  - `doNotCloneChildren`: a boolean. When cloning, skip cloning child meshes of the source, default False. When false, achieved by calling a `clone()`, also passing False. This will make creation of children recursive. [Note: this is the description in the docs, and it's confusing.]
  - `clonePhysicsImpostor`: a boolean. When cloning, include cloning mesh physics impostor, default True. [Note: this is the description in the docs, and it's confusing.]