function autoEngineeringCompany(data) {
    let store = new Map();

    class CarCompany {
        constructor(brandName) {
            this.brandName = brandName;
            this.carStore = new Map();
        }

        addCar(carModel, quantity) {
            if (!this.carStore.has(carModel)) {
                this.carStore.set(carModel, 0);
            }
            this.carStore.set(carModel, this.carStore.get(carModel) + quantity);
        }

        toString() {
            let buff = this.brandName + '\n';
            for (let [carModel, carQuantity] of this.carStore) {
                buff += `###${carModel} -> ${carQuantity}\n`;
            }
            return buff.trim();
        }
    }

    for (let el of data) {
        let [carBrand, carModel, producedCars] = el.split(' | ');
        producedCars = Number(producedCars)

        if (!store.has(carBrand)) {
            store.set(carBrand, new CarCompany(carBrand));
        }
        store.get(carBrand).addCar(carModel, producedCars);
    }

    for (let [carBrand, carCompanyData] of store) {
        console.log(carCompanyData.toString());
    }
}

autoEngineeringCompany([
    'Audi | Q7 | 1000',
    'Audi | Q6 | 100',
    'BMW | X5 | 1000',
    'BMW | X6 | 100',
    'Citroen | C4 | 123',
    'Volga | GAZ-24 | 1000000',
    'Lada | Niva | 1000000',
    'Lada | Jigula | 1000000',
    'Citroen | C4 | 22',
    'Citroen | C5 | 10'
]);