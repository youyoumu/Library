const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        if (this.read === true) {
            return `${this.title} by ${this.author}, ${this.pages} pages, have read`
        } else {
            return `${this.title} by ${this.author}, ${this.pages} pages, haven't read`
        }
    }
}

books = document.getElementById('books')

function addBookToLibrary() {
    title = form.elements.title.value
    author = form.elements.author.value
    pages = form.elements.pages.value
    read = form.elements.read.checked
    myLibrary.push(new Book(title, author, pages, read))
    form.elements.title.value = ''
    form.elements.author.value = ''
    form.elements.pages.value = ''
    form.elements.read.checked = false
    displayBooks()
}

function displayBooks() {
    books.innerHTML = ''
    for (let i = 0; i < myLibrary.length; i++) {
        if (myLibrary[i].read === true) {
            books.innerHTML += `<div class="card">
        <p>${myLibrary[i].info()}</p> 
        <button class="removeButton" data-attribute="${i}">Remove</button>
        <button class="readButton" data-attribute="${i}">Have Read</button>
        </div>`
        } else {
            books.innerHTML += `<div class="card">
        <p>${myLibrary[i].info()}</p> 
        <button class="removeButton" data-attribute="${i}">Remove</button>
        <button class="readButton" data-attribute="${i}">Haven't Read</button>
        </div>`
        }

    }
    removeButton = document.querySelectorAll('.removeButton')
    removeButton.forEach(button => button.addEventListener('click', (e) => {
        console.log(e.target.dataset.attribute)
        myLibrary.splice(e.target.dataset.attribute, 1)
        displayBooks()
    }))

    readButton = document.querySelectorAll('.readButton')
    readButton.forEach(button => button.addEventListener('click', (e) => {
        myLibrary[e.target.dataset.attribute].read = !myLibrary[e.target.dataset.attribute].read
        displayBooks()
    }))
}

form = document.getElementById('form')
form.addEventListener('submit', (e) => {
    e.preventDefault()
    addBookToLibrary()
})





