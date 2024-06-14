class RefurbishedSmartphones {
    constructor(retailer) {
        this.retailer = retailer;
        this.availableSmartphones = [];
        this.soldSmartphones = [];
        this.revenue = 0;
    }

    addSmartphone(model, storage, price, condition) {
        if (model == '' || storage < 0 || price < 0 || condition == '') {
            throw new Error('Invalid smartphone!');
        }

        this.availableSmartphones.push({ model, storage, price, condition });
        return `New smartphone added: ${model} / ${storage} GB / ${condition} condition - ${price.toFixed(2)}$`;
    }

    sellSmartphone(model, desiredStorage) {
        let currPhone = this.availableSmartphones.find(phone => phone.model == model);

        if (!currPhone) {
            throw new Error(`${model} was not found!`);
        }

        let currPrice = currPhone.price;
        let storageDiff = desiredStorage - currPhone.storage;

        if (storageDiff > 0 && storageDiff <= 128) {
            currPrice = currPrice * 0.9;
        }

        if (storageDiff > 0 && storageDiff > 128) {
            currPrice = currPrice * 0.8;
        }

        this.availableSmartphones = this.availableSmartphones.filter(phone => phone.model !== model);
        this.soldSmartphones.push({
            model: currPhone.model,
            storage: currPhone.storage,
            price: currPrice
        });

        this.revenue += currPrice;
        return `${model} was sold for ${currPrice.toFixed(2)}$`;
    }

    upgradePhones() {
        let result = ['Upgraded Smartphones:'];

        if (this.availableSmartphones.length == 0) {
            throw new Error('There are no available smartphones!');
        }

        this.availableSmartphones.forEach(phone => {
            phone.storage *= 2;

            result.push(`${phone.model} / ${phone.storage} GB / ${phone.condition} condition / ${phone.price.toFixed(2)}$`);
        });

        return result.join('\n');
    }

    salesJournal(criteria) {
        let criterias = ['storage', 'model'];

        if (!criterias.includes(criteria)) {
            throw new Error('Invalid criteria!');
        }

        const sorters = {
            storage: (a, b) => b.storage - a.storage,
            model: (a, b) => a.model.localeCompare(b.model)
        };

        let msg = [`${this.retailer} has a total income of ${this.revenue.toFixed(2)}$`,
        `${this.soldSmartphones.length} smartphones sold:`
        ];

        this.soldSmartphones.sort(sorters[criteria]).forEach(phone => {
            msg.push(`${phone.model} / ${phone.storage} GB / ${phone.price.toFixed(2)}$`);
        });

        return msg.join('\n');
    }
}