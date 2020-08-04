## Experiment 25: Setting clearColor on the Scene Class

#### New to Me
- The Color3 class documentation page has a list of available color names that can be used: Black, Blue, Gray, Green, Magenta, Purple, Red, Teal, White, Yellow -> https://doc.babylonjs.com/api/classes/babylon.color3
- Color3 has a method called `Random()` that will return a random color.
- For a RGB value, this can be set like so: `this._scene.clearColor = new BABYLON.Color3(0.1, 0.2, 0.3);`.