function townPopulation(arr) {
    let obj = {};

    for (let el of arr) {
        let [town, population] = el.split(' <-> ');
        population = Number(population);
        
        if (town in obj) {
            obj[town] += population;
        } else {
            obj[town] = population;
        }
    }

    for (let city in obj) {
        console.log(`${city} : ${obj[city]}`);
    }
}

townPopulation([
    'Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
// townPopulation([
//     'Istanbul <-> 100000',
//     'Honk Kong <-> 2100004',
//     'Jerusalem <-> 2352344',
//     'Mexico City <-> 23401925',
//     'Istanbul <-> 1000'
// ]);