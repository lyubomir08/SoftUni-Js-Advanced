function areaAndVolumeCalculator(area, vol, input) {
    let objects = JSON.parse(input);

    function calculate(obj) {
        let areaObj = Math.abs(area.call(obj));
        let volumeObj = Math.abs(vol.call(obj));

        return {area: areaObj, volume: volumeObj};
    }

    return objects.map(calculate);
}