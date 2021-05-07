/*
* The below code was copied and edited from shopping cart code created by the developer WebDevSimplified (GitHub username). The code was adjusted to meet the requirements of the MyMenu system
*/
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

/*
* This function removes an item from the MyMenu list and recalculates the total price and updates the cart/item indicators
*/
function removeCartItem(event) {
	let buttonClicked = event.target;
	buttonClicked.parentElement.parentElement.remove();
	updateCartTotal();
	// This updates the cart indicator on the MyMenu navbar button, and navbar toggler for mobile devices
    document.getElementById('quantity-indicator-span').innerText = document.getElementsByClassName('cart-items')[0].childElementCount;
	document.getElementById('mobile-quantity-indicator-span').innerText = document.getElementsByClassName('cart-items')[0].childElementCount;
    
	alert("This Menu item has been removed from your MyMenu!");
}

/*
* This function prevents a user from changing the quantity of an item to any number less than 1
*/
function quantityChanged(event) {
	let input = event.target;
	if (isNaN(input.value) || input.value <= 0) {
		input.value = 1;
	}
	updateCartTotal();
}

/*
* This adds the name, price, and image details of a Menu item to the MyMenu list
*/
function addToCartClicked(event) {
	let button = event.target;
	let shopItem = button.parentElement.parentElement;
	let title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
	let price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
	let imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
	addItemToCart(title, price, imageSrc);
	updateCartTotal();
}

/*
* This adds a Menu item to the MyMenu list and creates a div and row for that item
*/
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
    // This inserts the HTML required to create a list of menu items in the MyMenu modal
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

/*
* This updates the count of items on the navbar MyMenu button and the navbar toggler for mobile devices
*/
function updateMenuIndicatorNumber() {
    // This updates the cart indicator on the MyMenu navbar button
    document.getElementById('quantity-indicator-span').innerText = document.getElementsByClassName('cart-items')[0].childElementCount;
    // This updates the cart indicator on the navbar toggler on mobile devices
	document.getElementById('mobile-quantity-indicator-span').innerText = document.getElementsByClassName('cart-items')[0].childElementCount;
	alert("This Menu item has been added to your MyMenu!");
}

/*
* This function calculates the total price for a list of menu items  
*/
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