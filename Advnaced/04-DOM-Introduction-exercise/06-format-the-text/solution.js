function solve() {
    let textAreaRef = document.getElementById('input');
    let resultRef = document.getElementById('output');

    let incomeText = textAreaRef.value.split('.').filter(e => e.length > 0);

    for (let i = 0; i < incomeText.length; i += 3) {
        let res = [];
        for (let x = 0; x < 3; x++) {
            if (!incomeText[i + x]) {
                break;
            }
    
            res.push(incomeText[i + x]);
        }
        let p = document.createElement('p');
        p.textContent = res.join('. ') + '.';
        resultRef.appendChild(p);
    }
}