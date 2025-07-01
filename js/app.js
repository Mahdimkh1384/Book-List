let $ = document
let titleInput = $.getElementById("title")
let authorInput = $.getElementById("author")
let yearInput = $.getElementById("year")
let submitInput = $.querySelector(".btn ")
let mainBookList = $.getElementById("book-list")
let booksArray = []


function addBook(event) {
    event.preventDefault()
    if (titleInput.value && authorInput.value && yearInput.value) {
        let newBook = {
            id: booksArray.length + 1,
            title: titleInput.value,
            author: authorInput.value,
            year: yearInput.value
        }

        booksArray.push(newBook)
        setLocalStorage(booksArray)
        createBookList(booksArray)

        titleInput.value = ''
        authorInput.value = ''
        yearInput.value = ''

        titleInput.focus()

    } else {
        alert("wrong in the inputs")
    }




}
function createBookList(bookList) {
    let newTr, newTh1, newTh2, newTh3

    mainBookList.innerHTML = ''
    bookList.forEach(function (book) {
        newTr = $.createElement('tr')
        newTh1 = $.createElement('th')
        newTh1.innerHTML = book.title

        newTh2 = $.createElement('th')
        newTh2.innerHTML = book.author

        newTh3 = $.createElement('th')
        newTh3.innerHTML = book.year

        newTr.append(newTh1, newTh2, newTh3)
        mainBookList.append(newTr)

    })


}

function setLocalStorage(bookList) {
    localStorage.setItem('books', JSON.stringify(bookList))
}

function screenLoad() {
    let localStorageList = JSON.parse(localStorage.getItem('books'))

    if (localStorageList) {
        booksArray = localStorageList
    } else {
        booksArray = []
    }
    createBookList(booksArray)
}


window.addEventListener('load', screenLoad)
submitInput.addEventListener('click', addBook)