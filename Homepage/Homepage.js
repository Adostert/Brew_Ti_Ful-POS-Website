let subTotal = 0;
let taxes = 0;
let total = 0;
let productInfo = '';
let productTitle = '';
let imageSource = '';


function receiptPopUp(e) {

    let receiptDiv = document.getElementById("view-receipt-background");
    let cashTotal = document.getElementById("changeTotal");
    let checkoutItems = document.getElementById("checkout-items");
    let checkoutTotal = document.getElementById("total-price");
    let receiptItems = document.getElementById("receipt-items");
    let receiptTotal = document.getElementById("receipt-total-cost");

    receiptItems.append(checkoutItems);
    receiptTotal.append(checkoutTotal);
    cashTotal.append(checkoutTotal);


    receiptDiv.style.display = "flex";

    window.scrollTo(0.0);
}





function checkoutPopUp(){

    const proPage = document.getElementById("product-page");
    const checkOut = document.getElementById("background-shadow");

    checkOut.style.display = "flex";
    proPage.style.display = "none"
}

// quantity +/- increments
function up(max) {
    document.getElementById("quantity").value = parseInt(document.getElementById("quantity").value) + 1;
    if (document.getElementById("quantity").value >= parseInt(max)) {
        document.getElementById("quantity").value = max;
    }
}
function down(min) {
    document.getElementById("quantity").value = parseInt(document.getElementById("quantity").value) - 1;
    if (document.getElementById("quantity").value <= parseInt(min)) {
        document.getElementById("quantity").value = min;
    }
}


// modal popup box
// get modal
const modalDrink = document.getElementById("myModal");

const modalFood = document.getElementById("myModalFood");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close", "close-food")[0];
const spanFood = document.getElementsByClassName("close-food")[0];

// get item class
const menuItems = document.getElementsByClassName('item');
const menuItemsFood = document.getElementsByClassName('item-food');
console.log(menuItemsFood);
console.log(menuItems);
// [htmlElement, htmlElement, ...]

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalDrink.style.display = "none";
}

spanFood.onclick = function() {
    modalFood.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalDrink || event.target == modalFood) {
    modalDrink.style.display = "none";
    modalFood.style.display = "none";
    }
}

// opens drink modal
function openModal(event) { 
    modalDrink.style.display = "block";
    modalFood.style.display = "none";
}

// adds event listener on click to open modal
for (const item of menuItems) {
    item.addEventListener('click', (e) => {
        openModal(e);
        productTitle = e.target.alt;
        imageSource = e.target.src;
        document.getElementById('popupImage').setAttribute('alt', productTitle);
        document.getElementById('popupImage').setAttribute('src', imageSource);
    })
}

// opens food modal
function openFoodModal(event) { 
    modalDrink.style.display = "none";
    modalFood.style.display = "block";
}

for (const itemFood of menuItemsFood) {
    itemFood.addEventListener('click', (e) => {
        openFoodModal(e);
        productTitle = e.target.alt;
        imageSource = e.target.src;
        document.getElementById('popupImageFood').setAttribute('alt', productTitle);
        document.getElementById('popupImageFood').setAttribute('src', imageSource);
    })
}


//FUNCTION FOR THE ADD TO CART POP UP
function addToCart() {
    // get needed data
    let size, price, milk, quantity;
    const drinkSmall = document.getElementById('small').checked;
    const drinkMedium = document.getElementById('medium').checked;
    const drinkLarge = document.getElementById('large').checked;
    if (drinkSmall) { 
        size = 'small';
        price = 1;
    } else if (drinkMedium) { 
        size = 'medium';
        price = 2;
    } else if (drinkLarge) { 
        size = 'large';
        price = 3;
    } else { 
        alert("Size required.");
    }
    quantity = document.getElementById('quantity').value;
    const wholeMilk = document.getElementById('whole').checked;
    const skimMilk = document.getElementById('skim').checked;
    const veganMilk = document.getElementById('vegan').checked;
    if (wholeMilk) { 
        milk = 'whole milk';
    } else if (skimMilk) { 
        milk = 'skim milk';
    } else if (veganMilk) { 
        milk = 'vegan milk';
    } else { 
        milk = null;
    }
    console.log(`${size}, ${price}, ${milk}, ${quantity}`);
    
    subTotal += price * quantity;
    taxes = subTotal * .06;
    total = subTotal + taxes;

    document.getElementById("subtotal-price").innerText = `$  ${subTotal}`;
    document.getElementById("total-price").innerText = `Taxes: $ ${taxes} \n Total: $ ${total}`;
    document.getElementsByClassName("product-name").innerText = `Items: ${productInfo}`;

    //PRODUCT NAME x QUANTITY  = $ PRICE
    
    let productListItemElement = document.createElement("li");
    productListItemElement.innerText = `${productTitle} x ${quantity} = $ ${price * quantity}  `;
    document.getElementById("checkout-item-list").appendChild(productListItemElement);
    //RESET FORM
    document.getElementById('whole').checked = false;
    document.getElementById('skim').checked = false;
    document.getElementById('vegan').checked = false;
    document.getElementById('small').checked = false;
    document.getElementById('medium').checked = false;
    document.getElementById('large').checked = false;
    document.getElementById('quantity').value = 1;
    modalDrink.style.display = "none";
}

function addFoodToCart() { 
    let price, quantity;
    if (productTitle == 'Croissant') { 
        price = 3;
    } else if (productTitle == 'Dank-ish') { 
        price = 4;
    } else if (productTitle == 'Quiche') { 
        price = 4;
    } else if (productTitle == 'Cream Puff (Puff Pass)') { 
        price = 3;
    } else if (productTitle == 'Cannabis Cinnabong') { 
        price = 5;
    } else if (productTitle == 'Marijuana Mudslide') { 
        price = 7;
    } else { 
        price = null;
    }
    quantity = document.getElementById('quantity').value;
    console.log(`${price}, ${quantity}`);
    subTotal += price * quantity;
    taxes = subTotal * .06;
    total = subTotal + taxes;

    document.getElementById("subtotal-price").innerText = `$  ${subTotal}`;
    document.getElementById("total-price").innerText = `Taxes: $ ${taxes} \n Total: $ ${total}`;
    document.getElementsByClassName("product-name").innerText = `Items: ${productInfo}`;
    
    productListItemElement = document.createElement("li");
    productListItemElement.innerText = `${productTitle} x ${quantity} = $ ${price * quantity}  `;
    document.getElementById("checkout-item-list").appendChild(productListItemElement);

    modalFood.style.display = "none";
}



// CHECKOUT CSS

let cardRadioBttn = document.getElementById("credit-card-radio");
let cardInputForm = document.getElementById("card-inputs-info");

cardRadioBttn.addEventListener("click", (e) => {
  let submitBttn = document.getElementById("submit-button");
  let formInputs = document.getElementsByClassName("form-input");

  let i;
  for (i = 0; i < formInputs.length; i++) {
    formInputs[i].style.height = "30px";
  }

  cardInputForm.style.display = "flex";
  cardInputForm.style.flexDirection = "column";
  cardInputForm.style.marginBottom = "15px";
  submitBttn.style.backgroundColor = "rgb(0, 128, 128)";
  submitBttn.style.border = "none";
  submitBttn.style.height = "40px";
  submitBttn.style.textAlign = "center";
  submitBttn.style.fontWeight = "900";
  submitBttn.style.fontFamily = "Raleway";
  submitBttn.style.fontSize = "15px";
  submitBttn.style.color = "white";
  formInputs.style.height = "30px";
});

function cardFormRemove() {
  let payPalRadio = document.getElementById("pp-button");

  let cardInputFormPP = document.getElementById("card-inputs-info");

  cardInputFormPP.style.display = "none";
};

function closeCheckout() {

  document.getElementById("background-shadow").style.display = "none";
  document.getElementById("product-page").style.display = "block";

};

function displayShipForm(){

  let shippingForDiv = document.getElementById("shipping-add-form-div");
  let shippingH1 = document.getElementById("ship-add-h1");

  shippingForDiv.style.display = "flex";
  shippingH1.style.display = "flex";

}

function removeShipForm(){

  let shippingForDiv = document.getElementById("shipping-add-form-div");
  let shippingH1 = document.getElementById("ship-add-h1");

  shippingForDiv.style.display = "none"
  shippingH1.style.display = "none"

}

let subBttn = document.getElementById("pay-now");

subBttn.addEventListener("click", (e) => {
    let amexCardNum = /^(?:3[47][0-9]{13})$/;
    let masterCardNum = /^(?:5[1-5][0-9]{14})$/;
    let discoverCardNum = /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/;
    let visaCardNum = /^(?:3[47][0-9]{13})$/;

    let cardNumber = document.getElementById("cardNumber").value;
    console.log(cardNumber);

    
        if (cardNumber.length < amexCardNum.length || cardNumber.length < masterCardNum.length || cardNumber.length < discoverCardNum.length || cardNumber.length < visaCardNum.length) {
            return true;
        }
        else if (cardNumber = null) {
            alert("Please enter a credit card number!")
            return false;
        }
        else {
            alert("Not a valid credit card number!");
    }

});

var changeTotal = document.getElementById("changeTotal");
var button = document.getElementById("buttoncash");
// when button is clicked, trigger the calculateChange function below
buttoncash.addEventListener("click", calculateChange);
function calculateChange() {
  // Math
  var given = document.getElementById("given").value;
  var change = given * 100 - total * 100;
  changeTotal.style.display = "block";
  changeTotal.textContent = "Your change will be $" + change / 100;
};

