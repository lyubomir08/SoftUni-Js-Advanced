function fruit(fruit, weight, pricePerKg) {
    console.log(`I need $${(weight / 1000 * pricePerKg).toFixed(2)} to buy ${(weight / 1000).toFixed(2)} kilograms ${fruit}.`);
}

fruit('orange', 2500, 1.80);
// fruit('apple', 1563, 2.35);