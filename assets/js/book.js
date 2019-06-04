function Book(title, author, pages, read) {
    this.id = parseInt(localStorage.uniqueId);
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.toggleRead = function() {
        this.read = !this.read;
    }

    localStorage.uniqueId++;
}

Book.prototype.info = function(book) {
    return "title: " + book.title + " author: " + book.author +
    " pages: " + book.pages + " read: " + book.read;
}

Book.prototype.render = function(book) {
      return `
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td>${book.pages}</td>
                <td>
                 <label class="switch">
                    <input onchange="toggleRead(${book.id})" type="checkbox" ${(book.read == true) ? 'checked' : null}>
                    <span class="slider round"></span>
                  </label>
                </td>
                <td><button type="button" onclick="removeBook(${book.id})">Remove</button></td>
             `
}

// Book.prototype.render = function(book) {
//     let row = document.createElement("tr");
//     row.setAttribute("id", "book-" + book.id);
//
//     let title = document.createElement("td");
//     title.innerHTML = book.title;
//
//     let author = document.createElement("td");
//     author.innerHTML = book.author;
//
//     let pages = document.createElement("td");
//     pages.innerHTML = book.pages;
//
//     let read = document.createElement("td");
//     let readLabel = document.createElement("label");
//     readLabel.setAttribute("class", "switch");
//     let readInput = document.createElement("input");
//     readInput.setAttribute("type", "checkbox");
//     readInput.setAttribute("onchange", "toggleRead(" + book.id + ")");
//     if (book.read) {
//         readInput.setAttribute("checked", "checked");
//     }
//     let readSpan = document.createElement("span");
//     readSpan.setAttribute("class", "slider round");
//     readLabel.appendChild(readInput);
//     readLabel.appendChild(readSpan);
//     read.appendChild(readLabel);
//
//     let del = document.createElement("td");
//     let delButton = document.createElement("button");
//     delButton.innerHTML = "Remove";
//     delButton.setAttribute("type", "button");
//     delButton.setAttribute("onclick", "removeBook(" + book.id + ")");
//     del.appendChild(delButton);
//
//     row.appendChild(title);
//     row.appendChild(author);
//     row.appendChild(pages);
//     row.appendChild(read);
//     row.appendChild(del);
//     return row;
// }
