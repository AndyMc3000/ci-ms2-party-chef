let cartContents = {}; // This dictionary will hold the price and quantity of each item placed in the cart and must be updated accordingly

function addEventListenersToCartElements() {
	let removeCartItemButtons = document.getElementsByClassName('btn-danger');
	for (let i = 0; i < removeCartItemButtons.length; i++) {
		let button = removeCartItemButtons[i];
		button.addEventListener('click', removeCartItem);
	}

	let quantityInputs = document.getElementsByClassName('cart-quantity-input');
	for (let i = 0; i < quantityInputs.length; i++) {
		let input = quantityInputs[i];
		input.addEventListener('change', quantityChanged);
	}

	let addToCartButtons = document.getElementsByClassName('shop-item-button');
	for (let i = 0; i < addToCartButtons.length; i++) {
		let button = addToCartButtons[i];
		button.addEventListener('click', addToCartClicked);
	}
}

function removeCartItem(event) {
	let buttonClicked = event.target;
	buttonClicked.parentElement.parentElement.remove();
	updateCartTotal();
	// update cart indicator - instead of calling the updateMenuIndicatorNumber function I just used the logic within that function
    document.getElementById('quantity-indicator-span').innerText = document.getElementsByClassName('cart-items')[0].childElementCount;
	document.getElementById('mobile-quantity-indicator-span').innerText = document.getElementsByClassName('cart-items')[0].childElementCount;
    
	alert("This Menu item has been removed from your MyMenu!");
}

function quantityChanged(event) {
	let input = event.target;
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1;
	}
	updateCartTotal();
}

function addToCartClicked(event) {
	let button = event.target;
	let shopItem = button.parentElement.parentElement;
	let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
	let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
	let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
	addItemToCart(title, price, imageSrc);
	updateCartTotal();
}

function addItemToCart(title, price, imageSrc) {
	let cartRow = document.createElement('div');
	cartRow.classList.add('cart-row');
	let cartItems = document.getElementsByClassName('cart-items')[0];
	let cartItemNames = cartItems.getElementsByClassName('cart-item-title');
	for (let i = 0; i < cartItemNames.length; i++) {
		if (cartItemNames[i].innerText == title) {
			alert('This item has already been added to your MyCart!');
			return;
		}
	}
	let cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">X</button>
        </div>`;
	cartRow.innerHTML = cartRowContents;
	cartItems.append(cartRow);
	cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
	cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
	updateMenuIndicatorNumber();
}

function updateMenuIndicatorNumber() {
	document.getElementById('quantity-indicator-span').innerText = document.getElementsByClassName('cart-items')[0].childElementCount;
	document.getElementById('mobile-quantity-indicator-span').innerText = document.getElementsByClassName('cart-items')[0].childElementCount;
	alert("This Menu item has been added to your MyMenu!");
}

function updateCartTotal() {
	let cartItemContainer = document.getElementsByClassName('cart-items')[0];
	let cartRows = cartItemContainer.getElementsByClassName('cart-row');
	let total = 0;
	for (let i = 0; i < cartRows.length; i++) {
		let cartRow = cartRows[i];
		let priceElement = cartRow.getElementsByClassName('cart-price')[0];
		let quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
		let itemTitle = cartRow.getElementsByClassName('cart-item-title')[0].innerText;
		let price = parseFloat(priceElement.innerText.replace('€', ''));
		let quantity = quantityElement.value;
		total = total + (price * quantity);
		cartContents[itemTitle] = {
			"price": price,
			"quantity": quantity,
			"total": price * quantity
		};
	}
	total = Math.round(total * 100) / 100;
	document.getElementsByClassName('cart-total-price')[0].innerText = '€' + total;
}

$(document).ready(function() {
	addEventListenersToCartElements();
});