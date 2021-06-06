export class LineDrawer {
    constructor(context) {
        this.context = context;
        this.setWidth(1);
        this.setColor("black");
    }

    init = (x, y) => {
        this.context.beginPath();
        this.context.moveTo(x, y);
    }

    draw = (x, y) => {
        this.context.lineTo(x, y);
        this.context.stroke();
    }

    setWidth = (width) => {
        this.width = width;
        this.context.lineWidth = this.width;
    }

    setColor = (color) => {
        this.color = color;
        this.context.strokeStyle = this.color; 
    }
}