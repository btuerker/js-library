// alert("Hello, Wordl!");
let library = [
  { title: "", author: "", read: true }
];

// var book = new Book("Eloquent Javascript", "Marjin Haverbeke", 450, false);
// console.log(book.info());

function addBookToLibrary() {
  let title = document.getElementById("title").value;
  let author = document.getElementById("author").value;
  let pages = document.getElementById("pages").value;
  let read = document.getElementById("read").checked;

  let book = new Book(title, author, pages, read);
  library.push(book);
  alert();
}