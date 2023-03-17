const libTable = document.querySelector('.lib-table');
// const tBody = document.querySelector('tbody');
const addBtn = document.querySelector('.add-btn');
const sideForm = document.querySelector('.side-form');

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const myLibary = Object.values(Book);

function addBook() {
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#author-name').value;
  const pages = document.querySelector('#page-count').value;
  const read = document.querySelector('#have-read').value;
  const newBook = new Book(title, author, pages, read);
  myLibary.push(newBook);
  for (let i = 0; i < myLibary.length; i += 1) {
    ;
  }
}

addBtn.addEventListener('click', (e) => {
  sideForm.style.display = 'block';
});

sideForm.addEventListener('submit', (e) => {
  e.preventDefault();
  addBook();
  sideForm.style.display = 'none';
});

// addBook(bookOne);

// myLibary.forEach(a => {
//   libTable.textContent = myLibary[a];
// });

// }

// libTable.appendChild = myLibary;

// console.log(bookOne.info());
