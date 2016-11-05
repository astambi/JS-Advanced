function computer() {
    class Manufacturer {
        constructor(manufacturer) {
            if (new.target === Manufacturer)
                throw new Error; // ("Cannot instantiate directly");
            this.manufacturer = manufacturer;
        }
    }

    class Keyboard extends Manufacturer {
        constructor(manufacturer, responseTime) {
            super(manufacturer);
            this.responseTime = responseTime;
        }
    }

    class Monitor extends Manufacturer {
        constructor(manufacturer, width, height) {
            super(manufacturer);
            this.width = width;
            this.height = height;
        }
    }

    class Battery extends Manufacturer {
        constructor(manufacturer, expectedLife) {
            super(manufacturer);
            this.expectedLife = expectedLife;
        }
    }

    class Computer extends Manufacturer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace) {
            if (new.target === Computer)
                throw new Error; // ("Cannot instantiate directly");
            super(manufacturer);
            this.processorSpeed = processorSpeed;
            this.ram = ram;
            this.hardDiskSpace = hardDiskSpace;
        }
    }

    class Laptop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, weight, color, battery) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.weight = weight;
            this.color = color;
            this.battery = battery; // NB
        }
        get battery() {
            return this._battery;
        }
        set battery(value) {
            if (!(value instanceof Battery))
                throw new TypeError; // ('Not an instance of Battery');
            this._battery = value;
        }
    }

    class Desktop extends Computer {
        constructor(manufacturer, processorSpeed, ram, hardDiskSpace, keyboard, monitor) {
            super(manufacturer, processorSpeed, ram, hardDiskSpace);
            this.keyboard = keyboard; // NB
            this.monitor = monitor; // NB
        }
        get keyboard() {
            return this._keyboard;
        }
        set keyboard(value) {
            if (!(value instanceof Keyboard))
                throw new TypeError; // ('Not an instance of Keyboard');
            this._keyboard = value;
        }
        get monitor() {
            return this._monitor;
        }
        set monitor(value) {
            if (!(value instanceof Monitor))
                throw new TypeError; // ('Not an instance of Monitor');
            this._monitor = value;
        }
    }

    return {
        // Manufacturer,
        Keyboard,
        Monitor,
        Battery,
        Computer,
        Laptop,
        Desktop
    }
}