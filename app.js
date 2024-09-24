const canvas = document.querySelector("#main-canvas");
canvas.width = 200;

const canvasContext = canvas.getContext("2d");
const car = new Car(100, 100, 30, 50);

carAnimation();

function carAnimation() {
    car.updateCarPosition();
    canvas.height = window.innerHeight;
    car.draw(canvasContext);
    requestAnimationFrame(carAnimation);
}