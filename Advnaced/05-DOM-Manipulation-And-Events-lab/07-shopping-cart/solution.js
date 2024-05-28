function solve() {
    let addButtons = document.querySelectorAll('.add-product');
    let textArea = document.querySelector('textarea');
    let checkoutButton = document.querySelector('.checkout');

    let cart = {};

    checkoutButton.addEventListener('click', (event) => {
        let sum = Object.values(cart).reduce((sum, price) => sum + price, 0);
        let list = Object.keys(cart).join(', ');

        textArea.value += `You bought ${list} for ${sum.toFixed(2)}.`;

        addButtons.forEach(button => button.setAttribute('disabled', 'disabled'));
        event.currentTarget.setAttribute('disabled', 'disabled');
    });

    function addProductHandler(event) {
        let productElement = event.currentTarget.parentElement.parentElement;

        let title = productElement.querySelector('.product-title').textContent;
        let price = Number(productElement.querySelector('.product-line-price').textContent);

        if (!cart[title]) {
            cart[title] = 0;
        }

        cart[title] += price;

        textArea.value += `Added ${title} for ${price.toFixed(2)} to the cart.\n`;
    }

    addButtons.forEach(b => b.addEventListener('click', addProductHandler));
}