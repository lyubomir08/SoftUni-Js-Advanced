describe ('add five method', () => {
    describe('test with invalid value', () => {
        it('test with string', () => {
            assert.isUndefined(mathEnforcer.addFive('Pesho'), 'result must be undefined');
        });

        it('test with array', () => {
            assert.isUndefined(mathEnforcer.addFive([6]), 'result must be undefined');
        });

        it('test with object', () => {
            assert.isUndefined(mathEnforcer.addFive({num: 5}), 'result must be undefined');
        });
    });

    describe('test with valid value', () => {
        it('test with negative value', () => {
            assert.equal(mathEnforcer.addFive(-10), -5, 'result must be -5');
            assert.equal(mathEnforcer.addFive(-5), 0, 'result must be 0');
            assert.equal(mathEnforcer.addFive(-5.5), -0.5, 'result must be -0.5');
        });

        it('test with positive value', () => {
            assert.equal(mathEnforcer.addFive(0), 5, 'result must be 5');
            assert.equal(mathEnforcer.addFive(5), 10, 'result must be 10');
            assert.equal(mathEnforcer.addFive(0.5), 5.5, 'result must be 5.5');
        });
    });
});

describe('subtractTen method', () => {
    describe('test with invalid value', () => {
        it('test with string', () => {
            assert.isUndefined(mathEnforcer.subtractTen('Pesho'), 'result must be undefined');
        });

        it('test with array', () => {
            assert.isUndefined(mathEnforcer.subtractTen([6]), 'result must be undefined');
        });

        it('test with object', () => {
            assert.isUndefined(mathEnforcer.subtractTen({num: 5}), 'result must be undefined');
        });
    });

    describe('test with valid value', () => {
        it('test with negative value', () => {
            assert.equal(mathEnforcer.subtractTen(0), -10, 'result must be -10');
            assert.equal(mathEnforcer.subtractTen(-10), -20, 'result must be -20');
            assert.equal(mathEnforcer.subtractTen(-0.5), -10.5, 'result must be -10.5');
        });

        it('test with positive value', () => {
            assert.equal(mathEnforcer.subtractTen(10), 0, 'result must be 0');
            assert.equal(mathEnforcer.subtractTen(20), 10, 'result must be 10');
            assert.equal(mathEnforcer.subtractTen(10.5), 0.5, 'result must be 0.5');
        });
    });
});

describe('sum method', () => {
    describe('test with invalid', ()=> {
        it('test with string', () => {
            assert.isUndefined(mathEnforcer.sum(10, 'pesho'));
            assert.isUndefined(mathEnforcer.sum('pesho', 10));
            assert.isUndefined(mathEnforcer.sum('gosho', 'pesho'));
        });

        it('test with array', () => {
            assert.isUndefined(mathEnforcer.sum(10, ['pesho']));
            assert.isUndefined(mathEnforcer.sum(['pesho'], 10));
            assert.isUndefined(mathEnforcer.sum(['gosho'], ['pesho']));
        });

        it ('test with object', () => {
            assert.isUndefined(mathEnforcer.sum({name: 'Pesho'}, 10));
            assert.isUndefined(mathEnforcer.sum(10, {name: 'Pesho'}));
            assert.isUndefined(mathEnforcer.sum({name: 'Pesho'}, {name: 'Gosho'}));
        });
    });

    describe('test with valid value', () => {
        it('test with negative value', () => {
            assert.strictEqual(mathEnforcer.sum(-10, -10), -20);
            assert.strictEqual(mathEnforcer.sum(-10, 10), 0);
            assert.strictEqual(mathEnforcer.sum(0, -10), -10);
            assert.strictEqual(mathEnforcer.sum(-1.5, -1.5), -3);
            assert.strictEqual(mathEnforcer.sum(-1.5, 1), -0.5);
        });

        it('test with positive value', () => {
            assert.strictEqual(mathEnforcer.sum(0, 0), 0);
            assert.strictEqual(mathEnforcer.sum(5, 5), 10);
            assert.strictEqual(mathEnforcer.sum(5, 5), 10);
            assert.strictEqual(mathEnforcer.sum(0.5, 0.5), 1);
            assert.strictEqual(mathEnforcer.sum(0.5, 10), 10.5);
            assert.strictEqual(mathEnforcer.sum(11, 0.5), 11.5);
        });
    });
});