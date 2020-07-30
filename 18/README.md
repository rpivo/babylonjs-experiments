## Experiment 18: Chromium's __proto__

#### New to Me
- `__proto__` should not be used in code, but it exists as a property on objects within Chromium dev tool consoles.
- The equivalent property on Firefox is `<prototype>`, although expanding the prototype seems to also show a `__proto__` property within this list.
- When exploring a `WebGLRenderingContext` in the console, most of its properties can be seen inside the prototype.