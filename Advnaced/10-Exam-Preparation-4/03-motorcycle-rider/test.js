describe('licenseRestriction', () => {
    it('return string if text is "AM"', () => {
        expect(motorcycleRider.licenseRestriction('AM')).to.equal(`Mopeds with a maximum design speed of 45 km. per hour, engine volume is no more than 50 cubic centimeters, and the minimum age is 16.`);
    });

    it('return string if text is "A1"', () => {
        expect(motorcycleRider.licenseRestriction('A1')).to.equal(`Motorcycles with engine volume is no more than 125 cubic centimeters, maximum power of 11KW. and the minimum age is 16.`);
    });

    it('return string if text is "A2"', () => {
        expect(motorcycleRider.licenseRestriction('A2')).to.equal(`Motorcycles with maximum power of 35KW. and the minimum age is 18.`);
    });

    it('return string if text is "A"', () => {
        expect(motorcycleRider.licenseRestriction('A')).to.equal(`No motorcycle restrictions, and the minimum age is 24.`);
    });

    it('throw error if smth diff is passed', () => {
        expect(() => motorcycleRider.licenseRestriction('C')).to.throw(`Invalid Information!`);
    });
});

describe('motorcycleShowroom', () => {
    it("should return correct message with valid input", function () {
        expect(motorcycleRider.motorcycleShowroom(["125", "250", "600"], 300)).to.equal(
            "There are 2 available motorcycles matching your criteria!"
        );
    });

    it("should return correct message when no bikes match the criteria", function () {
        expect(motorcycleRider.motorcycleShowroom(["400", "500", "600"], 300)).to.equal(
            "There are 0 available motorcycles matching your criteria!"
        );
    });

    it("should throw an error if engineVolume is not an array", function () {
        expect(() => motorcycleRider.motorcycleShowroom("not an array", 300)).to.throw("Invalid Information!");
    });

    it("should throw an error if maximumEngineVolume is not a number", function () {
        expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"], "not a number")).to.throw("Invalid Information!");
    });

    it("should throw an error if engineVolume is an empty array", function () {
        expect(() => motorcycleRider.motorcycleShowroom([], 300)).to.throw("Invalid Information!");
    });

    it("should throw an error if maximumEngineVolume is less than 50", function () {
        expect(() => motorcycleRider.motorcycleShowroom(["125", "250", "600"], 49)).to.throw("Invalid Information!");
    });
});

describe('otherSpendings', () => {
    it('should calculate total price correctly with discount', () => {
        expect(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], false)).to.equal("You spend $600.00 for equipment and consumables!");
    });

    it('should calculate total price correctly withoth discount', () => {
        expect(motorcycleRider.otherSpendings(["helmet", "jacked"], ["engine oil", "oil filter"], true)).to.equal("You spend $540.00 for equipment and consumables with 10% discount!");
    });

    it('should return the correct price for partial purchases without discount', () => {
        expect(motorcycleRider.otherSpendings(["helmet"], ["engine oil",], false)).to.equal("You spend $270.00 for equipment and consumables!");
    });

    it('should return the correct price for partial purchases with discount', () => {
        expect(motorcycleRider.otherSpendings(["helmet"], ["engine oil",], true)).to.equal("You spend $540.00 for equipment and consumables with 10% discount!");
    });

    it("should throw an error for invalid equipment input", () => {
        expect(() => otherSpendings("helmet", ["engine oil"], false)).to.throw("Invalid information!");
    });

    it("should throw an error for invalid consumables input", () => {
        expect(() => otherSpendings(["helmet"], "engine oil", false)).to.throw("Invalid information!");
    });

    it("should throw an error for invalid discount input", () => {
        expect(() => otherSpendings(["helmet"], ["engine oil"], "false")).to.throw("Invalid information!");
    });

    it("should handle empty arrays correctly without discount", () => {
        expect(motorcycleRider.otherSpendings([], [], false)).to.equal(`You spend $0.00 for equipment and consumables!`);
    });

    it("should handle empty arrays correctly with discount", () => {
        expect(motorcycleRider.otherSpendings([], [], true)).to.equal(`You spend $0.00 for equipment and consumables with 10% discount!`);
    });
});