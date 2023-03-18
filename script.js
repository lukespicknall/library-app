// const libTable = document.querySelector('libTable');
const tBody = document.querySelector('tbody');
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

const myLibary = Object.values(Book); // creates array of Book objects/values

function displayBook() {
  tBody.innerHTML = ''; // clears current tbody to avoid repeats
  for (let i = 0; i < myLibary.length; i += 1) { // loop throu []
    const row = document.createElement('tr'); // create new tr for new Book
    tBody.appendChild(row); // add that tr to tbody in libTable
    const titleCell = document.createElement('td');
    const authorCell = document.createElement('td');
    const pagesCell = document.createElement('td'); // create new cells for Book data
    const readCell = document.createElement('td');
    titleCell.textContent = myLibary[i].title;
    authorCell.textContent = myLibary[i].author;
    pagesCell.textContent = myLibary[i].pages; // assing object value to cell content
    readCell.textContent = myLibary[i].read;
    row.appendChild(titleCell);
    row.appendChild(authorCell);
    row.appendChild(pagesCell); // add those cells to the new row
    row.appendChild(readCell);
  }
}

function addBook() {
  const title = document.querySelector('#book-title').value;
  const author = document.querySelector('#author-name').value;
  const pages = document.querySelector('#page-count').value; // find value of each form input
  const read = document.querySelector('input[name="have-read"]').value;
  const newBook = new Book(title, author, pages, read); // creates new Book object with those values
  myLibary.push(newBook); // pushes that new book object into myLib[]
  displayBook();
}

addBtn.addEventListener('click', (e) => {
  sideForm.reset(); // clears form inputs from previous submission
  sideForm.style.display = 'block'; // makes form appear
});

sideForm.addEventListener('submit', (e) => {
  e.preventDefault(); // stops sumbit from sending data to server by default
  addBook(); // sends data to myLib[]
  sideForm.style.display = 'none'; // makes form dissapear on submit
});
