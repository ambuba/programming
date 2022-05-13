// Define addFavoriteBook(..) function

function addFavoriteBook(bookName) {
    //console.log(bookName);
    //Exclude books with the name "Great" in the title
    if (!bookName.includes("Great")) {
        //console.log(bookName);
        //Add book to array
        favoriteBooks.push(bookName);
    }
}

// Define printFavoriteBooks() function
function printFavoriteBooks() {
    console.log(`Favorite Books: ${favoriteBooks.length}`);
    for (let bookName of favoriteBooks) {
        console.log(`\n- ${bookName}`);
    }
}

var favoriteBooks = [];

addFavoriteBook("A Song of Ice and Fire");
addFavoriteBook("The Great Gatsby");
addFavoriteBook("Crime & Punishment");
addFavoriteBook("Great Expectations");
addFavoriteBook("You Don't Know JS");

// Print out favorite books
printFavoriteBooks();
