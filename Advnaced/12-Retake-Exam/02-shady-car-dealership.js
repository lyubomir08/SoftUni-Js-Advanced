class ShadyCarDealership {
    constructor(dealerName) {
        this.dealerName = dealerName;
        this.availableCars = [];
        this.soldCars = [];
        this.revenue = 0;
    }

    addCar(model, year, mileage, price) {
        if (!model || typeof model !== 'string' || !year || typeof year !== 'number' || year < 1950 || !mileage || typeof mileage !== 'number' || mileage < 0 || !price || typeof price !== 'number' || price < 0) {
            throw new Error("Invalid car!");
        }

        const newCar = { model, year, mileage, price };
        this.availableCars.push(newCar);
        return `New car added: ${model} (${year}) / ${mileage} km. - ${price.toFixed(2)}$`;
    }

    sellCar(model, desiredYear) {
        const carIndex = this.availableCars.findIndex(car => car.model === model);

        if (carIndex === -1) {
            return `${model} was not found!`;
        }

        const car = this.availableCars[carIndex];
        let soldPrice = car.price;

        if (car.year >= desiredYear) {

        } else if (car.year >= desiredYear - 5) {
            soldPrice *= 0.9;
        } else {
            soldPrice *= 0.8;
        }

        this.soldCars.push({ model, year: car.year, mileage: car.mileage, soldPrice });
        this.availableCars.splice(carIndex, 1);
        this.revenue += soldPrice;

        return `${model} (${car.year}) was sold for ${soldPrice.toFixed(2)}$`;
    }

    prepareCarForSale(model) {
        const carIndex = this.availableCars.findIndex(car => car.model === model);

        if (carIndex === -1) {
            return `${model} was not found for preparation!`;
        }

        const car = this.availableCars[carIndex];
        car.mileage /= 2;
        car.price *= 1.3;

        return `${model} (${car.year}) is prepared for sale with ${car.mileage} km. - ${car.price.toFixed(2)}$`;
    }

    salesJournal(criteria) {
        if (criteria !== 'year' && criteria !== 'model') {
            throw new Error("Invalid criteria!");
        }

        const sortedCars = this.soldCars.slice().sort((a, b) => {
            if (criteria === 'year') {
                return b.year - a.year;
            } else {
                return a.model.localeCompare(b.model);
            }
        });

        return `${this.dealerName} has a total income of ${this.revenue.toFixed(2)}$\n${sortedCars.length} cars sold:\n${sortedCars.map(car => `${car.model} (${car.year}) / ${car.mileage} km. / ${car.soldPrice.toFixed(2)}$`).join('\n')}`;
    }
}