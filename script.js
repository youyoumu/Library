const myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function () {
        return `${this.title} by ${this.author}, ${this.pages} pages, ${this.read}`
    }
}

newBook = new Book('Inferno', 'Wick', '100', 'have not read')
console.log(newBook.info())

function addBookToLibrary() {
    title = form.elements.title.value
    author = form.elements.author.value
    pages = form.elements.pages.value
    read = form.elements.read.checked
    myLibrary.push(new Book(title, author, pages, read))
    console.log(myLibrary)
    console.log(myLibrary[myLibrary.length - 1].info())
}

form = document.getElementById('form')
console.log(form)
form.addEventListener('submit', (e) => {
    e.preventDefault()
    addBookToLibrary()
})
