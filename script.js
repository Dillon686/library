let myLibrary = []
let bookDisplay = document.getElementById("book-display");
let newBook = document.getElementById("new-book");
let modalDisplay = document.getElementById("form-modal");
let titleResponse = document.getElementById("title-response");
let authorResponse = document.getElementById("author-response");
let genreResponse = document.getElementById("genre-response");
let readResponse = document.getElementById("read-response");
let deleteButtons = document.getElementsByClassName("delete-book");

function Book(title, author, genre, read) {
  this.title = title;
  this.author = author;
  this.genre = genre;
  this.hasRead = read;
}

function addBookToLibrary (title, author, genre, read) {
  let newBook = new Book(title, author, genre, read);
  myLibrary.push(newBook);
}

function displayBook(){
  for (let book in myLibrary){
    bookDisplay.innerHTML += `<table><tr><td><span>Title:</span> ${myLibrary[book].title}</td><td><span>Author:</span> ${myLibrary[book].author}</td><td><button class="delete-book" data-index="${book}">X</button></td></tr><tr><td><span>Genre:</span> ${myLibrary[book].genre}</td><td><span>Completed:</span> ${myLibrary[book].hasRead}</td></tr>`;
  }
}

newBook.onclick = function(){
  modalDisplay.style.display = "block";
}

document.querySelector("#close-button").onclick = function() {
  modalDisplay.style.display = "none";
};

document.querySelector("#submit-button").onclick = function(event) {
  event.preventDefault();
  let titleResponse = document.getElementById("title-response");
  let authorResponse = document.getElementById("author-response");
  let genreResponse = document.getElementById("genre-response");
  let readResponse = document.getElementById("read-response");
  addBookToLibrary(titleResponse.value, authorResponse.value, genreResponse.value, readResponse.value);
  modalDisplay.style.display = "none";
  bookDisplay.innerHTML = '';
  displayBook();
}