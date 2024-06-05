describe('isSymmetric', () => {
    it('should return true if the array is symmetric', () => {
        let input = [1, 2, 1];

        let result = isSymmetric(input);

        expect(result).to.be.true;
    });

    it ('should return false if the array is not symmetric', () => {
        expect(isSymmetric([1, 2, 3])).to.be.false;
    });

    it ('should return false if the input is not array', () => {
        expect(isSymmetric(undefined)).to.be.false;
        expect(isSymmetric(null)).to.be.false;
        expect(isSymmetric(NaN)).to.be.false;
        expect(isSymmetric(false)).to.be.false;
        expect(isSymmetric('')).to.be.false;
        expect(isSymmetric({})).to.be.false;
        expect(isSymmetric('1,2,3')).to.be.false;
        expect(isSymmetric(-1)).to.be.false;
    });

    it('should return false if symmetric numbers are given as arguments', () => {
        expect(isSymmetric(1,2,1)).to.be.false;
    });

    it('should return true if an empty array is given', () => {
        expect(isSymmetric([])).to.be.true;
    });

    it('should return true if arrays with single number is given', () => {
        expect(isSymmetric([1])).to.be.true;
    });

    it('should return true if the input is string array', () => {
        expect(isSymmetric(['pesho', 'gosho', 'navcho'])).to.be.true;
        expect(isSymmetric([3.14, -1, 3.14])).to.be.true;
        expect(isSymmetric([true, false, true])).to.be.true;
    });

    it('should return false if array input consists of different types', () => {
        expect(isSymmetric([1, 2, '1'])).to.be.false;
    });
});