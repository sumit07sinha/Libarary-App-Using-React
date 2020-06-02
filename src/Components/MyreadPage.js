import React from 'react'
import BookDesign from "./Book";

const BookStore = (props) => {
    const { title, bookshelf, handleBookOnTheShelf } = props
    console.log(props);
    return (
        (<div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {(title === "Currently Reading") && (bookshelf.currentlyReading.map((book) => (
                        <li key={book.id}>
                            <BookDesign
                                books={book}
                                onSelection={handleBookOnTheShelf}
                            />
                        </li>
                    )))}</ol>
                <ol className="books-grid">
                    {(title === "Want To Read") && (bookshelf.wantToRead.map((book) => (
                        <li key={book.id}>
                            <BookDesign
                                books={book}
                                onSelection={handleBookOnTheShelf}
                            />
                        </li>
                    )))}</ol>
                <ol className="books-grid">
                    {(title === "Read") && (bookshelf.read.map((book) => (
                        <li key={book.id}>
                            <BookDesign
                                books={book}
                                onSelection={handleBookOnTheShelf}
                            />
                        </li>
                    )))}</ol>
            </div>
        </div>
        ))

}

export default BookStore