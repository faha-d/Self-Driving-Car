const canvas = document.querySelector("#main-canvas");
canvas.height = window.innerHeight;
canvas.width = 200;

const canvasContext = canvas.getContext("2d");
const car = new Car(100, 100,30,50);
car.draw(canvasContext)