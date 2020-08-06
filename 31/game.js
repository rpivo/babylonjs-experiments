///<reference path="babylon.d.ts" />
var Game = /** @class */ (function () {
    function Game(canvasElement) {
        // Create canvas and engine.
        this._canvas = document.getElementById(canvasElement);
        this._engine = new BABYLON.Engine(this._canvas, true);
    }
    Game.prototype.createScene = function () {
        // Create a basic BJS Scene object.
        this._scene = new BABYLON.Scene(this._engine);
        window.scenely = this._scene;
        this._scene.clearColor = new BABYLON.Color3(0.1, 0.2, 0.3);
        // Create a FreeCamera, and set its position to (x:0, y:5, z:-10).
        this._camera = new BABYLON.UniversalCamera('camera1', new BABYLON.Vector3(0, 5, -10), this._scene);
        window.cameraly = this._camera;
        // Target the camera to Scene origin.
        this._camera.setTarget(new BABYLON.Vector3(3, 6, 9));
        // Attach the camera to the canvas
        this._camera.attachControl(this._canvas, false);
        // Create a basic light, aiming 0,1,0 - meaning, to the sky.
        this._light = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(0, 1, 0), this._scene);
        // Create a built-in "sphere" shape, with 16 segments and diameter of 2.
        var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', { segments: 16, diameter: 2 }, this._scene);
        // Move the sphere upward 1/2 of its height.
        sphere.position.y = 1;
        // Create a built-in "ground" shape.
        var ground = BABYLON.MeshBuilder.CreateGround('ground', { width: 6, height: 6, subdivisions: 2 }, this._scene);
    };
    Game.prototype.doRender = function () {
        var _this = this;
        // Run the render loop.
        this._engine.runRenderLoop(function () {
            _this._scene.render();
        });
        // The canvas/window resize event handler.
        window.addEventListener('resize', function () {
            _this._engine.resize();
        });
    };
    return Game;
}());
window.addEventListener('DOMContentLoaded', function () {
    // Create the game using the 'renderCanvas'.
    var game = new Game('renderCanvas');
    window.GameInstance = game;
    // Create the scene.
    game.createScene();
    // Start render loop.
    game.doRender();
});
