function Book(title, author, pages, read) {
    this.id = parseInt(localStorage.uniqueId);
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    localStorage.uniqueId++;
}

Book.prototype.toggleRead = function() {
    this.read = !this.read;
}

Book.prototype.info = function() {
    return "title: " + this.title + " author: " + this.author +
    " pages: " + this.pages + " read: " + this.read;
}

Book.prototype.render = function() {
      return `
                <td>${this.title}</td>
                <td>${this.author}</td>
                <td>${this.pages}</td>
                <td>
                 <label class="switch">
                    <input onchange="toggleRead(${this.id})" type="checkbox" ${(this.read == true) ? 'checked' : null}>
                    <span class="slider round"></span>
                  </label>
                </td>
                <td><button type="button" onclick="removeBook(${this.id})">Remove</button></td>
             `
}

// Book.prototype.render = function() {
//     let row = document.createElement("tr");
//     row.setAttribute("id", "book-" + this.id);
//
//     let title = document.createElement("td");
//     title.innerHTML = this.title;
//
//     let author = document.createElement("td");
//     author.innerHTML = this.author;
//
//     let pages = document.createElement("td");
//     pages.innerHTML = this.pages;
//
//     let read = document.createElement("td");
//     let readLabel = document.createElement("label");
//     readLabel.setAttribute("class", "switch");
//     let readInput = document.createElement("input");
//     readInput.setAttribute("type", "checkbox");
//     readInput.setAttribute("onchange", "toggleRead(" + this.id + ")");
//     if (this.read) {
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
//     delButton.setAttribute("onclick", "removeBook(" + this.id + ")");
//     del.appendChild(delButton);
//
//     row.appendChild(title);
//     row.appendChild(author);
//     row.appendChild(pages);
//     row.appendChild(read);
//     row.appendChild(del);
//     return row;
// }
