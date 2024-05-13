function circleArea(data) {
    let type = typeof(data);
    let result;
    
    if (type == 'number') {
        result = Math.pow(data, 2) * Math.PI;
        console.log(result.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${type}.`);
    }
}

circleArea(5);
// circleArea('name');