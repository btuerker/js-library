function Book(title, author, pages, read) {
  this.id = Book.prototype.uniqueId;
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;

  this.info = function() {
    return "title: " + this.title + " author: " + this.author +
           " pages: " + this.pages + " read: " + this.read;
  }

  this.toggleRead = function() {
    this.read = !this.read;
  }

  this.render = function() {
    return `
              <td>${this.title}</td>
              <td>${this.author}</td>
              <td>${this.pages}</td>
              <td>
               <label onclick="toggleRead(${this.id})" class="switch">
                  <input type="checkbox" ${(this.read == true) ? 'checked' : null}>
                  <span class="slider round"></span>
                </label>
              </td>
              <td><button type="button" onclick="removeBook(${this.id})">Remove</button></td>
           `
  }
  Book.prototype.uniqueId++;
}

Book.prototype.uniqueId = 1;
