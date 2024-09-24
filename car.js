class Car {
    constructor(x, y, width, height) {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        this.controls = new Controls()
    }

    updateCarPosition() {
        if (this.controls.forward) {
            this.y = -5
        }
        if (this.controls.reverse) {
            this.y = +5
        }
    }

    draw(canvasContext) {
        canvasContext.beginPath();
        canvasContext.rect(
            this.x - this.width / 2,
            this.y - this.height / 2,
            this.width,
            this.height
        );
        canvasContext.fill();
    }
}