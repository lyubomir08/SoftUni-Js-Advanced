function calorieObj(arr) {
    let foodObj = {};

    for (let i = 0; i< arr.length; i += 2) {
        let product = arr[i];
        let calories = Number(arr[i + 1]);

        foodObj[product] = calories;
    }

    console.log(foodObj);
}

calorieObj(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
// calorieObj(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);