// alert("Hello, Wordl!");
let library = [];

// var book = new Book("Eloquent Javascript", "Marjin Haverbeke", 450, false);
// console.log(book.info());

function addBookToLibrary() {
  const form   = document.getElementById("book-form");

  const title  = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages  = document.getElementById("pages").value;
  const read   = document.getElementById("read").checked;

  const book = new Book(title, author, pages, read);
  library.push(book);
  addBookToShelf(book);
}

function addBookToShelf(book) {
  const table = document.getElementById("library-body");
  const newRow = table.insertRow(table.rows.length);
  newRow.setAttribute("id", "book-" + book.id);
  newRow.innerHTML = book.render();
}

function removeBook(id) {
  const book = library.find( (e) => e.id == id );
  library.splice(library.indexOf(book), 1);
  const table = document.getElementById("library-body");
  table.removeChild(document.getElementById("book-" + book.id));
}

function newBookForm() {
  Swal.fire({
    title: 'Book Information',
    html:
    '<input id="title" class="swal2-input" placeholder="Title">' +
    '<input id="author" class="swal2-input" placeholder="Author">' +
    '<input id="pages" class="swal2-input" placeholder="Pages">' +
    '<input type="checkbox" id="read">' +
    '<label for="read">&nbsp;&nbsp;Did you read?</label>'
    ,
    focusConfirm: false,
    confirmButtonText: 'Add Book',
    preConfirm: () => {
      addBookToLibrary();
      console.log("inside confirm");
      // return [
        // document.getElementById('swal-input1').value,
        // document.getElementById('swal-input2').value
      // ]
    }
  });
}

function toggleRead(id) {
  const book = library.find( (e) => e.id == id );
  book.toggleRead();
}

