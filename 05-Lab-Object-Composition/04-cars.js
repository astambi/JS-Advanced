function cars(commands){
    let cars = new Map();
    let carManager = {
        create: function ([name, inherit , parent]) {
            parent = parent ? cars.get(parent) : null;
            let car = Object.create(parent);
            cars.set(name, car);
        },
        set: function ([name, key, value]) {
            let car = cars.get(name);
            car[key] = value;
        },
        print: function ([name]) {
            let car = cars.get(name);
            let props = [];
            for (let prop in car)
                props.push(`${prop}:${car[prop]}`);
            console.log(props.join(', '));
            // console.log(cars); // NB! cannot console.log inherited properties
        }
    };
    for(let command of commands){
        let commandParameters = command.split(' ');
        let action = commandParameters.shift();
        carManager[action](commandParameters);
    }
}

cars(['create c1',
    'create c2 inherit c1',
    'set c1 color red',
    'set c2 model new',
    'print c1',
    'print c2']);
cars(['create pesho',
    'create gosho inherit pesho',
    'create stamat inherit gosho',
    'set pesho rank number1',
    'set gosho nick goshko',
    'print stamat']);