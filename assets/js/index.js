const library = setupLibrary();

if (!localStorage.uniqueId) {
  localStorage.uniqueId = 1;
}

function setupLibrary() {
  if (localStorage.library) {
    return JSON.parse(localStorage.library).map((book) =>
      Object.assign(new Book(), book),
    );
  }
  return [];
}

function addBookToLibrary(title, author, pages, read) {
  const book = new Book(title, author, pages, read);
  library.push(book);
  updateLocalStorage('library', library);
  addBookToShelf(book);
}

function addBookToShelf(book) {
  const table = document.getElementById('library-body');
  const newBook = document.createElement('tr');
  newBook.setAttribute('id', 'book-' + book.id);
  newBook.innerHTML = book.render();
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
    confirmButtonText: 'Yes, delete it!',
  }).then((result) => {
    if (result.value) {
      const book = library.find((book) => book.id == id);
      library.splice(library.indexOf(book), 1);
      updateLocalStorage('library', library);
      const table = document.getElementById('library-body');
      table.removeChild(document.getElementById('book-' + book.id));
      Swal.fire('Deleted!', 'Your book has been deleted.', 'success');
    }
  });
}

function newBookForm() {
  Swal.fire({
    title: 'Book Information',
    html:
      '<input id="title" class="swal2-input" placeholder="Title">' +
      '<input id="author" class="swal2-input" placeholder="Author">' +
      '<input id="pages" class="swal2-input" placeholder="Pages">' +
      '<input type="checkbox" id="read">' +
      '<label for="read">&nbsp;&nbsp;Did you read?</label>',
    focusConfirm: false,
    confirmButtonText: 'Add Book',
    preConfirm: () => {
      const title = document.getElementById('title').value;
      const author = document.getElementById('author').value;
      const pages = document.getElementById('pages').value;
      const read = document.getElementById('read').checked;
      if (newBookValidator(title, author, pages, read)) {
        addBookToLibrary(title, author, pages, read);
        return true;
      }
      return false;
    },
  });
}

function toggleRead(id) {
  const index = library.findIndex((book) => book.id == id);
  library[index].toggleRead();
  updateLocalStorage('library', library);
}

function updateLocalStorage(key, value) {
  localStorage[key] = JSON.stringify(value);
}

function init() {
  library.forEach((book) => addBookToShelf(book));
}

function newBookValidator(title, author, pages) {
  if (!titleValidator(title)) {
    document.getElementById('title').innerHTML = '';
    document.getElementById('title').classList.add('invalid');
  } else {
    document.getElementById('title').classList.remove('invalid');
  }

  if (!authorValidator(author)) {
    document.getElementById('author').innerHTML = '';
    document.getElementById('author').classList.add('invalid');
  } else {
    document.getElementById('author').classList.remove('invalid');
  }

  if (!pagesValidator(pages)) {
    document.getElementById('pages').innerHTML = '';
    document.getElementById('pages').classList.add('invalid');
  } else {
    document.getElementById('pages').classList.remove('invalid');
  }

  return (
    titleValidator(title) && authorValidator(author) && pagesValidator(pages)
  );
}

function titleValidator(title) {
  return /^([^\s])+(\s?[^\s]*)*$/i.test(title) && title.length < 30;
}

function authorValidator(author) {
  return /^([^\s])+(\s?[^\s]*)*$/i.test(author) && author.length < 30;
}

function pagesValidator(pages) {
  return /^\d{1,10}$/.test(pages);
}

init();
