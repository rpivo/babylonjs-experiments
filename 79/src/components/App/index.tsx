import React from 'react';
import {
  FreeCamera,
  Vector3,
  HemisphericLight,
  MeshBuilder,
  Scene as SceneType,
} from '@babylonjs/core';
import Scene from '../Scene';

const onSceneReady = (scene: SceneType) => {
  // This creates and positions a free camera (non-mesh)
  var camera = new FreeCamera("camera1", new Vector3(0, 5, -10), scene);

  // This targets the camera to scene origin
  camera.setTarget(Vector3.Zero());

  const canvas = scene.getEngine().getRenderingCanvas();

  // This attaches the camera to the canvas
  camera.attachControl(canvas, true);

  // This creates a light, aiming 0,1,0 - to the sky (non-mesh)
  var light = new HemisphericLight("light", new Vector3(0, 1, 0), scene);

  // Default intensity is 1. Let's dim the light a small amount
  light.intensity = 0.7;

  // Our built-in 'box' shape.
  box = MeshBuilder.CreateBox("box", { size: 2 }, scene);

  // Move the box upward 1/2 its height
  box.position.y = 1;

  // Our built-in 'ground' shape.
  MeshBuilder.CreateGround("ground", { width: 6, height: 6 }, scene);
}

const App = () =>
  <div>
    <h1>Using Babylon.js with React</h1>
    <Scene id='scene' onSceneReady={onSceneReady} />
  </div>;

export default App;
