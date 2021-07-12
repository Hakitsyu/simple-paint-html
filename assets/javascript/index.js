import PressingEvent from "./pressing-event.js";
import { LineDrawer } from "./drawer.js";

const canvas = document.getElementById("root");
const sizeInput = document.getElementById("size-input");
const colorInput = document.getElementById("color-input");
const generatedImg = document.getElementById("generated-img");
const generateImgButton = document.getElementById("generate-img");
const pressingEvent = new PressingEvent(canvas);
const context = canvas.getContext("2d");
const lineDrawer = new LineDrawer(context);

// Canvas Properties
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

// Input Default Values
sizeInput.value = lineDrawer.width;
colorInput.value = lineDrawer.color;

colorInput.addEventListener("change", () => lineDrawer.setColor(colorInput.value));
sizeInput.addEventListener("change", () => lineDrawer.setWidth(sizeInput.value));
generateImgButton.addEventListener("click", () => generateImage());

pressingEvent.on("startpress", (x, y) => lineDrawer.init(x, y));
pressingEvent.on("pressing", (x, y) => lineDrawer.draw(x, y));


function generateImage() {
    const dataURL = canvas.toDataURL();
    generatedImg.classList.remove("hidden");
    generatedImg.href = dataURL;
}