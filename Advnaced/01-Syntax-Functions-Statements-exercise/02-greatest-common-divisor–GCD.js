function GCD(num1, num2) {
    let GCD = num1 % num2;

    while (GCD !== 0) {
        num1 = num2;
        num2 = GCD;
        GCD = num1 % num2;
    }

    console.log(num2);
}

GCD(15, 5);
// GCD(2154, 458);