import React from 'react'
import Book from "./Book";

function BookShelf(props) {
    const { title, bookshelf, onChangeBook } = props
    console.log(props);
    return (
        <div className="bookshelf">
            <h2 className="bookshelf-title">{title}</h2>
            <div className="bookshelf-books">
                <ol className="books-grid">
                    {bookshelf.currentlyReading.map((book) => (
                        <li key={book.id}>
                            <Book
                                books={book}
                                onChange={onChangeBook}
                            />
                        </li>
                    ))}

                </ol>
            </div>
        </div>
    )
}

export default BookShelf