function timeToWalk(steps, footprint, speed) {
    let distance = steps * footprint;
    let speedMinSec = speed / 3.6;
    let time = distance / speedMinSec;
    let restCount = Math.floor(distance / 500);
    time += restCount * 60;

    let sec = Math.round(time % 60);
    let min = Math.floor(time / 60);
    let hours = Math.floor(time / 60 / 60);

    let secToPrint = sec < 10 ? `0${sec}` : `${sec}`;
    let minToPrint = min < 10 ? `0${min}` : `${min}`;
    let hoursToPrint = hours < 10 ? `0${hours}` : `${hours}`;

    console.log(`${hoursToPrint}:${minToPrint}:${secToPrint}`);
}

timeToWalk(4000, 0.60, 5);
// timeToWalk(2564, 0.70, 5.5);