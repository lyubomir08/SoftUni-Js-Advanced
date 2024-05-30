function solve() {
    let [inputTextRef, resultTextRef] = document.querySelectorAll('#container textarea');
    let [generateBtnRef, buyBtnRef] = document.querySelectorAll('#container button');
    let tableBodyRef = document.querySelector('.table tbody');

    generateBtnRef.addEventListener('click', onGenerateHandler);
    buyBtnRef.addEventListener('click', onBuyHandler);

    function onGenerateHandler(event) {
        if (!inputTextRef.value) {
            return;
        }
        let inputArr = JSON.parse(inputTextRef.value);

        for (let el of inputArr) {
            let tableRowRef = createTableRow(el);
            tableBodyRef.appendChild(tableRowRef);
        }
        inputTextRef.value = '';
    }

    function onBuyHandler(event) {
        let checkbox = Array.from(document.querySelectorAll('input'));
        let items = checkbox.filter(x => x.checked);

        let names = [];
        let totalPrice = 0;
        let sumDecFactor = 0;

        for (let item of items) {
            let trRef = item.parentElement.parentElement;
            let [imgTd, nameTd, priceTd, decFactorTd] = trRef.children;
            let name = nameTd.children[0].textContent;
            let price = priceTd.children[0].textContent;
            price = Number(price);
            let decFactor = decFactorTd.children[0].textContent;
            decFactor = Number(decFactor);

            names.push(name);
            totalPrice += price;
            sumDecFactor += decFactor;
        }
        let resultBuff = 'Bought furniture: ' + names.join(', ') + '\n';
        resultBuff += `Total price: ${totalPrice.toFixed(2)}\n`;
        resultBuff += `Average decoration factor: ${sumDecFactor / items.length}`;

        resultTextRef.value = resultBuff;
    }

    function createTableRow(data) {
        let tr = document.createElement('tr');

        tr.innerHTML = '<td>' +
            `<img src=${data.img}>` +
            '</td>' +
            '<td>' +
            `<p>${data.name}</p>` +
            '</td>' +
            '<td>' +
            `<p>${data.price}</p>` +
            '</td>' +
            `<td><p>${data.decFactor}</p></td>` +
            `<td><input type='checkbox'></td>`;
        return tr;
    }

}