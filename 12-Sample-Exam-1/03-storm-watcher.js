// solution with IIFE
// let Record =
    (function () {
        let idGenerator = 0;

        class Record {
            constructor(temperature, humidity, pressure, windSpeed) {
                this.id = idGenerator++;
                this.temperature = temperature;
                this.humidity = humidity;
                this.pressure = pressure;
                this.windSpeed = windSpeed;
            }

            toString() {
                let weatherStatus = 'Not stormy';
                if (this.temperature < 20 &&
                    (this.pressure < 700 || this.pressure > 900) &&
                    this.windSpeed > 25)
                    weatherStatus = 'Stormy';

                return `Reading ID: ${this.id}\n` +
                    `Temperature: ${this.temperature}*C\n` +
                    `Relative Humidity: ${this.humidity}%\n` +
                    `Pressure: ${this.pressure}hpa\n` +
                    `Wind Speed: ${this.windSpeed}m/s\n` +
                    `Weather: ${weatherStatus}`;
            }
        }

        return Record;
    })();

// solution with static prop
class Record {
    constructor(temperature, humidity, pressure, windSpeed) {
        this.id = Record.getId();
        this.temperature = temperature;
        this.humidity = humidity;
        this.pressure = pressure;
        this.windSpeed = windSpeed;
    }

    static getId() {
        if (!Record.nextId)
            Record.nextId = 0;
        return Record.nextId++;
    }

    toString() {
        let weatherStatus = 'Not stormy';
        if (this.temperature < 20 &&
            (this.pressure < 700 || this.pressure > 900) &&
            this.windSpeed > 25)
            weatherStatus = 'Stormy';

        return `Reading ID: ${this.id}\n` +
            `Temperature: ${this.temperature}*C\n` +
            `Relative Humidity: ${this.humidity}%\n` +
            `Pressure: ${this.pressure}hpa\n` +
            `Wind Speed: ${this.windSpeed}m/s\n` +
            `Weather: ${weatherStatus}`;
    }
}

// let record1 = new Record(32, 66, 760, 12);
// console.log(record1.toString());
// let record2 = new Record(10, 40, 680, 30);
// console.log(record2.toString());