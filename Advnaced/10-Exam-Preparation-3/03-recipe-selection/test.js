describe('isTypeSuitable', () => {
    it("should return 'This recipe is not suitable for vegetarians' when type is 'Meat' and dietaryRestriction is 'Vegetarian'", () => {
        expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal('This recipe is not suitable for vegetarians');
    });

    it("should return 'This recipe is not suitable for vegans' when type is 'Meat' and dietaryRestriction is 'Vegan'", () => {
        expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal('This recipe is not suitable for vegans');
    });

    it("should return 'This recipe is not suitable for vegans' when type is 'Diary' and dietaryRestriction is 'Vegan'", () => {
        expect(recipeSelection.isTypeSuitable('Diary', 'Vegan')).to.equal('This recipe is not suitable for vegans');
    });

    it("should return 'This recipe is suitable for your dietary restriction' for other valid type and dietaryRestriction combinations", () => {
        expect(recipeSelection.isTypeSuitable('Fruit', 'Vegetarian')).to.equal('This recipe is suitable for your dietary restriction');
        expect(recipeSelection.isTypeSuitable('Vegetable', 'Vegan')).to.equal('This recipe is suitable for your dietary restriction');
    });

    it('should throw an error if invalid input data is passed', () => {
        expect(() => recipeSelection.isTypeSuitable(1, 'Vegan')).to.throw('Invalid input');
        expect(() => recipeSelection.isTypeSuitable('Meat', 1)).to.throw('Invalid input');
        expect(() => recipeSelection.isTypeSuitable(1, 1)).to.throw('Invalid input');
    });
});

describe('isItAffordable', () => {
    it("should return 'You don't have enough budget to afford this recipe' if price is greater than budget", function () {
        expect(recipeSelection.isItAffordable(100, 50)).to.equal("You don't have enough budget to afford this recipe");
    });

    it("should return 'Recipe ingredients bought. You have {remainingBudget}$ left' if price is less than or equal to budget", () => {
        expect(recipeSelection.isItAffordable(50, 100)).to.equal(`You have ${50}$ left`);
        expect(recipeSelection.isItAffordable(50, 50)).to.equal(`You have ${0}$ left`);
    });

    it('should throw an error if invalid input data is passed', () => {
        expect(() => recipeSelection.isItAffordable('pesho', 1)).to.throw('Invalid input');
        expect(() => recipeSelection.isItAffordable(1, 'pesho')).to.throw('Invalid input');
        expect(() => recipeSelection.isItAffordable(('pesho', 'gosho'))).to.throw('Invalid input');
    });
});

describe('getRecipesByCategory', () => {
    it("should return an array of recipe titles for the given category", () => {
        const recipes = [
            { title: "Spicy Tofu Stir-Fry", category: "Asian" },
            { title: "Pasta Carbonara", category: "Italian" },
            { title: "Vegetable Curry", category: "Asian" }
        ];

        expect(recipeSelection.getRecipesByCategory(recipes, 'Asian')).to.deep.equal(["Spicy Tofu Stir-Fry", "Vegetable Curry"]);
    });

    it("should return an empty array if no recipes match the given category", function () {
        const recipes = [
            { title: "Spicy Tofu Stir-Fry", category: "Asian" },
            { title: "Pasta Carbonara", category: "Italian" }
        ];

        expect(recipeSelection.getRecipesByCategory(recipes, 'Mexican')).to.deep.equal([]);
    });

    it('should throw error if invalid input data is passed', () => {
        expect(() => recipeSelection.getRecipesByCategory('not an array', 'Vegan')).to.throw('Invalid input');
        expect(() => recipeSelection.getRecipesByCategory([], 1)).to.throw('Invalid input');
        expect(() => recipeSelection.getRecipesByCategory('not an array', 1)).to.throw('Invalid input');
    });
});