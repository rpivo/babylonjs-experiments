## Experiment 34: The HemisphericLight Class

#### New to Me
- The HemisphericLight class simulates ambient enviornment light, so the passed direction is the light reflection direction, not the incoming direction.
- Creates a HemisphericLight object in the scene according to the passed direction (Vector3).
- The HemisphericLight class can't cast shadows.
- More info on Babylon.js lights: https://doc.babylonjs.com/babylon101/lights
- HemisphericLight takes in three parameters:
  - `name`: the friendly name of the light
  - `direction`: the direction of the light reflection, represented by a Vector3 class instance
  - `scene`: the scene the light belongs to, represented by a Scene class instance