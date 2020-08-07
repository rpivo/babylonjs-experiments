## Experiment 35: HemisphericLight - Updating the Diffuse Property

#### New to Me
- I can set the `diffuse` property on the HemisphericLight instance like so: `this._light.diffuse = new BABYLON.Color3(0, 1, 0);`.
- The above will set the `diffuse` property to a completely green color.
- As mentioned before, the Color3 class parameters for R, G, and B are between 0 and 1, so the following is acceptable and will result in a purple-ish color: `this._light.diffuse = new BABYLON.Color3(0.5, 0.2, 0.8);`