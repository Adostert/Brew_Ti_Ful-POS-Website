
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



// value of item 
// innerhtml to item clicked on 

// declare variable equal to target title
// event . target . 
