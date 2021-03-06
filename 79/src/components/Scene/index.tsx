import React, { useEffect, useContext, useRef, useState, createContext } from 'react'
import { Engine, Scene, Nullable, EngineOptions, SceneOptions } from '@babylonjs/core'

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

export const useEngine = (): Nullable<Engine> => useContext(SceneContext).engine
export const useScene = (): Nullable<Scene> => useContext(SceneContext).scene
export const useCanvas = (): Nullable<HTMLCanvasElement | WebGLRenderingContext> => useContext(SceneContext).canvas

export type SceneContextType = {
  engine: Nullable<Engine>
  canvas: Nullable<HTMLCanvasElement | WebGLRenderingContext>
  scene: Nullable<Scene>
  sceneReady: boolean
}

const DEFAULT_CONTEXT: SceneContextType = {
  engine: null,
  canvas: null,
  scene: null,
  sceneReady: false
}

// TODO: build a fallback mechanism when typeof React.createContext !== 'function'
export const SceneContext = createContext<SceneContextType>(DEFAULT_CONTEXT);

export default (props: SceneProps) => {
  const reactCanvas = useRef<Nullable<HTMLCanvasElement>>(null);
  const { antialias, engineOptions, adaptToDeviceRatio, sceneOptions, onRender, onSceneReady, renderChildrenWhenReady, children, ...rest } = props;

  const [sceneContext, setSceneContext] = useState<SceneContextType>(DEFAULT_CONTEXT)

  useEffect(() => {
    if (reactCanvas.current) {
      const engine = new Engine(reactCanvas.current, antialias, engineOptions, adaptToDeviceRatio);
      const scene = new Scene(engine, sceneOptions);
      const sceneIsReady = scene.isReady();
      if (sceneIsReady) {
        onSceneReady(scene);
      } else {
        scene.onReadyObservable.addOnce((scene) => {
          onSceneReady(scene);
          setSceneContext(() => ({
            canvas: reactCanvas.current,
            scene,
            engine,
            sceneReady: true,
          }));
        });
      }

      engine.runRenderLoop(() => {
        if (typeof onRender === 'function') {
          onRender(scene);
        }
        scene.render();
      })

      const resize = () => {
        scene.getEngine().resize();
      }

      if (window) {
        window.addEventListener('resize', resize);
      }

      setSceneContext(() => ({
        canvas: reactCanvas.current,
        scene,
        engine,
        sceneReady: sceneIsReady,
      }));

      return () => {
        scene.getEngine().dispose();

        if (window) {
          window.removeEventListener('resize', resize);
        }
      }
    }
  }, [reactCanvas])

  return (
    <>
      <canvas ref={reactCanvas} {...rest} />
      <SceneContext.Provider value={sceneContext}>
        {(renderChildrenWhenReady !== true || (renderChildrenWhenReady === true && sceneContext.sceneReady)) &&
          children
        }
      </SceneContext.Provider>
    </>
  );
}
