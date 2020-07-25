## Experiment 09: Mounting Class Instances on the Window

#### New to Me
- In the intro example, we can mount the Game instance on the window after it's initialized with `window.GameInstance = game;`.
- With the instance mounted on the window, we can better explore its internals.
- As an example, you can explore the initialized `Engine` class inside  `GameInstance` at `window.GameInstance._engine`.
- You will be able to see a lot of properties from this page on that class instance: https://doc.babylonjs.com/api/classes/babylon.engine
- Note that properties described as `Nullable` in the above documentation may not appear on this class instance.