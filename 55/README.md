## Experiment 55: The PointLight Class

#### New to Me
- A point light is a light defined by a unique point in world space.
- The light is emitted in every direction from this point.
- A good example of a point light is a standard light bulb.
- PointLight's constructor creates a PointLight object from the passed name and position (Vector3) and adds this light to the scene.
- It can cast shadows.
- If the scene camera is already defined, and you want to set your PointLight at the camera position, just set it:
  ```
  var pointlight = new PointLight('pl', camera.position, scene);
  js```
- The PointLight constructor takes in three arguments:
  - `name`: a string representing the PointLight's friendly name.
  - `position`: a Vector3 representing the position of the point light in the scene.
  - `scene`: a Scene representing the scene that the light belongs to.