function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return "title: " + this.title + " author: " + this.author +
           " pages: " + this.pages + " read: " + this.read;
  }

  this.render = function() {
    return `
              <td>${this.title}</td>
              <td>${this.author}</td>
              <td>${this.pages}</td>
              <td>${this.read}</td>
           `
  }
}
