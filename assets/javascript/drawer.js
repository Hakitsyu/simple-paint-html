export class LineDrawer {
    constructor(context) {
        this.context = context;
        this.setWidth(1);
        this.setColor("#5152fb");
    }

    init = (x, y) => {
        this.context.strokeStyle = this.color;
        this.context.lineWidth = this.width;
        this.context.beginPath();
        this.context.moveTo(x, y);
    }

    draw = (x, y) => {
        this.context.lineTo(x, y);
        this.context.stroke();
    }

    setWidth = (width) => {
        this.width = width;
    }

    setColor = (color) => {
        this.color = color;
    }
}