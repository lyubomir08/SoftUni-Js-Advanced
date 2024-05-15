function cookingByNumbers(number, do1, do2, do3, do4, do5) {
    let arr = [do1, do2, do3, do4, do5];

    for (let i = 0; i < arr.length; i++) {
        let action = arr[i];
        
        if (action == 'chop') {
            number = number / 2;
            console.log(number);
        } else if (action == 'dice') {
            number = Math.sqrt(number);
            console.log(number);
        } else if (action == 'spice') {
            number += 1;
            console.log(number);
        } else if (action == 'bake') {
            number *= 3;
            console.log(number);
        } else if (action == 'fillet') {
            number *= 0.8;
            console.log(number);
        }
    }
}

cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');
// cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');