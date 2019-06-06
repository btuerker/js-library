const library = setupLibrary();

if (!localStorage.uniqueId) {
    localStorage.uniqueId = 1;
}

function setupLibrary() {
    if(localStorage.library) {
        return JSON.parse(localStorage.library).map((book) => Object.assign(new Book(), book));
    }
    return [];
}

function addBookToLibrary() {
    const title  = document.getElementById("title").value;
    const author = document.getElementById("author").value;
    const pages  = document.getElementById("pages").value;
    const read   = document.getElementById("read").checked;

    const book = new Book(title, author, pages, read);
    library.push(book);
    updateLocalStorage("library", library);
    addBookToShelf(book);
}

function addBookToShelf(book) {
    const table = document.getElementById("library-body");
    const newBook = document.createElement("tr");
    newBook.setAttribute("id", "book-" + book.id);
    newBook.innerHTML = Book.prototype.render(book);
    // const newBook = Book.prototype.render(book);
    table.appendChild(newBook);
}

function removeBook(id) {
    Swal.fire({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
    }).then((result) => {
        if (result.value) {
            const book = library.find( (book) => book.id == id );
            library.splice(library.indexOf(book), 1);
            updateLocalStorage("library", library);
            const table = document.getElementById("library-body");
            table.removeChild(document.getElementById("book-" + book.id));
            Swal.fire(
                'Deleted!',
                'Your book has been deleted.',
                'success'
            )
        }
    })
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
        }
    });
}

function toggleRead(id) {
    const index = library.findIndex(book => book.id === id);
    library[index].toggleRead();
    updateLocalStorage("library", library);
}

function updateLocalStorage(key, value) {
    localStorage[key] = JSON.stringify(value);
}

function init() {
    library.forEach((book) => addBookToShelf(book));
}


init();
