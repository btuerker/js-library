// alert("Hello, Wordl!");
let library = [];

// var book = new Book("Eloquent Javascript", "Marjin Haverbeke", 450, false);
// console.log(book.info());

function addBookToLibrary() {
  const form   = document.getElementById("book-form");

  const title  = form.elements["title"].value;
  const author = form.elements["author"].value;
  const pages  = form.elements["pages"].value;
  const read   = form.elements["read"].checked;

  const book = new Book(title, author, pages, read);
  library.push(book);
  addBookToShelf(book);
  form.reset();
}

function addBookToShelf(book) {
  const table = document.getElementById("library-body");
  const newRow = table.insertRow(table.rows.length);
  newRow.innerHTML = book.render();
}

