## Experiment 07: The Engine Class

#### New to Me
- The Engine class is responsible for interfacing with all lower-level APIs such as WebGL and Audio.
- The Engine class constructor takes in one required argument and three optional argument.
- `canvasOrContext` (required) defines the canvas or WebGL context to use for rendering.
- `antialias` (optional) is a boolean value that enables antialiasing.
- `options` (optional) defines further options to be sent to the `getContext()` function.
- `adaptToDeviceRatio` (optional) is a boolean value that defines whether to adapt to the device's viewport charactersistics.