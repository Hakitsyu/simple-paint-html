class PressingEvent  {
    constructor(element) {
        this.element = element;
        this.pressing = false;
        this.onStartPress = (x, y) => {};
        this.onEndPress = (x, y) => {};
        this.onPressing = (x, y) => {};
        this.init();
    }

    init = () => {
        this.element.addEventListener("mousedown", event => {
            this.pressing = true;
            this.onStartPress(event.offsetX, event.offsetY);
        });

        this.element.addEventListener("mouseup", event => {
            this.pressing = false;
            this.onEndPress(event.offsetX, event.offsetY);
        });

        this.element.addEventListener("mousemove", event => {
            if (this.pressing)
                this.onPressing(event.offsetX, event.offsetY);
        });
    }
}

export default PressingEvent;