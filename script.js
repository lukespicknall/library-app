// const libTable = document.querySelector('libTable');
const tBody = document.querySelector('tbody');
const addBtn = document.querySelector('.add-btn');
const sideForm = document.querySelector('.side-form');
const formOverlay = document.querySelector('.form-overlay');

class Book {
  constructor(title, author, pages, read = false) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const myLibary = Object.values(Book); // creates array of Book objects/values

// runsfunction on specific index assigned to object when created
function readBook(i) {
  const checker = document.querySelector('.read-check'); // looks at readCheck checkbox created in displayBook()
  if (checker.checked === false) {
    // if unchecked after click
    myLibary[i].read = 'no'; // set objects read value to match
  } else if (checker.checked === true) {
    // if checked acter click
    myLibary[i].read = 'yes'; // set objects read value to match
  }
}

// puts Book{} data from myLibrary[] into libTable
function displayBook() {
  tBody.innerHTML = ''; // clears current tbody to avoid repeats
  for (let i = 0; i < myLibary.length; i += 1) {
    // loop throu []
    const row = document.createElement('tr'); // create new tr for new Book
    row.className = 'table-row';
    row.setAttribute('data-id', [i]);
    tBody.appendChild(row); // add that tr to tbody in libTable
    const titleCell = document.createElement('td'); //
    const authorCell = document.createElement('td'); //
    const pagesCell = document.createElement('td'); // create new cells for Book data
    const readCell = document.createElement('td'); //
    const deleteCell = document.createElement('td'); //
    pagesCell.className = 'pages-cell';
    readCell.className = 'read-cell';
    deleteCell.className = 'delete-cell';
    titleCell.textContent = myLibary[i].title; //
    authorCell.textContent = myLibary[i].author; // assign object value to cell content
    pagesCell.textContent = myLibary[i].pages; //
    row.appendChild(titleCell); //
    row.appendChild(authorCell); // add those cells to the new row
    row.appendChild(pagesCell); //

    // Read Checkbox
    const readCheck = document.createElement('input'); // create an input element
    readCheck.setAttribute('type', 'checkbox'); // make it a checkbox
    readCheck.className = 'read-check'; // give it a class name
    if (myLibary[i].read === 'no') {
      // if not read
      // readCheck.checked = 'false';
      readCell.appendChild(readCheck); // add the default unchecked box to the cell
    } else if (myLibary[i].read === 'yes') {
      // if read
      readCheck.checked = 'true'; // make the checkbox checked
      readCell.appendChild(readCheck); // add the checked box to thec cell
    }

    //
    readCheck.addEventListener('click', () => {
      // ** IMPORTANT sets read click event
      readBook([i]); // ** IMPORTANT sets this index instance as the parameter.
    }); // ** IMPORTANT this is how to change read status on a specific object from myLibrary[]
    //

    row.appendChild(readCell); // add read cell to row

    // Delete Button
    const deleteBtn = document.createElement('button'); // create a button
    const deleteImg = document.createElement('img'); // create and img element
    deleteBtn.className = 'delete-btn'; // give button a class
    deleteImg.src = 'images/trash-can-outline.png'; // set img source
    //
    deleteImg.addEventListener('click', () => {
      // ** IMPORTANT sets delete click event
      deleteRow([i]); // ** IMPORTANT sets this index instance as the parameter.
    }); // ** IMPORTANT this is how can delete a specific object from myLibrary[]
    //
    deleteImg.className = 'delete-img'; // give img element a class
    deleteBtn.appendChild(deleteImg); // add image to button
    deleteCell.appendChild(deleteBtn); // add button to cell
    row.appendChild(deleteCell); // add cell to row
  }
}

function deleteRow(index) {
  if (myLibary.length >= 1) {
    myLibary.splice(index, 1); // deletes the index imput from myLibrary[]
    displayBook();
  }
}

function addBook() {
  const title = document.querySelector('#book-title').value; //
  const author = document.querySelector('#author-name').value; //
  const pages = document.querySelector('#page-count').value; // find value of each form input
  const read = document.querySelector('input[name="have-read"]:checked').value; //
  const newBook = new Book(title, author, pages, read); // creates new Book object with those values
  myLibary.push(newBook); // pushes that new book object into myLib[]
  displayBook();
  // deleteRow();
}

addBtn.addEventListener('click', () => {
  sideForm.reset(); // clears form inputs from previous submission
  formOverlay.style.display = 'flex'; // makes form appear
});

sideForm.addEventListener('submit', (e) => {
  e.preventDefault(); // stops sumbit from sending data to server by default
  addBook(); // sends data to myLib[]
  formOverlay.style.display = 'none'; // makes form dissapear on submit
});
