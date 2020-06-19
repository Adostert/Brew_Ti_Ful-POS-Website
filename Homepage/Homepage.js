

function checkoutPopUp(){

    const proPage = document.getElementById("product-page");
    const checkOut = document.getElementById("background-shadow");

    checkOut.style.display = "flex";
    proPage.style.display = "none"
}
// open and close popup
// let popupDiv = document.getElementById("popup-bg");

// function openPopupMenu() {
//     popupDiv.style.display = "block";
// }

// function closePopupMenu() { 
//     popupDiv.style.display = "none";
// }

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


// DRINK MODAL BOX
// Get the modal
const modalDrink = document.getElementById("myModal-drink");


// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modalDrink.style.display = "none";
    modalFood.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modalDrink) {
    modalDrink.style.display = "none";
    }
    // const menuImages = event.target.attributes[1].nodeValue;
    // const newImage = document.querySelector('.item-image');
    // newImage.setAttribute('src', menuImages);
    // console.log(event.target.attributes[1].nodeValue)
}

const navBar = document.getElementById('nav-bar');
const popupMenu = document.getElementById('custom-popup-menu');

function openModal(event) { 
    modalDrink.style.display = "flex";
}

// gets all item class
const menuItems = document.getElementsByClassName('item-drink');
// [htmlElement, htmlElement, ...]

// adds event listener on click to open modal
for (const item of menuItems) {
    item.addEventListener('click', (e) => {
        openModal(e);
    })
}



// // FOOD MODAL BOX
// // Get the modal
// const modalFood = document.getElementById("myModal-food");


// // Get the <span> element that closes the modal
// const span = document.getElementsByClassName("close")[0];

// // When the user clicks on <span> (x), close the modal
// span.onclick = function() {
//     modalFood.style.display = "none";
// }

// // When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
//     if (event.target == modalFood) {
//     modalFood.style.display = "none";
//     }
//     const menuImages = event.target.attributes[1].nodeValue;
//     const newImage = document.querySelector('.item-image');
//     newImage.setAttribute('src', menuImages);
//     // console.log(event.target.attributes[1].nodeValue)
// }

// const navBar = document.getElementById('nav-bar');
// const popupMenu = document.getElementById('custom-popup-menu');

// function openModal(event) { 
//     modalFood.style.display = "flex";
// }

// // gets all item class
// const menuItems = document.getElementsByClassName('item-food');
// // [htmlElement, htmlElement, ...]

// // adds event listener on click to open modal
// for (const item of menuItems) {
//     item.addEventListener('click', (e) => {
//         openModal(e);
//     })
// }


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

  let bgShadow = document.getElementById("background-shadow")

  bgShadow.style.display = "none";

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

