## Experiment 78: Giving the Scene Component an ID

#### New to Me
- The `Scene` component is expecting a props object of type `SceneProps`:
```ts
export type SceneProps = {
  adaptToDeviceRatio?: boolean;
  antialias?: boolean;
  children?: React.ReactNode;
  engineOptions?: EngineOptions;
  id: string;
  onRender?: (scene: Scene) => void;
  onSceneReady: (scene: Scene) => void;
  renderChildrenWhenReady?: boolean;
  sceneOptions?: SceneOptions;
};
```
- Most of these props are optional, but we're currently missing `id` and `onSceneReady`.
- It looks like `id` is just a CSS ID selector to name the scene. We can just name it scene:
```tsx
<Scene id='scene' />
```
