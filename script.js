const myLibrary = [];

class Book {
    constructor(title, author, pages, read) {
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
}

class Library {
    constructor() {
        this.books = []
    }

    addBook(title, author, pages, read) {
        this.books.push(new Book(title, author, pages, read))
    }
}

class Gui {
    constructor(library) {
        this.library = library
        this.books = document.getElementById('books')
        this.form = document.getElementById('form')
        this.form.addEventListener('submit', (e) => {
            e.preventDefault()
            this.addBook(this.library)
            this.clearForm()
            this.displayBooks(this.library)
            this.handleRemoveButton(this.library)
            this.handleReadButton(this.library)
        })
    }

    addBook(library) {
        const title = this.form.elements.title.value
        const author = this.form.elements.author.value
        const pages = this.form.elements.pages.value
        const read = this.form.elements.read.checked
        library.addBook(title, author, pages, read)
    }

    clearForm() {
        this.form.elements.title.value = ''
        this.form.elements.author.value = ''
        this.form.elements.pages.value = ''
        this.form.elements.read.checked = false
    }

    displayBooks(library) {
        this.books.innerHTML = ''
        for (let i = 0; i < library.books.length; i++) {
            this.books.innerHTML += `<div class="card">
        <p>${library.books[i].info()}</p> 
        <button class="removeButton" data-attribute="${i}">Remove</button>
        <button class="readButton" data-attribute="${i}">Have Read</button>
        </div>`
        }
        this.handleRemoveButton(library)
        this.handleReadButton(library)
    }

    handleRemoveButton(library) {
        const removeButton = document.querySelectorAll('.removeButton')
        removeButton.forEach(button => button.addEventListener('click', (e) => {
            console.log(e.target.dataset.attribute)
            library.books.splice(e.target.dataset.attribute, 1)
            this.displayBooks(library)
        }))
    }

    handleReadButton(library) {
        const readButton = document.querySelectorAll('.readButton')
        readButton.forEach(button => button.addEventListener('click', (e) => {
            library.books[e.target.dataset.attribute].read = !library.books[e.target.dataset.attribute].read
            this.displayBooks(library)
        }))
    }
}

const library = new Library()
const gui = new Gui(library)





