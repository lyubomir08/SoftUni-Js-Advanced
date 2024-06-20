describe('choosingType', () => {
    it('should throw error if invalid year is passed', () => {
        expect(() => chooseYourCar.choosingType('Sedan', 'Black', 1899)).to.throw(`Invalid Year!`);
        expect(() => chooseYourCar.choosingType('Sedan', 'Black', 2023)).to.throw(`Invalid Year!`);
        expect(() => chooseYourCar.choosingType('Sedan', 'Black', '1234')).to.throw(`Invalid Year!`);
        expect(() => chooseYourCar.choosingType('Sedan', 'Black', undefined)).to.throw(`Invalid Year!`);
        expect(() => chooseYourCar.choosingType('Sedan', 'Black', {})).to.throw(`Invalid Year!`);
    });

    it('should throw error if type is different from "Sedan"', () => {
        expect(() => chooseYourCar.choosingType('Hatchback', 'Black', 1899)).to.throw(`This type of car is not what you are looking for.`);
        expect(() => chooseYourCar.choosingType(1234, 'Black', 1899)).to.throw(`This type of car is not what you are looking for.`);
    });

    it('should return string if year is greater or equal to 2010', () => {
        expect(chooseYourCar.choosingType('Sedan', 'Black', 2010)).to.equal(`This Black Sedan meets the requirements, that you have.`);
        expect(chooseYourCar.choosingType('Sedan', 'Black', 2011)).to.equal(`This Black Sedan meets the requirements, that you have.`);
    });

    it('should return string if conditions are not met', () => {
        expect(chooseYourCar.choosingType('Sedan', 'Black', 2009)).to.equal(`This Sedan is too old for you, especially with that Black color.`);
    });
});

describe('brandName', () => {
    it('should remove element from the array that is located on the given index as parameter', () => {
        expect(chooseYourCar.brandName(["BMW", "Audi", "Toyota"], 1)).to.equal(`BMW, Toyota`);
    });

    it('should throw error if invalid input data is passed', () => {
        expect(() => chooseYourCar.brandName("not an array", 1)).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.brandName("not an array", "1")).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.brandName(['BMW'], "not a number")).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.brandName(12, 1)).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.brandName("not an array", -1)).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.brandName(['BMW', 'Audi'], 5)).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.brandName(['BMW', 'Audi'], -2)).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.brandName("not an array", 1)).to.throw(`Invalid Information!`);
    });
});

describe('CarFuelConsumption', () => {
    it('should return message if liters/100km are less or equal to 7L', () => {
        expect(chooseYourCar.carFuelConsumption(200, 10)).to.equal(`The car is efficient enough, it burns 4.00 liters/100 km.`);
        expect(chooseYourCar.carFuelConsumption(200, 14)).to.equal(`The car is efficient enough, it burns 4.00 liters/100 km.`);
    });

    it('should return message if liters/100km are more than 7L', () => {
        expect(chooseYourCar.carFuelConsumption(200, 20)).to.equal(`The car burns too much fuel - 10.00 liters!`);
        expect(chooseYourCar.carFuelConsumption(200, 40)).to.equal(`The car burns too much fuel - 20.00 liters!`);
    });

    it('should throw error if invalid input data is passed', () => {
        expect(() => chooseYourCar.carFuelConsumption('not a number', 5)).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.carFuelConsumption(5, 'not a number')).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.carFuelConsumption('not a number', -5)).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.carFuelConsumption(-5, 'not a number')).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.carFuelConsumption({}, 'not a number')).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.carFuelConsumption('not a number', {})).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.carFuelConsumption({}, -5)).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.carFuelConsumption(-5, {})).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.carFuelConsumption(0, {})).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.carFuelConsumption(-5, 0)).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.carFuelConsumption('not a number', 0)).to.throw(`Invalid Information!`);
        expect(() => chooseYourCar.carFuelConsumption(0, 'not a number')).to.throw(`Invalid Information!`);
    });
});