class GameEngine {
    constructor(canvas) {
        this.canvas = canvas;
        this.gl = canvas.getContext("webgl");
        if (!this.gl) throw new Error("WebGL not supported");

        this.init();
    }

    init() {
        this.gl.clearColor(0.5, 0.5, 0.5, 1.0);
        this.gl.enable(this.gl.DEPTH_TEST);
        this.loadScene();
    }

    loadScene() {
        console.log("Loading scene...");
        // Load environment and avatar
        this.loadAvatar();
    }

    loadAvatar() {
        fetch("/assets/avatars/default-avatar.gltf")
            .then(res => res.json())
            .then(model => {
                console.log("Avatar loaded:", model);
                this.renderAvatar(model);
            });
    }

    renderAvatar(model) {
        console.log("Rendering avatar...");
        // Render avatar here
    }

    start() {
        const loop = () => {
            this.update();
            this.render();
            requestAnimationFrame(loop);
        };
        loop();
    }

    update() {
        // Game logic updates
    }

    render() {
        this.gl.clear(this.gl.COLOR_BUFFER_BIT | this.gl.DEPTH_BUFFER_BIT);
    }
}

const canvas = document.getElementById("gameCanvas");
const engine = new GameEngine(canvas);
engine.start();
