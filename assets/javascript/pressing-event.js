import Emitter from "./emitter.js";

class PressingEvent extends Emitter {
    constructor(element) {
        super();
        this.element = element;
        this.pressing = false;
        this.setupEvents();
    }

    setupEvents = () => {
        this.element.addEventListener("mousedown", event => {
            this.pressing = true;
            this.emit("startpress", event.offsetX, event.offsetY);
        });

        this.element.addEventListener("mouseup", event => {
            this.pressing = false;
            this.emit("endpress", event.offsetX, event.offsetY);
        });

        this.element.addEventListener("mousemove", event => {
            if (this.pressing)  
                this.emit("pressing", event.offsetX, event.offsetY);
        });
    }
}

export default PressingEvent;