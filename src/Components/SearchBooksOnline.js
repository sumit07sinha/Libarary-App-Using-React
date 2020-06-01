import React, { Component } from 'react';
import { Link } from "react-router-dom";
import * as fetchBooksFromAPI from "../BooksAPI";
import BookDesign from "./Book"
class searchBooksOnline extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: '',
            books: []
        };
    }
    updateQuery = (inputValue) => {
        this.setState({ query: inputValue })
        console.log(inputValue);
    }
    searchBooks = () => {
        fetchBooksFromAPI.search(this.state.query)
            .then((books) => {

                console.log(books)
                this.setState({
                    books: [books]
                })
            })
    }
    handleBook = (book, shelf) => {
        fetchBooksFromAPI.update(book, shelf)
            .then(() => {
                fetchBooksFromAPI.getAll()
                    .then((books) => {
                        this.setState({
                            currentlyReading: books.filter((book) => book.shelf === "currentlyReading"),
                            wantToRead: books.filter((book) => book.shelf === "wantToRead"),
                            read: books.filter((book) => book.shelf === "read")
                        })
                    })
            })
    }
    render() {
        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link to="/">
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            onChange={(event) => this.updateQuery(event.target.value)} />

                    </div>
                    <button onClick={this.searchBooks} className="searchBooks">+</button>
                </div>
                <div className="search-books-results">

                    <ol className="books-grid">
                        {this.state.books && (this.state.books.map((bs) => (bs.map((b) =>
                            <li key={b.id}>
                                <BookDesign
                                    books={b}
                                    onSelection={this.handleBook}
                                />
                            </li>)
                        )))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default searchBooksOnline;

