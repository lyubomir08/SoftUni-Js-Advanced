function cityRecord(name, population, treasury) {
    let cityObj = {};

    cityObj.name = name;
    cityObj.population = population;
    cityObj.treasury = treasury;

    return cityObj;
}

console.log(cityRecord('Tortuga', 7000, 15000));
// cityRecord('Santo Domingo', 12000, 23500);