function storeCatalogue(arr) {
    let result = {};

    for (let el of arr) {
        let [product, price] = el.split(' : ');

        result[product] = price;
    }

    let sorted = Object.entries(result).sort((a, b) => a[0].localeCompare(b[0]));

    let curGroupChar = '';
    for (let [product, price] of sorted) {

        if (curGroupChar !== product[0]) {
            curGroupChar = product[0];
            console.log(curGroupChar);
        }

        console.log(`  ${product}: ${price}`);
    }
}

storeCatalogue(['Appricot : 20,4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300', 'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10']);