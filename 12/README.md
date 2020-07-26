## Experiment 12: Intro to Blend Modes

#### New to Me
- A **blend mode** determines how, when rendering a mesh, new on-screen pixels will be mixed with existing pixels.
- This may sound trivial as most of the time new pixels simply replace existing ones, which is not really what we may call blending at all. However, in the case of alpha-blended meshes, new pixels do not simply overwrite existing ones: they are combined according to how transparent the mesh is.
- This is an example of the most simple blending operation available (and also the default one): `BABYLON.Engine.ALPHA_COMBINE`.
- Other blend modes exist, and allow you to achive advanced visual effects.
- For more details, see: https://doc.babylonjs.com/how_to/how_to_use_blend_modes
- Available blend modes are:
  - `BABYLON.Engine.ALPHA_COMBINE`
  - `BABYLON.Engine.ALPHA_ADD`
  - `BABYLON.Engine.ALPHA_SUBTRACT`
  - `BABYLON.Engine.ALPHA_MULTIPLY`
  - `BABYLON.Engine.ALPHA_MAXIMIZED`
  - `BABYLON.Engine.ALPHA_ONEONE`