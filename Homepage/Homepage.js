// open and close popup
let popupDiv = document.getElementById("popup-bg");

function openPopupMenu() {
    popupDiv.style.display = "block";
}

function closePopupMenu() { 
    popupDiv.style.display = "none";
}

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

// modal 
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

function openModal(event) { 
    modal.style.display = "block";
}

const menuItems = document.getElementsByClassName('item');
// [htmlElement, htmlElement, ...]
console.log(menuItems);

for (const item of menuItems) {
    item.addEventListener('click', (e) => {
        openModal(e);
    })
}
