## Experiment 36: HemisphericLight - Updating the Direction Property

#### New to Me
- HemisphericLight has a property called `direction` that can be set to a Vector3 instance.
- Setting this to Vector3's `Zero()` results in a diffuse light that stairs dead center at the camera: `this._light.direction = BABYLON.Vector3.Zero();`
- Setting this to Vector3's `Down()` produces a more interesting effect. I can see different shades of the light with the diffuse light source coming from down below: `this._light.direction = BABYLON.Vector3.Down();`