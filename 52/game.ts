///<reference path="babylon.d.ts" />

class Game {
  private canvas: HTMLCanvasElement;
  private engine: BABYLON.Engine;
  private scene: BABYLON.Scene;
  private camera: BABYLON.FreeCamera;
  private light1: BABYLON.Light;
  private light2: BABYLON.Light;

  constructor(canvasElement: string) {
    // Create canvas and engine.
    this.canvas = document.getElementById(canvasElement) as HTMLCanvasElement;
    this.engine = new BABYLON.Engine(this.canvas, true);
  }

  createScene(): void {
    // create the scene space
    this.scene = new BABYLON.Scene(this.engine);
    // add a camera to the scene and attach it to the canvas
    this.camera = new BABYLON.ArcRotateCamera(
      'Camera',
      Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(),
      this.scene,
    );
    this.camera.attachControl(this.canvas, true);
    // add lights to the scene
    this.light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1, 1, 0), this.scene);
    this.light2 = new BABYLON.PointLight('light2', new BABYLON.Vector3(0, 1, -1), this.scene);
    // add and manipulate meshes in the scene
    let sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {}, this.scene);
  }

  doRender(): void {
    // Run the render loop.
    this.engine.runRenderLoop(() => this.scene.render());

    // The canvas/window resize event handler.
    window.addEventListener('resize', () => this.engine.resize());
  }
}

window.addEventListener('DOMContentLoaded', () => {
  // Create the game using the 'renderCanvas'.
  let game = new Game('renderCanvas');
  window.GameInstance = game;

  // Create the scene.
  game.createScene();

  // Start render loop.
  game.doRender();
});