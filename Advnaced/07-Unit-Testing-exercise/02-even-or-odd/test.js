describe("test with non string value", () => {
    it('test with array', () => {
        assert.isNotOk(isOddOrEven(["[Pesho"]), "result must be undefined");
    });

    it('test with object', () => {
        assert.equal(isOddOrEven({name: 'Pesho'}), undefined, "result must be undefined");
    });

    it ('test with number', () => {
        assert.isNotOk(isOddOrEven(5), "result must be undefined");
    });

    it ('test without param', () => {
        assert.isNotOk(isOddOrEven(), "result must be undefined");
    });
});

describe('test with string value', () => {
    it ('test with even text length', () => {
        assert.equal(isOddOrEven('abcd'), "even", "result must be even");
    });

    it ('test with odd text length', () => {
        assert.equal(isOddOrEven('abcde'), "odd", "result must be odd");
    });
});