function townsToJSON(arr) {
    let result = [];

    for (let i = 1; i< arr.length; i++) {
        let tokens = arr[i].split('|');
        tokens = tokens.filter(x => !!x);
        let town = tokens[0].trim();
        let latitude = tokens[1].trim();
        latitude = Number(latitude);
        let longitude = tokens[2].trim();
        longitude = Number(longitude);

        result.push({Town: town, Latitude: Number(latitude.toFixed(2)), Longitude: Number(longitude.toFixed(2))});
        
    }

    console.log(JSON.stringify(result));
}

townsToJSON(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |']);