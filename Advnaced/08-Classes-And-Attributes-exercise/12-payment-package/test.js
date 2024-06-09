describe('create instance', () => {
    let paymentPackage;

    beforeEach(() => {
        paymentPackage = new PaymentPackage('Pesho', 10);
    });

    it('name property', () => {
        assert.strictEqual(paymentPackage._name, 'Pesho');
    });

    it('value property', () => {
        assert.strictEqual(paymentPackage._value, 10);
    });

    it('VAT property', () => {
        assert.strictEqual(paymentPackage._VAT, 20);
    });

    it('active property', () => {
        assert.strictEqual(paymentPackage._active, true);
    });
});

describe('test accessor', () => {
    let paymentPackage;

    beforeEach(() => {
        paymentPackage = new PaymentPackage('Gosho', 10);
    });

    it('correct get and set name', () => {
        assert.strictEqual(paymentPackage.name, 'Gosho');
        paymentPackage.name = 'Tosho';
        assert.strictEqual(paymentPackage.name, 'Tosho');
    });

    it('correct get and set value', () => {
        assert.strictEqual(paymentPackage.value, 10);
        paymentPackage.value = 0;
        assert.strictEqual(paymentPackage.value, 0);
    });

    it('correct get and set VAT', () => {
        assert.strictEqual(paymentPackage.VAT, 20);
        paymentPackage.VAT = 0;
        assert.strictEqual(paymentPackage.VAT, 10);
    });

    it('correct set and get active', () => {
        assert.strictEqual(paymentPackage.active, true);
        paymentPackage.active = false;
        assert.strictEqual(paymentPackage.active, false);
    });
});

describe('test invalid values', () => {
    let paymentPackage;

    beforeEach(() => {
        paymentPackage = new PaymentPackage('gosho', 10);
    });

    it('test invalid name', () => {
        assert.throws(() => new PaymentPackage('', 10), 'Name must be a non-empty string', 'non-empty name');
        assert.throws(() => new PaymentPackage(10, 10), 'Name must be a non-empty string', 'non-empty name');
    });

    it('test invalid value', () => {
        assert.throws(() => new PaymentPackage('Tosho', -1, 'Value must be a non-negative number', 'non-negative number'));
        assert.throws(() => new PaymentPackage('Tosho', '-10', 'Value must be a non-negative number', 'non-negative number'));
    });

    it('test invalid VAT', () => {
        assert.throws(() => paymentPackage.VAT = -10, 'VAT must be a non-negative number', 'non-nagative VAT');
        assert.throws(() => paymentPackage.VAT = '10', 'VAT must be a non-negative number', 'non-nagative VAT');
    });

    it('test invalid active', () => {
        assert.throws(() => paymentPackage.active = 'true', 'Active status must be a boolean');
        assert.throws(() => paymentPackage.active = 10, 'Active status must be a boolean');
    });
});

describe('toString method', () => {
    let paymentPackage;

    beforeEach(() => {
        paymentPackage = new PaymentPackage('Pesho', 10);
    });

    it('test with active state', () => {
        let res = [`Package: Pesho`,
            `- Value (excl. VAT): 10`,
            `- Value (VAT 20%): 12`
        ];

        assert.strictEqual(paymentPackage.toString(), res.join('\n'));
    });

    it('test with inactive state', () => {
        let res = [`Package: Pesho (inactive)`,
            `- Value (excl. VAT): 10`,
            `- Value (VAT 20%): 12`
        ];

        paymentPackage.active = false;
        assert.strictEqual(paymentPackage.toString(), res.join('\n'));
    });
});