function carFactory(order) {
    let result = {
        model: order.model,
        engine: undefined,
        carriage: undefined,
        wheels: undefined
    };

    let engines = {
        smallEngine: { power: 90, volume: 1800},
        normalEngine: { power: 120, volume: 2400},
        monsterEngine: { power: 200, volume: 3500}
    };

    if (order.power <= 90) {
        result.engine = engines.smallEngine;
    } else if (order.power <= 120) {
        result.engine = engines.normalEngine;
    } else {
        result.engine = engines.monsterEngine;
    }

    let carriageFactory = (type, color) => {
        let res = {
            type,
            color
        };

        return res;
    };

    result.carriage = carriageFactory(order.carriage, order.color);

    let wheelSize = order.wheelsize % 2 === 0 ? order.wheelsize - 1 : order.wheelsize;
    result.wheels = new Array(4).fill(wheelSize);

    return result;
}

console.log(carFactory({
    model: 'VW Golf II',
    power: 90,
    color: 'blue',
    carriage: 'hatchback',
    wheelsize: 14
}));