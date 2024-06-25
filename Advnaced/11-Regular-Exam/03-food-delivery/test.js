describe('getCategory', () => {
    it('should return string if category is "Vegan"', () => {
        expect(foodDelivery.getCategory('Vegan')).to.equal(`Dishes that contain no animal products.`);
    });

    it('should return string if category is "Vegetarian"', () => {
        expect(foodDelivery.getCategory('Vegetarian')).to.equal(`Dishes that contain no meat or fish.`);
    });

    it('should return string if category is "Gluten-Free"', () => {
        expect(foodDelivery.getCategory('Gluten-Free')).to.equal(`Dishes that contain no gluten.`);
    });

    it('should return string if category is "All"', () => {
        expect(foodDelivery.getCategory('All')).to.equal(`All available dishes.`);
    });

    it('should throw error if invalid categoty is passed', () => {
        expect(() => foodDelivery.getCategory('Gay')).to.throw(`Invalid Category!`);
        expect(() => foodDelivery.getCategory(5)).to.throw(`Invalid Category!`);
    });
});

describe('addMenuItem', () => {
    it('should return the available menu items matching', () => {
        expect(foodDelivery.addMenuItem([{ name: 'Burger', price: 10 }, { name: 'Salad', price: 7 }, { name: 'Pizza', price: 15 }], 10)).to.equal('There are 2 available menu items matching your criteria!');
        expect(foodDelivery.addMenuItem([{ name: 'Burger', price: 10 }, { name: 'Pizza', price: 15 }], 10)).to.equal('There are 1 available menu items matching your criteria!');
    });

    it('should throw error if invalid input data is passed', () => {
        expect(() => foodDelivery.addMenuItem('300', 350)).to.throw(`Invalid Information!`);
        expect(() => foodDelivery.addMenuItem(['300', '500'], 'fifty')).to.throw(`Invalid Information!`);
        expect(() => foodDelivery.addMenuItem(['300', '500'], '5')).to.throw(`Invalid Information!`);
        expect(() => foodDelivery.addMenuItem([], 600)).to.throw(`Invalid Information!`);
        expect(() => foodDelivery.addMenuItem(['300'], -1)).to.throw(`Invalid Information!`);
    });
});

describe('calculateOrderCost', () => {
    it('should return message with discount', () => {
        expect(foodDelivery.calculateOrderCost(['standard', 'express'], ['sauce', 'beverage'], true)).to.equal('You spend $10.63 for shipping and addons with a 15% discount!');
    });

    it('should return message without discount', () => {
        expect(foodDelivery.calculateOrderCost(['standard', 'express'], ['sauce', 'beverage'], false)).to.equal('You spend $12.50 for shipping and addons!');
    });

    it('should throw error if invalid input data is passed', () => {
        expect(() => foodDelivery.calculateOrderCost('not an array', [], true)).to.throw(`Invalid Information!`);
        expect(() => foodDelivery.calculateOrderCost([], 'not an array', true)).to.throw(`Invalid Information!`);
        expect(() => foodDelivery.calculateOrderCost([], [], 'not a boolean')).to.throw(`Invalid Information!`);
    });
});