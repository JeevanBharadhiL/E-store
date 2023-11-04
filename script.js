function searchProducts() {
    var input, filter, products, product, i, txtValue;
    input = document.getElementById('search-input');
    filter = input.value.toUpperCase();
    products = document.querySelectorAll('.product');

    for (i = 0; i < products.length; i++) {
        product = products[i].querySelector('.product-info');
        txtValue = product.textContent || product.innerText;

        if (txtValue.toUpperCase().indexOf(filter) > -1) {
            products[i].style.display = '';
        } else {
            products[i].style.display = 'none';
        }
    }
}

let cart = [];

function addToCart(productName, price) {
    const item = { name: productName, price: price };
    cart.push(item);
    updateCartIcon();
    displayCart(); 
}

function updateCartIcon() {
    const cartIcon = document.getElementById('cart-icon');
    if (cart.length > 0) {
        cartIcon.innerHTML = `<img src="cart-icon-filled.png" alt="Shopping Cart"> (${cart.length})`;
    } else {
        cartIcon.innerHTML = `<img src="cart-icon.png" alt="Shopping Cart">`;
    }
}

function displayCart() {
    const cartPage = document.getElementById('cart-page');
    cartPage.innerHTML = '<h2>Shopping Cart</h2>';
    
    if (cart.length === 0) {
        cartPage.innerHTML += '<p>Your cart is empty.</p>';
    } else {
        let total = 0;
        cart.forEach(item => {
            const productHTML = `<div class="cart-item">${item.name} - $${item.price}</div>`;
            cartPage.innerHTML += productHTML;
            total += item.price;
        });
        cartPage.innerHTML += `<p>Total: $${total}</p>`;
        cartPage.innerHTML += '<button onclick="pay()">Pay</button>';
    }
}

function pay() {
    
}


