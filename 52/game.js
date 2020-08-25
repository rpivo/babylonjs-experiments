///<reference path="babylon.d.ts" />
var Game = /** @class */ (function () {
    function Game(canvasElement) {
        // Create canvas and engine.
        this.canvas = document.getElementById(canvasElement);
        this.engine = new BABYLON.Engine(this.canvas, true);
    }
    Game.prototype.createScene = function () {
        // create the scene space
        this.scene = new BABYLON.Scene(this.engine);
        // add a camera to the scene and attach it to the canvas
        this.camera = new BABYLON.ArcRotateCamera('Camera', Math.PI / 2, Math.PI / 2, 2, BABYLON.Vector3.Zero(), this.scene);
        this.camera.attachControl(this.canvas, true);
        // add lights to the scene
        this.light1 = new BABYLON.HemisphericLight('light1', new BABYLON.Vector3(1, 1, 0), this.scene);
        this.light2 = new BABYLON.PointLight('light2', new BABYLON.Vector3(0, 1, -1), this.scene);
        // add and manipulate meshes in the scene
        var sphere = BABYLON.MeshBuilder.CreateSphere('sphere', {}, this.scene);
    };
    Game.prototype.doRender = function () {
        var _this = this;
        // Run the render loop.
        this.engine.runRenderLoop(function () { return _this.scene.render(); });
        // The canvas/window resize event handler.
        window.addEventListener('resize', function () { return _this.engine.resize(); });
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
