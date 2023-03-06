const myLibary = [];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  // this.info = function () {
  //   console.log(`${title} by ${author}, ${pages} pages, ${read}.`);
  // };
}
const bookOne = new Book('The Hobbit', 'J.R.R Tolkein', '295', 'have not read');
const bookTwo = new Book('Riven Rock', 'T.C. Boyle', '362', 'have read');

function addBook(a, b) {
  myLibary.push(a, b);
}

addBook(bookOne, bookTwo);

// console.log(bookOne.info());
