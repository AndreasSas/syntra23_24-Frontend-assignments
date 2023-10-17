// ---------------------------------------------------------------------------------------------------------------------
// Assignment
// ---------------------------------------------------------------------------------------------------------------------

// maak een class van boeken waar je
//      een titel,
//      auteur
//      en aantal pagina's in kan zetten.

// maak een class van bibliotheek:
//      die een owner heeft
//      en waar je de totale aantal pagina's kan opvragen,
//      de totale aantal boeken
//      en de gemiddelde aantal pagina's per boek.

//      je kan ook een boek toevoegen,
//      en een boek verwijderen op basis van de titel.
//
//      De title is benoemd zoals hieronder, de author is een random string en de pages is een random nummer tussen 50 en 1000.

// Library {
//   owner: 'Jorne',
//   books: [
//     Book { title: 'title-1', author: 'szh7i6vh3fp', pages: 836 },
//     Book { title: 'title-2', author: '7yl4xwhk35j', pages: 170 },
//     Book { title: 'title-4', author: 'romaywrg3w', pages: 756 },
//     Book { title: 'title-5', author: 'wfa463vcheb', pages: 439 },
//     Book { title: 'title-6', author: 'nz5ycbi7ifb', pages: 954 },
//     Book { title: 'title-7', author: 'v6m7v5fx9k', pages: 417 },
//     Book { title: 'title-8', author: 'ibdz3dynf8j', pages: 748 },
//     Book { title: 'title-9', author: 'wzcicfyefaq', pages: 618 },
//     Book { title: 'title-10', author: '5t4h5j96vda', pages: 655 }
//   ]
// }
// There are 10 books in the library of Jorne
// The average pages in the library are 577.7 pages
// The total of pages are 4861

// ---------------------------------------------------------------------------------------------------------------------
// Support code (extra functions, etc..)
// ---------------------------------------------------------------------------------------------------------------------
function generateRandomString(length) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters.charAt(randomIndex);
    }

    return result;
}

function randomRange(min,max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// ---------------------------------------------------------------------------------------------------------------------
// Code
// ---------------------------------------------------------------------------------------------------------------------
class Book {
    pages;
    titel;
    author;

    constructor(title, author=null, pages=null) {
        this.titel = title;

        this.author = (author !== null && typeof author === 'string') ? author : generateRandomString(randomRange(6,12))
        this.pages =( pages !== null && Number.isInteger(pages)) ? pages : randomRange(50, 1000)
    }
}

class Library {
    owner;
    books; // dictionary

    constructor(owner) {
        this.owner = owner;
        this.books = [];
    }

    addBook(book){
        this.books.push(book)
    }

    removeBookByTitle(book_title){
        this.books = this.books.filter((book) => book.title !== book_title)
    }

    getTotalPages(){
        return this.books.reduce(
            (total, book) => total + book.pages,
            0 // initial value of "total"
        )
    }

    getAveragePagesPerBook() {
        if (this.books.length === 0) {
            return 0;
        }
        const totalPages = this.getTotalPages();
        return totalPages / this.books.length;
    }

    printUsefulData(withFullPrintout=false){
        console.log("There are "+ this.books.length +" books in the library of " + this.owner)
        console.log("The average pages in the library are " + this.getAveragePagesPerBook())
        console.log("The total of pages are " + this.getTotalPages())

        // we don't always need this information
        if (withFullPrintout){
            console.log("---")
            console.log(this.books)
        }
    }
}

// ---------------------------------------------------------------------------------------------------------------------
// Main section
// ---------------------------------------------------------------------------------------------------------------------
const library = new Library("Andreas")
const booksToAdd = 10

for (let i = 0; i < booksToAdd; i++) {
    // need to i+1 to make the title start from 1 and not zero
    library.addBook(new Book("title-"+(i+1)))
}




library.printUsefulData(true)
