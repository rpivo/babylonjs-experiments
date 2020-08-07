## Experiment 32: UniversalCamera Class - attachControl()

#### New to Me
- In order for the camera to be able to react to user input of some kind, we have to call `attachControl()`.
- For `attachControl` to work, we need to pass in the `element` argument, which defines the element that the controls should be listened from.
- In the introductory example, the controls are listened from the canvas element: `this._camera.attachControl(this._canvas, false);`.
- The second argument is optional -- it's a boolean value called `noPreventDefault`. This defines whether the event object caught by the controls should call `preventDefault()`.