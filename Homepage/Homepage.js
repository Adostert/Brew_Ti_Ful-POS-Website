
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
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) + 1;
    if (document.getElementById("myNumber").value >= parseInt(max)) {
        document.getElementById("myNumber").value = max;
    }
}
function down(min) {
    document.getElementById("myNumber").value = parseInt(document.getElementById("myNumber").value) - 1;
    if (document.getElementById("myNumber").value <= parseInt(min)) {
        document.getElementById("myNumber").value = min;
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
    const menuImages = event.target.attributes[1].nodeValue;
    const newImage = document.querySelector('.item-image');
    newImage.setAttribute('src', menuImages);
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





// value of item 
// innerhtml to item clicked on 

// declare variable equal to target title
// event . target . 
