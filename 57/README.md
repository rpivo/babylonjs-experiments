## Experiment 57: The Babylon.js Core Package

#### New to Me
- This imports the core Babylon.js library (29.5mb).
- With this package, the entire Babylon.JS package can be imported into a single file:
```js
import * as BABYLON from '@babylonjs/core/Legacy/legacy';
```
- Or individual classes can be imported to take benefit from enhanced tree shaking:
```js
import { Scene } from '@babylonjs/core/scene';
import { Engine } from '@babylonjs/core/Engines/engine';
```