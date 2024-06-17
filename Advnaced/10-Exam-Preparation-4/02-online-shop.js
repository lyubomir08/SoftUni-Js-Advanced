class OnlineShop {
    constructor(warehouseSpace) {
        this.warehouseSpace = warehouseSpace;
        this.products = [];
        this.sales = [];
    }

    loadingStore(product, quantity, spaceRequired) {
        if (spaceRequired > this.warehouseSpace) {
            throw new Error("Not enough space in the warehouse.");
        }

        const productIndex = this.products.findIndex(p => p.product === product);

        if (productIndex !== -1) {
            this.products[productIndex].quantity += quantity;
        } else {
            this.products.push({ product, quantity });
        }

        this.warehouseSpace -= spaceRequired;
        return `The ${product} has been successfully delivered in the warehouse.`;
    }

    quantityCheck(product, minimalQuantity) {
        const productObj = this.products.find(p => p.product === product);

        if (!productObj) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        if (minimalQuantity <= 0) {
            throw new Error("The quantity cannot be zero or negative.");
        }

        if (minimalQuantity <= productObj.quantity) {
            return `You have enough from product ${product}.`;
        } else {
            const difference = minimalQuantity - productObj.quantity;

            productObj.quantity = minimalQuantity;

            return `You added ${difference} more from the ${product} products.`;
        }
    }

    sellProduct(product) {
        const productIndex = this.products.findIndex(p => p.product === product);

        if (productIndex === -1) {
            throw new Error(`There is no ${product} in the warehouse.`);
        }

        const productObj = this.products[productIndex];

        if (productObj.quantity > 0) {
            productObj.quantity -= 1;

            const salesIndex = this.sales.findIndex(s => s.product === product);

            if (salesIndex !== -1) {
                this.sales[salesIndex].quantity += 1;
            } else {
                this.sales.push({ product, quantity: 1 });
            }

            return `The ${product} has been successfully sold.`;
        } else {
            throw new Error(`There is no ${product} in the warehouse.`);
        }
    }

    revision() {
        if (this.sales.length === 0) {
            throw new Error("There are no sales today!");
        } else {
            let result = `You sold ${this.sales.reduce((sum, s) => sum + s.quantity, 0)} products today!\nProducts in the warehouse:\n`;

            this.products.forEach(p => {
                result += `${p.product}-${p.quantity} more left\n`;
            });
            
            return result.trim();
        }
    }
}