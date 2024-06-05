describe('Sum', () => {
    it('Should return the sum of numbers', () => {
        let input = [1, 2, 3];
        let expectedResult = 6;

        let actualResult = sum(input);

        expect(actualResult).to.equal(expectedResult);
    });
});