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

// modal box
// Get the modal
var modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}

const navBar = document.getElementById('nav-bar');
const popupMenu = document.getElementById('custom-popup-menu');

function openModal(event) { 
    modal.style.display = "block";
}

// gets all item class
const menuItems = document.getElementsByClassName('item');
// [htmlElement, htmlElement, ...]

// adds event listener on click to open modal
for (const item of menuItems) {
    item.addEventListener('click', (e) => {
        openModal(e);
    })
}
