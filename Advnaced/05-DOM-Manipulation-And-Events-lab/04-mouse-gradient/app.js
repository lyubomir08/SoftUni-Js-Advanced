function attachGradientEvents() {
    const result = document.getElementById('result');
    const gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', (event) => {
        let offSetXResult = Number(event.offSetX);
        let offSetWidthResult = Number(event.currentTarget.offSetWidth);

        let percentage = Math.floor(offSetXResult / offSetWidthResult * 100);

        result.textContent = `${percentage}%`;
    });
}