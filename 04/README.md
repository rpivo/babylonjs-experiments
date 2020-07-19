## Experiment 04: The touch-action CSS Property

#### New to Me
- The intro example uses the `touch-action` CSS property on the `<canvas>` element that contains the babylon.js scene.
- The touch-action CSS property sets how an element's region can be manipulated by a touchscreen user (for example, by zooming features built into the browser).
- `touch-action` can also be set directly on the element:
```html
<canvas id="renderCanvas" touch-action="none"></canvas>
```
- Setting `touch-action` to `none` lets the browser know that all the pointer events will be handled by user code.