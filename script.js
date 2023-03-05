let book = "hello";

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function () {
    console.log(`${title} by ${author}, ${pages} pages, ${read}.`);
  };
}
const bookOne = new Book("The Hobbit", "J.R.R Tolkein", "295", "have not read");

// console.log(bookOne.info());
