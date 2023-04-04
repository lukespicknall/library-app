const tBody = document.querySelector('tbody');
const addBtn = document.querySelector('.add-btn');
const sideForm = document.querySelector('.side-form');
const formOverlay = document.querySelector('.form-overlay');

class Book {
  constructor(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
  }
}

const myLibary = Object.values(Book); // creates array of Book objects/values

// puts Book{} data from myLibrary[] into libTable
function displayBook() {
  tBody.innerHTML = ''; // clears current tbody to avoid repeats
  for (let i = 0; i < myLibary.length; i += 1) {
    // loop throu myLibrary[]
    const row = document.createElement('tr'); // create new tr for new Book
    row.className = 'table-row';
    tBody.appendChild(row); // add that tr to tbody in libTable
    const titleCell = document.createElement('td'); //
    const authorCell = document.createElement('td'); //
    const pagesCell = document.createElement('td'); // create new cells for Book data
    const readCell = document.createElement('td'); //
    const deleteCell = document.createElement('td'); //
    pagesCell.className = 'pages-cell'; //
    readCell.className = 'read-cell'; // give class names to table cells
    deleteCell.className = 'delete-cell'; //
    titleCell.textContent = myLibary[i].title; //
    authorCell.textContent = myLibary[i].author; // assign object value to cell content
    pagesCell.textContent = myLibary[i].pages; //
    row.appendChild(titleCell); //
    row.appendChild(authorCell); // add those cells to the new row
    row.appendChild(pagesCell); //

    // Read Checkbox
    const readCheck = document.createElement('input'); // create an input element
    readCheck.setAttribute('type', 'checkbox'); // make it a checkbox
    readCheck.setAttribute('data-id', [i]); // assign data-id that = object's array index
    readCheck.className = 'read-check'; // give it a class name
    if (myLibary[i].read === 'no') {
      // if not read
      readCell.appendChild(readCheck); // add the default unchecked box to the cell
    } else if (myLibary[i].read === 'yes') {
      // if read
      readCheck.checked = 'true'; // make the checkbox checked
      readCell.appendChild(readCheck); // add the checked box to the readCell
    }
    row.appendChild(readCell); // add readCell to row

    // Delete Button
    const deleteBtn = document.createElement('button'); // create a button
    const deleteImg = document.createElement('img'); // create and img element
    deleteBtn.className = 'delete-btn'; // give button a class
    deleteImg.src = 'images/trash-can-outline.png'; // set img source
    deleteImg.className = 'delete-img'; // give img element a class
    deleteImg.setAttribute('data-id', [i]); // assign data-id that = object's array index
    deleteBtn.appendChild(deleteImg); // add image to button
    deleteCell.appendChild(deleteBtn); // add button to cell
    row.appendChild(deleteCell); // add cell to row
  }
}

// clears form and hides it if user clicks outside of form when form is visible
function clickOut() {
  if (formOverlay.style.display === 'flex') {
    // if form is visible
    formOverlay.addEventListener('click', (e) => {
      // click listener on formOverlay
      const clickSpot = e.target; // make clickSpot = the event target
      if (clickSpot.className === 'form-overlay-vis') {
        // if click happened on formOverlay, i.e. outisde of the form
        sideForm.reset(); // reset the form
        formOverlay.classList.add('form-overlay'); // add hidden class
        formOverlay.classList.remove('form-overlay-vis'); // remove visible class
        addBtn.style.zIndex = '0'; // bring addBtn to nuetral z plane
      }
    });
  }
}

// creates new {Book}, adds it to myLibrary[], displays updated myLibrary[]
function addBook() {
  const title = document.querySelector('#book-title').value; //
  const author = document.querySelector('#author-name').value; //
  const pages = document.querySelector('#page-count').value; // find value of each form input
  const read = document.querySelector('input[name="have-read"]:checked').value; //
  const newBook = new Book(title, author, pages, read); // creates new Book object with those values
  myLibary.push(newBook); // pushes that new book object into myLib[]
  displayBook();
}

// runs function specific object related to element ID passed in clickRead()
function readBook(readBox, boxId) {
  if (readBox.checked === false) {
    // if unchecked after click
    myLibary[boxId].read = 'no'; // set objects read value to match
  } else if (readBox.checked === true) {
    // if checked acter click
    myLibary[boxId].read = 'yes'; // set objects read value to match
  }
}

// removes {Book} from myLibrary[]
function deleteBook(deleteBoxID) {
  // takes data-id linked to element clicked
  if (myLibary.length >= 1) {
    // if there is t least 1 book
    myLibary.splice(deleteBoxID, 1); // use data-id as [] index to remove object
    displayBook(); // display updated array with {Book} removed
  }
}

// listens to Read? click and passes specific target values to readBook()
function clickRead() {
  document.addEventListener('click', (e) => {
    // listen for click
    const readBox = e.target; // set var to element clicked
    const readBoxId = e.target.dataset.id; // set var to ID associated w/ el clicked
    if (e.target.className === 'read-check') {
      // if that el was the read checkbox
      readBook(readBox, readBoxId); // pass the el and it's ID to readBook()
    }
  });
}

// listens to delet icon click and passes specific target values to delete Book()
function clickDelete() {
  document.addEventListener('click', (e) => {
    // listen for click
    const deleteBoxID = e.target.dataset.id; // set var to ID associated w/ el clicked
    if (e.target.className === 'delete-img') {
      // if that el was the delete img (trash can)
      deleteBook(deleteBoxID); // pass the el and it's ID to deleteBook()
    }
  });
}

clickRead();

clickDelete();

// calls form when +Add Book is clicked
addBtn.addEventListener('click', () => {
  sideForm.reset(); // clears form inputs from previous submission
  formOverlay.style.display = 'flex'; // makes form appear
  formOverlay.classList.remove('form-overlay'); // removes hidden class
  formOverlay.classList.add('form-overlay-vis'); // adds visible class
  document.getElementById('book-title').focus();
  addBtn.style.zIndex = '-1'; // set addBtn to background via z index
  clickOut();
});

// passes form data to addBook() and hides form when Submit is clicked
sideForm.addEventListener('submit', (e) => {
  e.preventDefault(); // stops sumbit from sending data to server by default
  addBook(); // sends data to myLib[]
  formOverlay.classList.remove('form-overlay-vis'); // removes visible class
  formOverlay.classList.add('form-overlay'); // adds hidden class
  // makes form dissapear on submit
  addBtn.style.zIndex = '0'; // bring addBtn to nuetral z plane
});
