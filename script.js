var popupoverlay = document.querySelector(".popup-overlay");
var popupbox = document.querySelector(".popup-box");
var addpopupbutton = document.getElementById("add-button");
var cancelbutton = document.getElementById("cancel-popup");

addpopupbutton.addEventListener("click", function () {
  popupoverlay.style.display = "block";
  popupbox.style.display = "block";
});

cancelbutton.addEventListener("click", function (event) {
  event.preventDefault();
  popupoverlay.style.display = "none";
  popupbox.style.display = "none";
});

var bookcontainer = document.querySelector(".book-container");
var addbook = document.getElementById("add-book");
var booktitleinput = document.getElementById("book-title-input");
var bookauthorinput = document.getElementById("book-author-input");
var bookdescriptioninput = document.getElementById("book-description-input");

addbook.addEventListener("click", function (event) {
  event.preventDefault();

  // Create new div
  var div = document.createElement("div");
  div.setAttribute("class", "content-box");

  div.innerHTML = `
        <h2>${booktitleinput.value}</h2>
        <h3>${bookauthorinput.value}</h3>
        <p>${bookdescriptioninput.value}</p>
        <button onclick="deletebook(event)" class="delete-button">Delete</button>
    `;

  bookcontainer.append(div);

  // Clear inputs
  booktitleinput.value = "";
  bookauthorinput.value = "";
  bookdescriptioninput.value = "";
});

function deletebook(event) {
  event.target.parentElement.remove();
}
