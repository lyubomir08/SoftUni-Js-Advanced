function attachEventsListeners() {
    let daysBtnRef = document.getElementById('daysBtn');
    let hoursBtnRef = document.getElementById('hoursBtn');
    let minutesBtnRef = document.getElementById('minutesBtn');
    let secondsBtnRef = document.getElementById('secondsBtn');

    let inputDaysRef = document.getElementById('days');
    let inputHoursRef = document.getElementById('hours');
    let inputMinutesRef = document.getElementById('minutes');
    let inputSecondsRef = document.getElementById('seconds');

    daysBtnRef.addEventListener('click', onDaysHandler);
    hoursBtnRef.addEventListener('click', onHoursHandler);
    minutesBtnRef.addEventListener('click', onMinutesHandler);
    secondsBtnRef.addEventListener('click', onSecondsHandler);
    
    function onDaysHandler(event) {
        let days = Number(inputDaysRef.value);

        inputHoursRef.value = days * 24;
        inputMinutesRef.value = days * 1440;
        inputSecondsRef.value = days * 86400;
    }

    function onHoursHandler(event) {
        let hours = Number(inputHoursRef.value);

        inputDaysRef.value = hours / 24;
        inputMinutesRef.value = hours * 60;
        inputSecondsRef.value = hours * 3600;
    }

    function onMinutesHandler(event) {
        let minutes = Number(inputMinutesRef.value);


        inputDaysRef.value = minutes / 1440;
        inputHoursRef.value = minutes / 60;
        inputSecondsRef.value = minutes * 60;
    }

    function onSecondsHandler(event) {
        let seconds = Number(inputSecondsRef.value);

        inputDaysRef.value = seconds / 86400;
        inputHoursRef.value = seconds / 3600;
        inputMinutesRef.value = seconds / 60;
    }
}