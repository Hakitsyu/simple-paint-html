import PressingEvent from "./pressing-event.js";
import { LineDrawer } from "./drawer.js";

const canvas = document.getElementById("root");
const pressingEvent = new PressingEvent(canvas);
const context = canvas.getContext("2d");
const lineDrawer = new LineDrawer(context);

// Canvas Properties
const width = window.innerWidth;
const height = window.innerHeight;
canvas.width = width;
canvas.height = height;

pressingEvent.onStartPress = (x, y) => lineDrawer.init(x, y);
pressingEvent.onPressing = (x, y) => lineDrawer.draw(x, y);