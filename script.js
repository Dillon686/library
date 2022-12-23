let myLibrary = []
let bookContainer = document.getElementById("book-display");
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
    //create DOM elements for book display table
    let bookTable = document.createElement("table");
    let row1 = document.createElement("tr");
    let row2 = document.createElement("tr");
    let titleCell = document.createElement("td");
    let authorCell = document.createElement("td");
    let genreCell = document.createElement("td");
    let readCell = document.createElement("td");
    let titleContent = document.createElement("p");
    let authorContent = document.createElement("p");
    let genreContent = document.createElement("p");
    let readContent = document.createElement("p");
    let deleteButton = document.createElement("button");
    let readStatusButton = document.createElement("button");
    let titleSpan = document.createElement("span");
    let authorSpan = document.createElement("span");
    let genreSpan = document.createElement("span");
    let readSpan = document.createElement("span");
   

    //Add attributes to DOM elements
    titleContent.textContent += myLibrary[book].title;
    authorContent.textContent += myLibrary[book].author;
    genreContent.textContent += myLibrary[book].genre;
    readContent.textContent += myLibrary[book].hasRead;
    deleteButton.classList += "delete-book";
    deleteButton.setAttribute("data-index", book);
    deleteButton.textContent = "X"
    readStatusButton.classList += "read-status";
    readStatusButton.textContent = 'Change "Completed" status';
    titleSpan.textContent += "Title: "
    authorSpan.textContent += "Author: "
    genreSpan.textContent += "Genre: "
    readSpan.textContent += "Completed?: "

    //append DOM elements
    bookTable.append(row1);
    bookTable.append(row2);
    titleCell.append(titleSpan);
    titleCell.append(titleContent)
    row1.append(titleCell);
    authorCell.append(authorSpan);
    authorCell.append(authorContent);
    row1.append(authorCell);
    row1.append(deleteButton);
    genreCell.append(genreSpan);
    genreCell.append(genreContent);
    row2.append(genreCell);
    readCell.append(readSpan);
    readCell.append(readContent);
    row2.append(readCell);
    row2.append(readStatusButton)
    bookContainer.append(bookTable);

    //function to remove the book entry
    deleteButton.onclick = function (){
      myLibrary.splice(deleteButton.dataset.index, 1);
      bookContainer.innerHTML = "";
      displayBook();
    };

     //function to change Completed status
    readStatusButton.onclick = function (){

      if (myLibrary[book].hasRead.toLowerCase() == "yes"){
        myLibrary[book].hasRead = "No";
      } else {
        myLibrary[book].hasRead = "Yes";
      }
      bookContainer.innerHTML = "";
      displayBook();
    };
    
  }
}

newBook.onclick = function(){
  titleResponse.value = ""
  authorResponse.value = ""
  genreResponse.value = ""
  readResponse.value = ""
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
  bookContainer.innerHTML = "";
  displayBook();
}

