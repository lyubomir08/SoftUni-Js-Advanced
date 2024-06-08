function juiceFlavors(arr) {
    let store = new Map();
    let storeBottle = new Map();

    for (let el of arr) {
        let [type, quantity] = el.split(' => ');
        quantity = Number(quantity);

        if (!store.has(type)) {
            store.set(type, 0);
        }
        store.set(type, store.get(type) + quantity);

        if (store.get(type) >= 1000) {
            let bottles = parseInt(store.get(type) / 1000);

            if (!storeBottle.has(type)) {
                storeBottle.set(type, 0);
            }

            store.set(type, store.get(type) - bottles * 1000);
            storeBottle.set(type, storeBottle.get(type) + bottles);
        }
    }

    for (let [k, v] of storeBottle) {
        console.log(`${k} => ${v}`);
    }
}

juiceFlavors(['Orange => 2000',
    'Peach => 1432',
    'Banana => 450',
    'Peach => 600',
    'Strawberry => 549']);