let subTotal = 0;
let taxes = 0;
let total = 0;
let productInfo = '';
let productTitle = '';
let imageSource = '';
// const selectProducts 

function checkoutPopUp() {

    const proPage = document.getElementById("product-page");
    const checkOut = document.getElementById("background-shadow");

    checkOut.style.display = "flex";
    proPage.style.display = "none"
    window.scrollTo(0, 0);
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

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// get item class
const menuItems = document.getElementsByClassName('item');
console.log(menuItems);
// [htmlElement, htmlElement, ...]

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
    modalDrink.style.display = "none";
    // modalFood.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modalDrink) {
        modalDrink.style.display = "none";
    }
    // const menuImages = event.target.attributes[1].nodeValue;
    // const newImage = document.querySelector('.item-image');
    // newImage.setAttribute('src', menuImages);
    // console.log(event.target.attributes[1].nodeValue)
}

function openModal(event) {
    modalDrink.style.display = "flex";
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

function displayShipForm() {

    let shippingForDiv = document.getElementById("shipping-add-form-div");
    let shippingH1 = document.getElementById("ship-add-h1");

    shippingForDiv.style.display = "flex";
    shippingH1.style.display = "flex";

}

function removeShipForm() {

    let shippingForDiv = document.getElementById("shipping-add-form-div");
    let shippingH1 = document.getElementById("ship-add-h1");

    shippingForDiv.style.display = "none"
    shippingH1.style.display = "none"

}


function receiptPopUp(e) {

    let receiptDiv = document.getElementById("view-receipt-background");
  
    let checkoutItems = document.getElementById("checkout-items");
    let checkoutTotal = document.getElementById("total-price");
    let receiptItems = document.getElementById("receipt-items");
    let receiptTotal = document.getElementById("receipt-total-cost");

    receiptItems.append(checkoutItems);
    receiptTotal.append(checkoutTotal);


    receiptDiv.style.display = "flex";
  
    window.scrollTo(0.0);
}


let subBttn = document.getElementById("pay-now");

function removeAfterSubmit() {

    let cardInputForm = document.getElementById("card-inputs-info");
    let cashForm = document.getElementById("paypal-form");
    setTimeout(function () { alert("Your credit card information has been submitted!"); cardInputForm.style.display = "none"; cashForm.style.display = "none"; }, 3000);


}

subBttn.addEventListener("click", (e) => {

    e.preventDefault();
    let cardNumber = document.getElementById("cardNumber").value;
    let cvvNumber = document.getElementById("cvv").value;
    let cvvInput = document.getElementById("cvv");
    let cardInput = document.getElementById("cardNumber");

    console.log(cardNumber);
    console.log(cvvNumber)

    if (cardNumber.length == 13 && cvvNumber.length == 4 || cardNumber.length == 13 && cvvNumber.length == 3) {
        cvvInput.style.boxShadow = "5px 5px 5px lightgreen";
        cvvInput.style.border = "1px solid green";
        cardInput.style.boxShadow = "5px 5px 5px lightgreen";
        cardInput.style.border = "1px solid green";
        alert("Your credit card information is correct!")
        removeAfterSubmit();


        return true;
    }

    else if (cvvNumber.length < 3 && cardNumber.length == 13) {

        cvvInput.style.boxShadow = "5px 5px 5px red";
        cvvInput.style.border = "1px solid red";
        cardInput.style.boxShadow = "5px 5px 5px lightgreen";
        cardInput.style.border = "1px solid green";
        alert("CVV is incorrect! Must be 3 to 4 digits long!");

        return false;
    }
    else if (cardNumber.length < 13 && cvvNumber.length == 3 || cvvNumber.length == 4) {

        cardInput.style.boxShadow = "5px 5px 5px red";
        cardInput.style.border = "1px solid red";
        cvvInput.style.boxShadow = "5px 5px 5px lightgreen";
        cvvInput.style.border = "1px solid green";

        alert("Credit card number is incorrect! Must be 13 digits long!");
        return false;
    }

    else if (cvvNumber.length < 3 && cardNumber.length < 13) {
        alert("Please enter a valid credit card or CVV number! Credit card numbers must be 13 digits long! CCV numbers must be 3 to 4 digits long!");
        cvvInput.style.boxShadow = "5px 5px 5px red";
        cvvInput.style.border = "1px solid red";
        cardInput.style.boxShadow = "5px 5px 5px red";
        cardInput.style.border = "1px solid red";
        return false;
    }

});

let billCommitBttn = document.getElementById("confirm-bill-add-button");
let shipCommitBttn = document.getElementById("confirm-shipping-add-button");

billCommitBttn.addEventListener("click", (e) => {
    e.preventDefault();
    let billForm = document.getElementById("bill-address-form-div");
    alert("Your Billing Address has been submitted!");
    
 
});

shipCommitBttn.addEventListener("click", (e) => {
    e.preventDefault();
    let shippingForm = document.getElementById("shipping-add-form-div");
    let billForm = document.getElementById("bill-address-form-div");
    let shipH1 = document.getElementById("ship-add-h1");
    alert("Your Billing & Shipping addresses have been submitted!")
    shippingForm.style.display = "none";
    shipH1.style.display = "none";
    
});

function closeReceipt(){

    let receipt = document.getElementById("view-receipt-background");
    receipt.style.display = "none";

}